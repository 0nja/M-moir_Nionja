// State
let allDesigns = [];
let categories = [];
let currentDesignMarkdown = '';

// DOM Elements
const homeView = document.getElementById('home-view');
const demoView = document.getElementById('demo-view');
const grid = document.getElementById('designs-grid');
const filterSelect = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const btnBack = document.getElementById('btn-back');
const btnCopy = document.getElementById('btn-copy');
const iframe = document.getElementById('demo-iframe');
const demoUrl = document.getElementById('demo-url');
const markdownContent = document.getElementById('markdown-content');
const toast = document.getElementById('toast');

// Initialize App
async function init() {
    try {
        // Load categories
        const catRes = await fetch('taxonomy/categories.json');
        categories = await catRes.json();
        
        // Populate filter
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            filterSelect.appendChild(option);
        });

        // Load manifest
        const manifestRes = await fetch('designs/manifest.json');
        const manifest = await manifestRes.json();
        
        // Load all markdown files
        for (const item of manifest) {
            const mdRes = await fetch(item.path);
            const mdText = await mdRes.text();
            
            // Basic Frontmatter parser
            const parsed = parseFrontmatter(mdText);
            allDesigns.push(parsed);
        }

        renderGrid(allDesigns);
        setupEventListeners();
    } catch (error) {
        console.error("Error initializing app:", error);
    }
}

// Simple Frontmatter parser
function parseFrontmatter(text) {
    const lines = text.split('\n');
    let inFrontmatter = false;
    let metadata = {};
    let content = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim() === '---') {
            inFrontmatter = !inFrontmatter;
            continue;
        }
        
        if (inFrontmatter) {
            const colonIdx = line.indexOf(':');
            if (colonIdx !== -1) {
                const key = line.slice(0, colonIdx).trim();
                let value = line.slice(colonIdx + 1).trim();
                
                // Remove brackets and quotes for arrays/strings
                if (value.startsWith('[')) {
                    value = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim().replace(/['"]/g, ''));
                }
                
                metadata[key] = value;
            }
        } else {
            content.push(line);
        }
    }
    
    return {
        ...metadata,
        rawText: text, // The full markdown to copy
        markdown: content.join('\n') // The content to render
    };
}

// Render Grid
function renderGrid(designs) {
    grid.innerHTML = '';
    
    designs.forEach(design => {
        const catName = categories.find(c => c.id === design.category)?.name || design.category;
        
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openDemo(design);
        
        const tagsHtml = Array.isArray(design.tags) 
            ? design.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('') 
            : '';

        card.innerHTML = `
            <img src="${design.thumbnail || 'https://via.placeholder.com/800x400'}" alt="${design.name}" class="card-thumbnail">
            <div class="card-content">
                <div class="card-category">${catName}</div>
                <h3 class="card-title">${design.name}</h3>
                <div class="card-tags">${tagsHtml}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Open Demo
function openDemo(design) {
    homeView.classList.remove('active');
    demoView.classList.add('active');
    
    // Set current markdown for copying
    currentDesignMarkdown = design.rawText;
    
    // Render markdown preview
    // Using marked.js if available, otherwise raw text
    if (window.marked) {
        markdownContent.innerHTML = marked.parse(design.rawText);
    } else {
        markdownContent.innerHTML = `<pre>${design.rawText}</pre>`;
    }
    
    // Load iframe
    // Determine path based on preview_url (e.g. /demos/modern-saas-01)
    const demoPath = `public${design.preview_url}/index.html`;
    iframe.src = demoPath;
    demoUrl.textContent = `designhub.local${design.preview_url}`;
}

// Close Demo
function closeDemo() {
    demoView.classList.remove('active');
    homeView.classList.add('active');
    iframe.src = '';
}

// Copy to Clipboard
function copyDesign() {
    navigator.clipboard.writeText(currentDesignMarkdown).then(() => {
        showToast();
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Event Listeners
function setupEventListeners() {
    btnBack.addEventListener('click', closeDemo);
    btnCopy.addEventListener('click', copyDesign);
    
    // Filter
    filterSelect.addEventListener('change', (e) => {
        filterDesigns();
    });
    
    // Search
    searchInput.addEventListener('input', (e) => {
        filterDesigns();
    });
}

function filterDesigns() {
    const cat = filterSelect.value;
    const search = searchInput.value.toLowerCase();
    
    const filtered = allDesigns.filter(design => {
        const matchCat = cat === 'all' || design.category === cat;
        const matchSearch = design.name.toLowerCase().includes(search) || 
                          (Array.isArray(design.tags) && design.tags.some(t => t.toLowerCase().includes(search)));
        return matchCat && matchSearch;
    });
    
    renderGrid(filtered);
}

// Start
document.addEventListener('DOMContentLoaded', init);
