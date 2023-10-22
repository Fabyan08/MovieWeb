import React, { useState } from 'react';
import { BiSolidArrowToTop } from 'react-icons/bi'; 

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed right-4 bottom-4 z-20 bg-primary w-fit  p-2 rounded-full ${showButton ? 'block' : 'hidden'}`}>
      <a href="#top" className="text-5xl text-center text-white" onClick={scrollToTop}>
        <BiSolidArrowToTop />
      </a>
    </div>
  );
}

export default ScrollToTopButton;
