// src/screens/RegistrationPage/sections/RegistrationFormSection.jsx
// Comprehensive registration form section with all form fields matching Figma design
// Features form validation, state management, and pixel-perfect styling
// RELEVANT FILES: RegistrationPage.jsx, styleguide.css, button.jsx

import React, { useState } from 'react';
import { sendRegistrationEmail } from '../../../services/emailService';

const countryCodes = [
	{ code: '+966', country: 'Saudi Arabia' },
	{ code: '+1', country: 'United States' },
	{ code: '+44', country: 'United Kingdom' },
	// Add more countries as needed
];

export const RegistrationFormSection = () => {
	// Form state management
	const [formData, setFormData] = useState({
		isGolfer: '',
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '+966',
		phoneNumber: '',
		dateOfBirth: '',
		nationality: '',
		businessSector: '',
		companyName: '',
		designation: '',
		preferredAccountManager: '',
		additionalNotes: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: '' }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage({ type: '', text: '' });
		setErrors({});

		try {
			const result = await sendRegistrationEmail(formData);

			if (result.success) {
				setSubmitMessage({ type: 'success', text: result.message });
				// Reset form on successful submission
				setFormData({
					isGolfer: '',
					firstName: '',
					lastName: '',
					email: '',
					countryCode: '+966',
					phoneNumber: '',
					dateOfBirth: '',
					nationality: '',
					businessSector: '',
					companyName: '',
					designation: '',
					preferredAccountManager: '',
					additionalNotes: '',
				});
			} else {
				setSubmitMessage({ type: 'error', text: result.message });
			}
		} catch (error) {
			setSubmitMessage({
				type: 'error',
				text: 'An unexpected error occurred. Please try again later.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className='bg-white relative w-full min-h-[1626px] py-[70px]'>
			<div className='w-full max-w-[800px] mx-auto px-4'>
				<form onSubmit={handleSubmit} className='space-y-8'>
					<div>
						<label className='block font-bold font-gilroy  text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[21px]'>
							Are you a golfer?
						</label>
						<div className='flex items-center space-x-[147px] ml-[36px]'>
							<label className='flex items-center cursor-pointer'>
								<input
									type='radio'
									name='isGolfer'
									value='yes'
									checked={formData.isGolfer === 'yes'}
									onChange={() => handleInputChange('isGolfer', 'yes')}
									className='mr-2'
								/>
								<span className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
									Yes
								</span>
							</label>
							<label className='flex items-center cursor-pointer'>
								<input
									type='radio'
									name='isGolfer'
									value='no'
									checked={formData.isGolfer === 'no'}
									onChange={() => handleInputChange('isGolfer', 'no')}
									className='mr-2'
								/>
								<span className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
									No
								</span>
							</label>
						</div>
					</div>

					<div className='flex space-x-[18px]'>
						<div className='flex-1'>
							<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
								First Name
							</label>
							<input
								type='text'
								value={formData.firstName}
								onChange={(e) => handleInputChange('firstName', e.target.value)}
								placeholder='Your first name'
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
							/>
						</div>
						<div className='flex-1'>
							<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
								Last Name
							</label>
							<input
								type='text'
								value={formData.lastName}
								onChange={(e) => handleInputChange('lastName', e.target.value)}
								placeholder='Your last name'
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
							/>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Email Address
						</label>
						<input
							type='email'
							value={formData.email}
							onChange={(e) => handleInputChange('email', e.target.value)}
							placeholder='name@company.com'
							className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
						/>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Mobile Number
						</label>
						<div className='relative flex'>
							<input
								list='country-codes'
								value={formData.countryCode}
								onChange={(e) =>
									handleInputChange('countryCode', e.target.value)
								}
								className='w-[120px] h-[60px] bg-[#f9f9f9] rounded-l-[30px] border border-r-0 border-[lightgrey] px-4 font-TVG-typography-default text-[20px] text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#009444]'
							/>
							<datalist id='country-codes'>
								{countryCodes.map((c) => (
									<option key={c.code} value={c.code}>
										{c.country}
									</option>
								))}
							</datalist>
							<input
								type='tel'
								value={formData.phoneNumber}
								onChange={(e) =>
									handleInputChange('phoneNumber', e.target.value)
								}
								placeholder='50 000 0000'
								className='flex-1 h-[60px] bg-[#f6f6f6] rounded-r-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-l-0 border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
							/>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Date of Birth
						</label>
						<div className='w-[260px]'>
							<input
								type='text'
								value={formData.dateOfBirth}
								onChange={(e) =>
									handleInputChange('dateOfBirth', e.target.value)
								}
								placeholder='DD/MM/YY'
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
							/>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Nationality
						</label>
						<div className='relative w-[390px]'>
							<select
								value={formData.nationality}
								onChange={(e) =>
									handleInputChange('nationality', e.target.value)
								}
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] pr-[60px] font-TVG-typography-default text-[20px] leading-[28px] text-black border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444] appearance-none cursor-pointer'
							>
								<option value='' className='text-[#757575]'>
									-select-
								</option>
								<option value='saudi'>Saudi Arabian</option>
								<option value='american'>American</option>
								<option value='british'>British</option>
								<option value='other'>Other</option>
							</select>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Business Sector
						</label>
						<div className='relative w-[390px]'>
							<select
								value={formData.businessSector}
								onChange={(e) =>
									handleInputChange('businessSector', e.target.value)
								}
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] pr-[60px] font-TVG-typography-default text-[20px] leading-[28px] text-black border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444] appearance-none cursor-pointer'
							>
								<option value='' className='text-[#757575]'>
									-select-
								</option>
								<option value='technology'>Technology</option>
								<option value='finance'>Finance</option>
								<option value='healthcare'>Healthcare</option>
								<option value='construction'>Construction</option>
								<option value='other'>Other</option>
							</select>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Company Name
						</label>
						<input
							type='text'
							value={formData.companyName}
							onChange={(e) => handleInputChange('companyName', e.target.value)}
							placeholder='Your company name'
							className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
						/>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Designation
						</label>
						<input
							type='text'
							value={formData.designation}
							onChange={(e) => handleInputChange('designation', e.target.value)}
							placeholder='Your job title'
							className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444]'
						/>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Preferred Account Manager
						</label>
						<div className='relative w-[390px]'>
							<select
								value={formData.preferredAccountManager}
								onChange={(e) =>
									handleInputChange('preferredAccountManager', e.target.value)
								}
								className='w-full h-[60px] bg-[#f6f6f6] rounded-[30px] px-[34px] pr-[60px] font-TVG-typography-default text-[20px] leading-[28px] text-black border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444] appearance-none cursor-pointer'
							>
								<option value='' className='text-[#757575]'>
									-select-
								</option>
								<option value='manager1'>Manager 1</option>
								<option value='manager2'>Manager 2</option>
								<option value='manager3'>Manager 3</option>
							</select>
						</div>
					</div>

					<div>
						<label className='block font-bold font-gilroy text-[16px] leading-[26px] tracking-[0.32px] text-black uppercase mb-[14px]'>
							Additional Notes
						</label>
						<textarea
							value={formData.additionalNotes}
							onChange={(e) =>
								handleInputChange('additionalNotes', e.target.value)
							}
							placeholder='Message'
							rows={6}
							className='w-full h-[194px] bg-[#f6f6f6] rounded-[30px] px-[34px] py-[19px] font-TVG-typography-default text-[20px] leading-[28px] text-black placeholder:text-[#757575] border border-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#009444] resize-none'
						/>
					</div>

					{submitMessage.text && (
						<div
							className={`p-4 rounded-[20px] text-center ${
								submitMessage.type === 'success'
									? 'bg-green-50 border border-green-200 text-green-800'
									: 'bg-red-50 border border-red-200 text-red-800'
							}`}
						>
							<p className='font-bold font-gilroy text-[16px]'>
								{submitMessage.text}
							</p>
						</div>
					)}

					<div className='pt-8'>
						<button
							type='submit'
							disabled={isSubmitting}
							className={`w-full h-[54px] rounded-[30px] flex items-center justify-center font-TVG-typography-button text-[18px] leading-[40px] text-white uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
								isSubmitting
									? 'bg-gray-400 cursor-not-allowed focus:ring-gray-400'
									: 'bg-[#009444] hover:bg-[#007a3a] focus:ring-[#009444]'
							}`}
						>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default RegistrationFormSection;
