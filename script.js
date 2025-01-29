const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Hide all pages and show the selected one
function showPage(target) {
  pages.forEach(page => page.style.display = 'none');
  document.getElementById(`${target}-page`).style.display = 'block';
}

// Initially show the dashboard
showPage('dashboard');

// Add event listeners to each nav item link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.closest('a').getAttribute('data-target');
    showPage(target);
  });
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });


  // Get all the nav items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove active class from all items
    navItems.forEach(i => i.classList.remove('active'));

    // Add active class to the clicked item
    item.classList.add('active');
    
    // You can also add functionality here to show the corresponding page
    const targetPage = document.getElementById(item.querySelector('a').dataset.target + '-page');
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    
    // Show the target page
    targetPage.style.display = 'block';
  });
});
