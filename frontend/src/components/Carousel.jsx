import React, { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';

const Carousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3000); // Change cards every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative items-center">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-300" 
             style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="inline-block w-full">
              <CarouselCard quote={quote} name={name } />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
