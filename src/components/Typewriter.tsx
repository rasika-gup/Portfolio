import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text from the array
      const fullText = texts[currentTextIndex];
      
      // If deleting, remove the last character
      // If typing, add the next character
      setCurrentText(current => 
        isDeleting 
          ? current.substring(0, current.length - 1) 
          : fullText.substring(0, current.length + 1)
      );

      // If we've completed typing the current text
      if (!isDeleting && currentText === fullText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } 
      // If we've deleted all characters
      else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        // Move to the next text in the array
        setCurrentTextIndex((current) => (current + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <div className="text-xl md:text-2xl font-medium">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-teal-400">
        {currentText}
      </span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterComponent;