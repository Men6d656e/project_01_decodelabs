// Mobile navigation drawer toggle

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  if (!menuButton || !sidebar) return;

  // Ensure initial aria-expanded state matches sidebar visibility
  menuButton.setAttribute('aria-expanded', 'false');

  const toggleSidebar = () => {
    const isOpen = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  };

  menuButton.addEventListener('click', toggleSidebar);

  // Close drawer when clicking a link inside the sidebar (mobile UX)
  sidebar.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      sidebar.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
