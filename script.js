function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('active');
    } else {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function showLogin() {
    alert('Login form would appear here');
}

function showSignup() {
    alert('Signup form would appear here');
}

function createNewBlog() {
    alert('New blog creation interface');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !sidebarToggle.contains(event.target) && 
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active', 'collapsed');
        mainContent.classList.remove('expanded');
    }
});
