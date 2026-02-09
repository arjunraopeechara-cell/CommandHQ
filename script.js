// CommandHQ - Application Logic

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('CommandHQ initialized!');
    
    // Initialize dock navigation
    initDockNavigation();
    
    // Initialize button interactions
    initButtonHandlers();
    
    // Add widget interactions
    initWidgetInteractions();
});

// Dock navigation functionality
function initDockNavigation() {
    const dockItems = document.querySelectorAll('.dock-item');
    
    dockItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('title');
            console.log(`Navigating to: ${title}`);
            
            // Add active state animation
            this.style.transform = 'translateY(-5px) scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Future: Navigate to different sections
            showNotification(`${title} section - Coming soon!`);
        });
    });
}

// Button handlers for widgets
function initButtonHandlers() {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const widgetTitle = this.closest('.widget').querySelector('h2').textContent;
            console.log(`Button clicked in: ${widgetTitle}`);
            showNotification(`${widgetTitle} feature - Coming soon!`);
        });
    });
}

// Widget hover interactions
function initWidgetInteractions() {
    const widgets = document.querySelectorAll('.widget');
    
    widgets.forEach(widget => {
        widget.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
        });
        
        widget.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Show notification (simple alert for now)
function showNotification(message) {
    // Create a simple toast notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log app info
console.log('%cCommandHQ', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cMinimalist Organization Management Platform', 'color: #764ba2; font-size: 14px;');
console.log('%cBuilt with ❤️ using pure web technologies', 'color: #7f8c8d; font-size: 12px;');
