import React from 'react';

function TranslateInput({ englishText, onTextChange, onTranslateClick }) {
  return (
    <div className='grid my-4'>
      <textarea
        rows="4"
        cols="50"
        value={englishText}
        onChange={onTextChange}
        className="textarea mb-4" 
        placeholder="Enter the English to level up your Spanish on the fly..."
      />
      <button 
      onClick={onTranslateClick}
      className='btn btn-accent text-white mx-auto'
      >Translate</button>
    </div>
  );
}

export default TranslateInput;
