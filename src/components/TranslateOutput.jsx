import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";

function TranslateOutput({ translatedText }) {
    const [localTranslatedText, setLocalTranslatedText] = useState(translatedText);

    console.log(translatedText)

    useEffect(() => {
        setLocalTranslatedText(translatedText);
      }, [translatedText]);

  return (
   <div>
      <h3 className='text-lg uppercase font-mono font-bold text-center mt-8'>Translated Text</h3>
      <div className="chat chat-start">
        <div className="chat-bubble bg-accent text-white">
        <Typewriter
         options={{
            strings: translatedText,
            autoStart: true,
            loop: false,
            pauseFor: 2500
        }}
      />
        </div>
      </div>
    </div>
  );
}

export default TranslateOutput;