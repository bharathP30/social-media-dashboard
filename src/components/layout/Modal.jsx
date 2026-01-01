import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from "../../App";
import ReactDOM from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  const theme = useContext(ThemeContext); 

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className={`rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl ${
          theme === 'light' 
            ? 'bg-white/30 backdrop-blur-sm border border-white/40' 
            : 'bg-black/20 border-white/10 text-white backdrop-blur-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}