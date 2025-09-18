// /home/mohammed-azaan-peshmam/Desktop/Agency/TVG/src/contexts/TestimonialContext.jsx
// Context for managing testimonial data across pages
// Allows pages to customize testimonials shown in MainLayout's TestimonialsSection
// RELEVANT FILES: MainLayout.jsx, TestimonialsSection.jsx, individual page components

import React, { createContext, useContext, useState } from 'react';

// Default testimonials data - can be customized by pages
const defaultTestimonials = {
  quote: "The Virtual Greens has revolutionized my golf practice. The simulator technology is incredible and the atmosphere is perfect for both serious training and fun with friends.",
  author: "Ahmed Al-Rashid",
  title: "Golf Enthusiast",
  image: "/testimonial-default.jpg",
  rating: 5
};

// Create testimonial context
const TestimonialContext = createContext();

// Testimonial provider component
export const TestimonialProvider = ({ children }) => {
  const [testimonialData, setTestimonialData] = useState(defaultTestimonials);

  // Function for pages to update testimonials
  const setTestimonials = (newTestimonials) => {
    setTestimonialData(newTestimonials || defaultTestimonials);
  };

  // Reset to default testimonials
  const resetTestimonials = () => {
    setTestimonialData(defaultTestimonials);
  };

  const value = {
    testimonialData,
    setTestimonials,
    resetTestimonials
  };

  return (
    <TestimonialContext.Provider value={value}>
      {children}
    </TestimonialContext.Provider>
  );
};

// Custom hook to use testimonial context
export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error('useTestimonials must be used within a TestimonialProvider');
  }
  return context;
};