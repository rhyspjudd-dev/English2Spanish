import React, { useState } from 'react';
import axios from 'axios';

import TitleContainer from './components/TitleContainer';
import TranslateInput from './components/TranslateInput';
import TranslateOutput from './components/TranslateOutput';

function App() {
    const [englishText, setEnglishText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
  
    const translateText = async () => {
      try {
        const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_REACT_APP_GOOGLE_TRANSLATE_API_KEY}`,
          {
            q: englishText,
            source: 'en',
            target: 'es',
          }
        );
  
        setTranslatedText(response.data.data.translations[0].translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };
  
    return (
      <div className="App">
        <TitleContainer />
        <TranslateInput
          englishText={englishText}
          onTextChange={(e) => setEnglishText(e.target.value)}
          onTranslateClick={translateText}
        />
        <TranslateOutput translatedText={translatedText} />
      </div>
    );
  }
  
  export default App;
  