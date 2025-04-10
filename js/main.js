// Main JavaScript file for CRM functionality

// Initialize tooltips
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-tooltip]'));
    tooltipTriggerList.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });

    return isValid;
}

// Show success message
function showSuccess(message) {
    const alert = document.createElement('div');
    alert.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg';
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Show error message
function showError(message) {
    const alert = document.createElement('div');
    alert.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded shadow-lg';
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.querySelector('#mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTooltips();

    // Add mobile menu toggle listener
    const menuButton = document.querySelector('#mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }

    // Add form submission handlers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form.id)) {
                // Handle form submission
                showSuccess('تم حفظ البيانات بنجاح');
            } else {
                showError('يرجى ملء جميع الحقول المطلوبة');
            }
        });
    });
});
