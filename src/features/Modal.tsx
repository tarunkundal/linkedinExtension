import { GenerateButtonIcon, InsertButtonIcon, RegenerateButtonIcon } from 'assets';
import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const generateResponse = () => {
    setResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  };

  const insertResponse = () => {
    const inputField = document.querySelector('.msg-form__contenteditable');
    if (inputField && inputField instanceof HTMLElement) {
      inputField.innerHTML = response;
    }
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-30 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white w-1/3 p-4 rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
        <input 
          type="text" 
          value={command} 
          onChange={(e) => setCommand(e.target.value)} 
          placeholder="Your prompt..." 
          className="border p-2 w-full mb-2"
        />
        <button onClick={generateResponse} className="bg-blue-500 text-white px-4 py-2 rounded">
<GenerateButtonIcon />
            </button>
        <p className="mt-2">{response}</p>
        <button onClick={insertResponse} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
            <InsertButtonIcon/></button>
        <button onClick={()=>null } className="bg-red-500 text-white px-4 py-2 rounded mt-2"><RegenerateButtonIcon /></button>
      </div>
    </div>
  );
};

export default Modal;
