// layout.js - Script pour créer le layout Grid sur toutes les pages

function initLayout() {
  // 1. Créer le CSS pour le Grid
  const style = document.createElement('style');
  style.textContent = `
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: grid;
      grid-template-columns: 250px 1fr;
      grid-template-rows: 80px 1fr 60px;
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      gap: 0;
    }

    .layout-header {
      grid-area: header;
      background: #007fffff;
      color: white;
      padding: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .layout-sidebar {
      grid-area: sidebar;
      background: #cce6ffff;
      color: white;
      padding: 20px;
      overflow-y: auto;
    }

    .layout-main {
      grid-area: main;
      background: #ecf0f1;
      padding: 20px;
      overflow-y: auto;
    }

    .layout-footer {
      grid-area: footer;
      background: #2c3e50;
      color: white;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Responsive : masquer sidebar sur mobile */
    @media (max-width: 768px) {
      body {
        grid-template-columns: 1fr;
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

  // 2. Récupérer le contenu existant du body
  const originalContent = document.body.innerHTML;

  // 3. Créer la structure Grid
  document.body.innerHTML = `
    <header class="layout-header">
      <h1>Mon Site</h1>
    </header>
    
    <aside class="layout-sidebar">
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
    
    <main class="layout-main">
      ${originalContent}
    </main>
    
    <footer class="layout-footer">
      <p>&copy; 2025 Mon Site</p>
    </footer>
  `;
}

// Exécuter quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLayout);
} else {
  initLayout();
}