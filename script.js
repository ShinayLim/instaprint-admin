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
  