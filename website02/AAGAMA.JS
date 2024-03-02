function toggleMenu() {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('show');
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.classList.toggle('show-navitems');
    });
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('close');
}

fetchContent('home');
function navigateTo(page) {
    fetchContent(page);
}

function fetchContent(page) {
    let content = [];
    switch (page) {
        case 'home':
            content.push(`
      <header class="home-page">
      <div class="half-circle">
          <div class="half-circle-content">
              <img src=""/>
              <h1 class="AAGAMA">AAGAMA-2K24 </h1>
              <span id=""></span>
              <button class="button-85" role="button" onclick="navigateTo('main')">Welcome To Mic College Of Technology</button>
          </div>
      </div>
     </header>
            `);
            break;
        case 'Catalogue':
            content.push(`
            
            <div class="catalogue">
            <img   src="" alt="Student Image">
            </div>
            `)
            break;
        case 'Main':
            content.push(`
            <div class="main">     
              `)
            break;
        default:
            content = ["<h2>Page Not Found</h2><p>The requested page could not be found.</p>"];
            break;
    }
    

    // Update the main content
    document.querySelector('main').innerHTML = content.join('');
}