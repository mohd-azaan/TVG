// src/components/global/CallToActionSection.jsx
// "Ready to Visit?" call-to-action section component
// Appears after testimonials with green button

import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CallToActionSection = () => {
  return (
    <section className='relative w-full '>
      <header className='relative w-full h-20 bg-[#0c1a1a]'>
        <div className='flex items-center justify-between h-full px-8 py-8 max-w-xl mx-auto'>
          <h2 
            className='text-white tracking-wide leading-tight'
            style={{
              fontFamily: 'var(--TVG-typography-h3-font-family)',
              fontSize: 'var(--TVG-typography-h3-font-size)',
              fontWeight: 'var(--TVG-typography-h3-font-weight)',
              letterSpacing: 'var(--TVG-typography-h3-letter-spacing)',
              lineHeight: 'var(--TVG-typography-h3-line-height)'
            }}
          >
            READY TO VISIT?
          </h2>
          <Link
            to='/contact'
            aria-label='Plan your visit - Contact page'
            className='gap-3 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full text-white inline-flex items-center transition-colors duration-200'
          >
            <span 
              className='whitespace-nowrap'
              style={{
                fontFamily: 'var(--TVG-typography-button-font-family)',
                fontSize: 'var(--TVG-typography-button-font-size)',
                fontWeight: 'var(--TVG-typography-button-font-weight)',
                letterSpacing: 'var(--TVG-typography-button-letter-spacing)',
                lineHeight: 'var(--TVG-typography-button-line-height)'
              }}
            >
              PLAN YOUR VISIT
            </span>
            <ArrowRightIcon className='w-5 h-5' />
          </Link>
        </div>
      </header>
    </section>
  );
};
