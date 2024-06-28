import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { GenerateButtonIcon } from 'assets';

const MainFeature = () => {
  const [showModal, setShowModal] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
  const inputField = document.querySelector('.msg-form__contenteditable');
        console.log('inputField', inputField); // Log the input field to ensure it's being selected
 
 const handleFocus = () => {
   console.log('Input focused');
   setInputFocused(true);
  };
  
  const handleBlur = () => {
    console.log('Input blurred');
    setInputFocused(false);
  };
  
  if (inputField) {
    inputField.addEventListener('focus', handleFocus);
    inputField.addEventListener('blur', handleBlur);
  }
  
  return () => {
    if (inputField) {
      inputField.removeEventListener('focus', handleFocus);
      inputField.removeEventListener('blur', handleBlur);
    }
  };
  }, []);

  const handleClickAIButton = () => {
    console.log('AI button clicked');
    setShowModal(true);
  };

  console.log('inputFocused', inputFocused, 'showModal', showModal);

  return (
    <>
      {inputFocused && (
        <div 
          className="fixed bottom-4 right-4 bg-blue-800 text-white p-2 rounded-full cursor-pointer" 
          onClick={handleClickAIButton}
        >
          AI
          <img src="../../assets/icon.png" alt="AI icon" />
          {/* <GenerateButtonIcon /> */}
        </div>
      )}
     <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default MainFeature;
