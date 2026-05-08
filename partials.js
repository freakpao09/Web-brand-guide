// Shared sidebar + active page highlight
function renderSidebar(activeId) {
  const pages = [
    { id: 'overview', label: 'Overview', href: 'index.html', icon: 'home' },
    { id: 'logo', label: 'Logo', href: 'logo.html', icon: 'image' },
    { id: 'colors', label: 'Colors', href: 'colors.html', icon: 'palette' },
    { id: 'typography', label: 'Typography', href: 'typography.html', icon: 'type' },
    { id: 'icons', label: 'Icons', href: 'icons.html', icon: 'grid' },
    { id: 'components', label: 'Components', href: 'components.html', icon: 'layers' },
    { id: 'voice', label: 'Voice & Tone', href: 'voice.html', icon: 'message' },
    { id: 'downloads', label: 'Downloads', href: 'downloads.html', icon: 'download' },
  ];
  const icons = {
    home: '<path d="M3 12l9-9 9 9M5 10v10h14V10"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 22a10 10 0 1 1 0-20c5 0 10 4 10 9a4.5 4.5 0 0 1-4.5 4.5H15a2 2 0 0 0-2 2 2 2 0 0 1-1 4z"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    layers: '<path d="M12 2l10 6-10 6L2 8l10-6zM2 16l10 6 10-6M2 12l10 6 10-6"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  };

  const navItems = pages.map(p => `
    <a href="${p.href}" class="${p.id === activeId ? 'is-active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${icons[p.icon]}</svg>
      <span>${p.label}</span>
    </a>
  `).join('');

  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <img src="assets/logos/primary-black.png" alt="Search Engine Journal" />
      </div>
      <nav class="nav">
        <div class="nav-section">Brand Guide</div>
        ${navItems}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-footer-label">Need help?</div>
        <a href="mailto:design@searchenginejournal.com" class="sidebar-footer-link">
          Contact Design Team
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </aside>
  `;
}

// Hydrate: every page calls this on DOMContentLoaded
function mountSidebar(activeId) {
  document.getElementById('sidebar-mount').outerHTML = renderSidebar(activeId);
}

// Copy-to-clipboard for swatches
function copyText(text) {
  navigator.clipboard?.writeText(text);
  const t = document.getElementById('copied-toast');
  if (t) {
    t.textContent = `Copied ${text}`;
    t.classList.add('show');
    clearTimeout(window.__copiedT);
    window.__copiedT = setTimeout(() => t.classList.remove('show'), 1400);
  }
}
