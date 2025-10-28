// layout.js - Script pour créer le layout Grid sur toutes les pages

const LayoutManager = {
  config: {
    headerContent: '    <header id="title_frame" class="windowed_red"><a href="/"><img src="/img/flep_white.png" class="logo" alt="FLEP logo"></a></header>',
    sidebarContent: `
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `,
    footerContent: '<p>&copy; 2025 Mon Site</p>',
    sidebarWidth: '250px',
    headerHeight: '80px',
    footerHeight: '60px'
  },

  init(customConfig = {}) {
    // Fusionner la config personnalisée
    this.config = { ...this.config, ...customConfig };
    
    this.injectCSS();
    this.createLayout();
  },

  injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: grid;
        grid-template-columns: ${this.config.sidebarWidth} 1fr;
        grid-template-rows: ${this.config.headerHeight} 1fr ${this.config.footerHeight};
        grid-template-areas:
          "header header"
          "sidebar main"
          "footer footer";
        gap: 0;
        font-family: system-ui, -apple-system, sans-serif;
      }

      .layout-header {
        grid-area: header;
        background: #f1c56eff;
        color: white;
        padding: 20px;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 4px rgba(231, 0, 0, 0.1);
      }

      .layout-sidebar {
        grid-area: sidebar;
        background: #fbe5bcff;
        color: white;
        padding: 20px;
        overflow-y: auto;
      }

      .layout-sidebar nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .layout-sidebar nav li {
        margin-bottom: 10px;
      }

      .layout-sidebar nav a {
        color: white;
        text-decoration: none;
        padding: 8px 12px;
        display: block;
        border-radius: 4px;
        transition: background 0.3s;
      }

      .layout-sidebar nav a:hover {
        background: rgba(255,255,255,0.1);
      }

      .layout-main {
        grid-area: main;
        background: #f8f0d9ff;
        padding: 20px;
        overflow-y: auto;
      }

      .layout-footer {
        grid-area: footer;
        background: #90c8ffff;
        color: white;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Responsive */
      @media (max-width: 768px) {
        body {
          grid-template-columns: 1fr;
          grid-template-rows: ${this.config.headerHeight} 1fr ${this.config.footerHeight};
          grid-template-areas:
            "header"
            "main"
            "footer";
        }
        
        .layout-sidebar {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  },

  createLayout() {
    // Sauvegarder le contenu original
    const originalContent = document.body.innerHTML;

    // Créer la nouvelle structure
    document.body.innerHTML = `
      <header class="layout-header">
        ${this.config.headerContent}
      </header>
      
      <aside class="layout-sidebar">
        ${this.config.sidebarContent}
      </aside>
      
      <main class="layout-main">
        ${originalContent}
      </main>
      
      <footer class="layout-footer">
        ${this.config.footerContent}
      </footer>
    `;
  }
};

// Auto-initialisation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Chercher une config personnalisée dans window.layoutConfig
    LayoutManager.init(window.layoutConfig || {});
  });
} else {
  LayoutManager.init(window.layoutConfig || {});
}

// Exporter pour utilisation manuelle si nécessaire
window.LayoutManager = LayoutManager;