// src/services/emailService.js
// EmailJS service utility for handling all email functionality in the application
// Provides centralized email sending with proper error handling and validation
// RELEVANT FILES: ContactFormSection.jsx, RegistrationFormSection.jsx, .env

import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAIL_CONFIG = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
	templateIdContact: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
	templateIdRegistration: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REGISTRATION,
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Initialize EmailJS with public key
const initEmailJS = () => {
	if (!EMAIL_CONFIG.publicKey) {
		console.error('EmailJS public key not found. Please check your environment variables.');
		return false;
	}

	try {
		emailjs.init(EMAIL_CONFIG.publicKey);
		return true;
	} catch (error) {
		console.error('Failed to initialize EmailJS:', error);
		return false;
	}
};

// Validate email configuration
const validateEmailConfig = (templateType = 'contact') => {
	const errors = [];

	if (!EMAIL_CONFIG.serviceId) {
		errors.push('VITE_EMAILJS_SERVICE_ID is missing');
	}

	if (!EMAIL_CONFIG.publicKey) {
		errors.push('VITE_EMAILJS_PUBLIC_KEY is missing');
	}

	const templateId = templateType === 'contact'
		? EMAIL_CONFIG.templateIdContact
		: EMAIL_CONFIG.templateIdRegistration;

	if (!templateId) {
		errors.push(`VITE_EMAILJS_TEMPLATE_ID_${templateType.toUpperCase()} is missing`);
	}

	if (errors.length > 0) {
		throw new Error(`EmailJS configuration errors: ${errors.join(', ')}`);
	}

	return { serviceId: EMAIL_CONFIG.serviceId, templateId, publicKey: EMAIL_CONFIG.publicKey };
};

// Validate form data
const validateFormData = (formData, requiredFields) => {
	const errors = [];

	requiredFields.forEach(field => {
		if (!formData[field] || formData[field].trim() === '') {
			errors.push(`${field} is required`);
		}
	});

	// Email validation
	if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
		errors.push('Please enter a valid email address');
	}

	if (errors.length > 0) {
		throw new Error(errors.join(', '));
	}
};

// Send contact form email
export const sendContactEmail = async (formData) => {
	try {
		// Initialize EmailJS
		if (!initEmailJS()) {
			throw new Error('Failed to initialize EmailJS');
		}

		// Validate configuration
		const config = validateEmailConfig('contact');

		// Validate form data
		validateFormData(formData, ['name', 'email', 'subject', 'message']);

		// Prepare email parameters
		const emailParams = {
			to_name: 'TVG Team', // This should match your EmailJS template
			from_name: formData.name,
			from_email: formData.email,
			phone: formData.phone || 'Not provided',
			subject: formData.subject,
			message: formData.message,
			reply_to: formData.email,
		};

		// Send email
		const response = await emailjs.send(
			config.serviceId,
			config.templateId,
			emailParams
		);

		if (response.status === 200) {
			return {
				success: true,
				message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
			};
		} else {
			throw new Error('Email sending failed with status: ' + response.status);
		}

	} catch (error) {
		console.error('Contact email error:', error);
		return {
			success: false,
			message: error.message || 'Failed to send message. Please try again later.',
		};
	}
};

// Send registration confirmation email
export const sendRegistrationEmail = async (formData) => {
	try {
		// Initialize EmailJS
		if (!initEmailJS()) {
			throw new Error('Failed to initialize EmailJS');
		}

		// Validate configuration
		const config = validateEmailConfig('registration');

		// Validate form data (customize required fields as needed)
		validateFormData(formData, ['name', 'email']);

		// Prepare email parameters
		const emailParams = {
			to_name: formData.name,
			to_email: formData.email,
			from_name: 'TVG Team',
			...formData, // Include all form data
		};

		// Send email
		const response = await emailjs.send(
			config.serviceId,
			config.templateId,
			emailParams
		);

		if (response.status === 200) {
			return {
				success: true,
				message: 'Registration successful! Check your email for confirmation details.',
			};
		} else {
			throw new Error('Email sending failed with status: ' + response.status);
		}

	} catch (error) {
		console.error('Registration email error:', error);
		return {
			success: false,
			message: error.message || 'Registration failed. Please try again later.',
		};
	}
};

// Test email configuration
export const testEmailConfig = () => {
	try {
		validateEmailConfig('contact');
		validateEmailConfig('registration');
		return {
			success: true,
			message: 'EmailJS configuration is valid',
		};
	} catch (error) {
		return {
			success: false,
			message: error.message,
		};
	}
};

// Export configuration for debugging
export const getEmailConfig = () => {
	return {
		hasServiceId: !!EMAIL_CONFIG.serviceId,
		hasContactTemplate: !!EMAIL_CONFIG.templateIdContact,
		hasRegistrationTemplate: !!EMAIL_CONFIG.templateIdRegistration,
		hasPublicKey: !!EMAIL_CONFIG.publicKey,
	};
};