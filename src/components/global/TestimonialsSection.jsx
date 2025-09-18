// src/components/global/TestimonialsSection.jsx
// Exact replica of Figma testimonial section design (node-id=2911-2856)
// Features person with golf club, large quote, testimonial text with green accent lines
// Reusable component system with route-based content selection

import { useLocation } from 'react-router-dom';
import { testimonialData } from '../../data/testimonials';

export const TestimonialsSection = () => {
  const location = useLocation();
  
  // Map route paths to testimonial data keys
  const getPageKey = (pathname) => {
    if (pathname === '/') return 'homepage';
    if (pathname === '/about') return 'aboutPage';
    if (pathname === '/play') return 'playPage';
    if (pathname === '/learn') return 'learnPage';
    if (pathname === '/membership') return 'membershipPage';
    return 'homepage';
  };

  const pageKey = getPageKey(location.pathname);
  const testimonial = testimonialData[pageKey] || testimonialData.homepage;

  return (
    <section className='relative w-full h-[600px] overflow-hidden bg-[#102121] border-b-[70px] border-[#009444]'>
      {/* Background with uniform dark green like target design */}
      <div 
        className='absolute inset-0 z-0'
        style={{
          background: '#102121'
        }}
      />

      {/* Organic flowing accent lines - positioned to flow around the person like target design */}
      <div className='absolute inset-0 overflow-hidden z-10'>
        {/* Main flowing accent shape - positioned behind and around person */}
       
        
        {/* Secondary accent shape for depth */}
        <div className='absolute bottom-[-450px] left-[-400px] w-[1200px] h-[900px] '>
          <img
            className='w-full h-full object-contain'
            alt='Secondary accent lines'
            src='/shape14-2.svg'
            style={{
              transform: 'rotate(10deg) scale(0.8)'
            }}
          />
        </div>
      </div>

      {/* Main content container */}
      <div className='relative w-full h-full max-w-[1920px] mx-auto z-20'>
        {/* Person image - positioned exactly like Figma */}
        <div className='absolute left-[320px] top-[60px] w-[300px] h-[480px] z-30'>
          <img	
            className='w-full h-full object-cover object-center'
            alt='Golf Ambassador testimonial'
            src='/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png'
          />
        </div>

        {/* Testimonial content area - positioned exactly like Figma */}
        <div className='absolute right-[120px] top-[80px] w-[900px] h-[540px] z-30'>
          {/* Large quotation mark - positioned exactly like Figma */}
          <div 
            className='absolute top-[-100px] left-0 text-white text-[220px] leading-none font-black select-none z-40 rotate-180'
            style={{
              fontFamily: 'var(--TVG-typography-h1-font-family)',
              fontWeight: '900'
            }}
          >
            "
          </div>

          {/* Testimonial text - positioned exactly like Figma */}
          <div className='absolute top-[100px] left-[80px] w-[580px] z-50'>
            <p 
              className='text-white leading-[32px] mb-8 text-[20px]'
              style={{
                fontFamily: 'var(--TVG-typography-default-font-family)',
                fontWeight: '400',
                letterSpacing: '0px'
              }}
            >
              {testimonial.quote}
            </p>

            {/* Attribution - positioned exactly like Figma */}
            <div 
              className='text-[#7DDB8A] font-bold text-[22px] text-right'
              style={{
                fontFamily: 'var(--TVG-typography-tagline-font-family)',
                fontWeight: 'var(--TVG-typography-tagline-font-weight)',
                letterSpacing: 'var(--TVG-typography-tagline-letter-spacing)',
                lineHeight: 'var(--TVG-typography-tagline-line-height)'
              }}
            >
              {testimonial.authorTitle}, {testimonial.authorName}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
