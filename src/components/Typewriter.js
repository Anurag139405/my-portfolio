import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const strings = [
    'Full Stack Developer',
    'Mobile App Developer',
    'ReactJS',
    'MongoDB',
    'NodeJS',
    'ExpressJS',
    'NextJS',
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
        if (currentString === strings[currentStringIndex]) {
            const timeout = setTimeout(() => {
                setIsTyping(false);
            }, 500); // Pause before erasing
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentString(strings[currentStringIndex].slice(0, currentString.length + 1));
            }, 100); // Typing speed
            return () => clearTimeout(timeout);
        }
    } else {
        if (currentString === '') {
            setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
            setIsTyping(true);
        } else {
            const timeout = setTimeout(() => {
                setCurrentString(currentString.slice(0, currentString.length - 1));
            }, 50); // Erasing speed
            return () => clearTimeout(timeout);
        }
    }
}, [currentString, currentStringIndex, isTyping, strings]);

  return (
    <span className="font-[500] dark:font-[400] text-black dark:text-[#ec6e59;] text-[1.5rem] mb-2 sm:text-[2rem]">
      {currentString}
    </span>
  );
};

export default Typewriter;
