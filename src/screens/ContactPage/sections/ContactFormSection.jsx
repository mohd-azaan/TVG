// src/screens/ContactPage/sections/ContactFormSection.jsx
// Contact form section with name, email, phone, subject, message fields and submit button
// Features right-aligned positioning and proper form styling
// RELEVANT FILES: ContactPage.jsx, ContactPage.css, arrow-drop-down-icon.svg, arrow-drop-up-icon.svg

import React, { useState } from 'react';

export const ContactFormSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	const [isSubjectOpen, setIsSubjectOpen] = useState(false);

	const subjectOptions = [
		'General Inquiry',
		'Booking',
		'Membership',
		'Events',
		'Partnership',
		'Technical Support'
	];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubjectSelect = (subject) => {
		setFormData(prev => ({
			...prev,
			subject: subject
		}));
		setIsSubjectOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission here
	};

	return (
		<div className="absolute left-[1028px] top-[100px] w-[612px] h-[667px] overflow-hidden">
			{/* Form Title */}
			<h2 className="contact-form-title font-['Gilroy-Bold',sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.44px] text-[#009444] uppercase mb-[63px]">
				Drop us a line
			</h2>

			<form onSubmit={handleSubmit} className="space-y-5">
				{/* Name Field */}
				<div className="relative">
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Name"
						className="contact-form-input bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] h-[60px] w-[610px] px-[34px] font-['Gilroy-Medium',sans-serif] text-[20px] text-[#757575] outline-none focus:border-[#009444] transition-colors"
					/>
				</div>

				{/* Email Field */}
				<div className="relative">
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="Email"
						className="contact-form-input bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] h-[60px] w-[610px] px-[34px] font-['Gilroy-Medium',sans-serif] text-[20px] text-[#757575] outline-none focus:border-[#009444] transition-colors"
					/>
				</div>

				{/* Phone Field */}
				<div className="relative">
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						placeholder="Phone"
						className="contact-form-input bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] h-[60px] w-[610px] px-[34px] font-['Gilroy-Medium',sans-serif] text-[20px] text-[#757575] outline-none focus:border-[#009444] transition-colors"
					/>
				</div>

				{/* Subject Dropdown */}
				<div className="relative">
					<div
						onClick={() => setIsSubjectOpen(!isSubjectOpen)}
						className="contact-form-input bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] h-[60px] w-[610px] px-[34px] font-['Gilroy-Medium',sans-serif] text-[20px] text-[#757575] cursor-pointer flex items-center justify-between focus-within:border-[#009444] transition-colors"
					>
						<span>{formData.subject || 'Subject'}</span>
						<div className="flex flex-col items-center">
							<img
								src="/arrow-drop-up-icon.svg"
								alt="Up"
								className="w-6 h-6 mb-[-2px]"
							/>
							<img
								src="/arrow-drop-down-icon.svg"
								alt="Down"
								className="w-6 h-6 mt-[-2px]"
							/>
						</div>
					</div>

					{/* Dropdown Options */}
					{isSubjectOpen && (
						<div className="absolute top-[65px] left-0 w-[610px] bg-white border border-[lightgrey] rounded-[20px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
							{subjectOptions.map((option, index) => (
								<div
									key={index}
									onClick={() => handleSubjectSelect(option)}
									className="px-[34px] py-3 hover:bg-[#f0f0f0] cursor-pointer font-['Gilroy-Medium',sans-serif] text-[18px] text-[#757575] border-b border-[#f0f0f0] last:border-b-0"
								>
									{option}
								</div>
							))}
						</div>
					)}
				</div>

				{/* Message Field */}
				<div className="relative">
					<textarea
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						placeholder="Message"
						rows={6}
						className="contact-form-textarea bg-[#f6f6f6] border border-[lightgrey] rounded-[30px] h-[194px] w-[610px] px-[34px] py-[19px] font-['Gilroy-Medium',sans-serif] text-[20px] text-[#757575] outline-none resize-none focus:border-[#009444] transition-colors"
					/>
				</div>

				{/* Submit Button */}
				<div className="relative pt-[30px]">
					<button
						type="submit"
						className="contact-form-submit bg-[#009444] border-none rounded-[30px] px-[30px] py-[7px] font-['Gilroy-SemiBold',sans-serif] text-[18px] font-semibold leading-[40px] text-white uppercase cursor-pointer hover:bg-[#007a3a] transition-colors"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};