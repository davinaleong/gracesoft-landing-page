// GraceSoft Landing Page - Main JavaScript
// Countdown Timer and other website functions

// Countdown Timer to May 4th, 2026
function initCountdownTimer() {
    const targetDate = new Date('May 4, 2026 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Calculate time remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the display elements
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            const countdownContainer = document.getElementById('countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<p class="text-2xl font-bold text-indigo-500">We\'re Live!</p>';
            }
        }
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdownTimer();
    loadContactSubjects();
});

// Load contact subjects from API
async function loadContactSubjects() {
    try {
        const response = await fetch('https://backoffice.gracesoft.dev/api/contact/subjects');
        const subjects = await response.json();
        
        const subjectSelect = document.getElementById('contactSubject');
        if (subjectSelect && Array.isArray(subjects)) {
            // Clear loading option
            subjectSelect.innerHTML = '<option value="">Select a topic...</option>';
            
            // Add subjects from API
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.uuid;
                option.textContent = subject.label.replace(/\n/g, ' ').trim(); // Handle line breaks in labels
                subjectSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Failed to load contact subjects:', error);
        // Fallback to default options if API fails
        const subjectSelect = document.getElementById('contactSubject');
        if (subjectSelect) {
            subjectSelect.innerHTML = `
                <option value="">Select a topic...</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="custom-development">Custom Software Development</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile App Development</option>
                <option value="enterprise-solutions">Enterprise Solutions</option>
                <option value="technical-support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="quote-request">Quote Request</option>
                <option value="other">Other</option>
            `;
        }
    }
}

// Bot protection variables (moved from inline script)
let formLoadTime = Date.now();
let submissionAttempts = 0;
const maxAttempts = 3;
const minFormTime = 2000; // Minimum 2 seconds before submission allowed

// Email form handling with bot protection
function initEmailForm() {
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const email = document.getElementById('emailInput').value;
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            // Hide previous messages
            errorMessage.classList.add('hidden');
            successMessage.classList.add('hidden');
            
            // Bot protection checks
            if (!isValidSubmission()) {
                showError();
                return;
            }
            
            // Disable button during processing
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';
            
            // Simulate processing delay (also helps against rapid submissions)
            setTimeout(() => {
                if (email) {
                    // Here you would typically send the email to your server
                    console.log('Email submitted:', email);
                    
                    // Show success message
                    emailForm.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                } else {
                    showError();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Notify Me';
                }
            }, 1000);
        });
    }
}

function isValidSubmission() {
    // Check honeypot fields
    const website = document.getElementById('website').value;
    const emailConfirm = document.getElementById('email_confirm').value;
    if (website || emailConfirm) {
        console.log('Bot detected: honeypot field filled');
        return false;
    }
    
    // Check submission timing (too fast = likely bot)
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < minFormTime) {
        console.log('Bot detected: form submitted too quickly');
        return false;
    }
    
    // Check submission attempts
    submissionAttempts++;
    if (submissionAttempts > maxAttempts) {
        console.log('Bot detected: too many attempts');
        return false;
    }
    
    // Basic email validation
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        console.log('Invalid email format');
        return false;
    }
    
    return true;
}

function showError() {
    document.getElementById('errorMessage').classList.remove('hidden');
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Notify Me';
}

// Contact Dialog Functions
let contactFormLoadTime = Date.now();
let contactSubmissionAttempts = 0;

function openContactDialog() {
    document.getElementById('contactDialog').showModal();
    contactFormLoadTime = Date.now(); // Reset timer when dialog opens
}

function closeContactDialog() {
    document.getElementById('contactDialog').close();
    // Reset form
    document.getElementById('contactForm').reset();
    document.getElementById('contactSuccessMessage').classList.add('hidden');
    document.getElementById('contactErrorMessage').classList.add('hidden');
    document.getElementById('contactSubmitBtn').disabled = false;
    document.getElementById('contactSubmitBtn').textContent = 'Send Message';
}

// Contact form handling with bot protection
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('contactSubmitBtn');
            const errorMessage = document.getElementById('contactErrorMessage');
            const successMessage = document.getElementById('contactSuccessMessage');
            
            // Hide previous messages
            errorMessage.classList.add('hidden');
            successMessage.classList.add('hidden');
            
            // Bot protection checks
            if (!isValidContactSubmission()) {
                showContactError();
                return;
            }
            
            // Disable button during processing
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Collect form data
            const subjectSelect = document.getElementById('contactSubject');
            const selectedOption = subjectSelect.options[subjectSelect.selectedIndex];
            
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                phone: document.getElementById('contactPhone').value,
                subject: selectedOption.value, // This will be the UUID
                subjectLabel: selectedOption.textContent, // Human-readable label for display
                message: document.getElementById('contactMessage').value
            };
            
            // Simulate sending email (replace with actual email service)
            setTimeout(() => {
                // Create mailto link as fallback
                const mailtoLink = `mailto:leong.shi.yun@gmail.com?subject=${encodeURIComponent(formData.subjectLabel)}&body=${encodeURIComponent(
                    `Name: ${formData.name}\n` +
                    `Email: ${formData.email}\n` +
                    (formData.phone ? `Phone: ${formData.phone}\n` : '') +
                    `Subject: ${formData.subjectLabel}\n` +
                    `Subject ID: ${formData.subject}\n\n` +
                    `Message:\n${formData.message}`
                )}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                console.log('Contact form submitted:', formData);
                successMessage.classList.remove('hidden');
                
                // Close dialog after 2 seconds
                setTimeout(() => {
                    closeContactDialog();
                }, 2000);
            }, 1000);
        });
    }
}

function isValidContactSubmission() {
    // Check honeypot fields
    const websiteUrl = document.getElementById('website_url').value;
    const backupEmail = document.getElementById('backup_email').value;
    if (websiteUrl || backupEmail) {
        console.log('Bot detected: contact honeypot field filled');
        return false;
    }
    
    // Check submission timing
    const timeSinceLoad = Date.now() - contactFormLoadTime;
    if (timeSinceLoad < 3000) { // 3 seconds minimum for contact form
        console.log('Bot detected: contact form submitted too quickly');
        return false;
    }
    
    // Check submission attempts
    contactSubmissionAttempts++;
    if (contactSubmissionAttempts > 5) {
        console.log('Bot detected: too many contact attempts');
        return false;
    }
    
    // Validate required fields
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !email || !subject || !message) {
        console.log('Missing required fields');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        console.log('Invalid email format');
        return false;
    }
    
    return true;
}

function showContactError() {
    document.getElementById('contactErrorMessage').classList.remove('hidden');
    const submitBtn = document.getElementById('contactSubmitBtn');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdownTimer();
    initEmailForm();
    initContactForm();
});

// Make functions globally available for onclick handlers
window.openContactDialog = openContactDialog;
window.closeContactDialog = closeContactDialog;