import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = { threshold: 0.1, triggerOnce: true }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold: options.threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return elementRef;
};

export default useScrollAnimation;