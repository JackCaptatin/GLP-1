// Google Analytics Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your actual GA4 measurement ID

// Custom Event Tracking
const eventTracker = {
    // Form Interactions
    trackFormSubmission: (formId, formType) => {
        gtag('event', 'form_submission', {
            'event_category': 'Form',
            'event_label': formId,
            'form_type': formType
        });
    },

    // Page Engagement
    trackScroll: (percentage) => {
        gtag('event', 'scroll_depth', {
            'event_category': 'Page Engagement',
            'event_label': `${percentage}%`,
            'non_interaction': true
        });
    },

    // Content Interaction
    trackContentClick: (contentType, contentId) => {
        gtag('event', 'content_click', {
            'event_category': 'Content Interaction',
            'event_label': contentId,
            'content_type': contentType
        });
    },

    // Side Effect Information
    trackSideEffectView: (condition) => {
        gtag('event', 'side_effect_view', {
            'event_category': 'Side Effects',
            'event_label': condition
        });
    },

    // Case Evaluation
    trackCaseEvaluation: (stage) => {
        gtag('event', 'case_evaluation', {
            'event_category': 'Legal Process',
            'event_label': stage
        });
    }
};

// Scroll Depth Tracking
document.addEventListener('scroll', () => {
    const scrollPercentage = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
    
    if (scrollPercentage >= 25 && !window.tracked25) {
        eventTracker.trackScroll(25);
        window.tracked25 = true;
    }
    if (scrollPercentage >= 50 && !window.tracked50) {
        eventTracker.trackScroll(50);
        window.tracked50 = true;
    }
    if (scrollPercentage >= 75 && !window.tracked75) {
        eventTracker.trackScroll(75);
        window.tracked75 = true;
    }
    if (scrollPercentage >= 90 && !window.tracked90) {
        eventTracker.trackScroll(90);
        window.tracked90 = true;
    }
});

// Form Tracking
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const formId = form.id || 'unnamed_form';
        const formType = form.getAttribute('data-form-type') || 'general';
        eventTracker.trackFormSubmission(formId, formType);
    });
});

// Content Interaction Tracking
document.querySelectorAll('[data-track-content]').forEach(element => {
    element.addEventListener('click', (e) => {
        const contentType = element.getAttribute('data-content-type');
        const contentId = element.getAttribute('data-content-id');
        eventTracker.trackContentClick(contentType, contentId);
    });
});

// Side Effect Page Tracking
if (window.location.pathname.includes('/side-effects/')) {
    const condition = window.location.pathname.split('/').pop().replace('.html', '');
    eventTracker.trackSideEffectView(condition);
}

// Case Evaluation Form Tracking
const evaluationForm = document.getElementById('caseEvaluationForm');
if (evaluationForm) {
    evaluationForm.addEventListener('submit', () => {
        eventTracker.trackCaseEvaluation('submitted');
    });
}