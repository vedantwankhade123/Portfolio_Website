import React, { useState, useEffect } from 'react';

const TypingEffect = ({ lines, typeSpeed = 100, deleteSpeed = 50, delay = 1000 }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    const fullText = currentLine.tokens.map(t => t.text).join('');
    const speed = isDeleting ? deleteSpeed : typeSpeed;

    const handleTyping = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, lineIndex, lines, typeSpeed, deleteSpeed, delay]);

  const renderHighlightedText = () => {
    const currentLineTokens = lines[lineIndex].tokens;
    let remainingTextLength = text.length;
    const output = [];
    
    for (const token of currentLineTokens) {
      if (remainingTextLength <= 0) break;
      
      const part = token.text.substring(0, remainingTextLength);
      output.push(
        <span key={output.length} className={`token-${token.className}`}>
          {part}
        </span>
      );
      remainingTextLength -= part.length;
    }
    
    return output;
  };

  return (
    <span className="typing-effect">
      {renderHighlightedText()}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingEffect;