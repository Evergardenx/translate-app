import { useEffect, useState } from 'react'
import './App.css'
import Translated from './Components/Translated'
import Translator from './Components/Translator'
import { LanguagesData } from './Components/LanguageData'
import logo from '/logo.svg'

function App() {
  const [inputText, SetInputText] = useState('Hello, how are you')
  const [languageOptions, setLanguageOptions] = useState([])
  const [TranslationText, setTranslationText] = useState('')
  const [translatefrom, settranslateFrom] = useState('en-GB')
  const [translateto, settranslateTo] = useState('fr-FR')



  //populating languages option in a select tag
  useEffect(() => {
    const options = LanguagesData.map(language => (
      <option key={language.code} className='bg-black text-[#F9FAFB]' value={language.code}>
        {language.name}
      </option>
    ));
    setLanguageOptions(options);
  }, []);

  //copying text
  const handleCopy = (inputText) => {
    if (inputText) {
      navigator.clipboard.writeText(inputText)
        .then(() => alert('Copied!'))
        .catch((err) => console.error(err))
    }
  }
  //Text-to-speech
  const speakText = (inputText) => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(inputText);
      synthesis.speak(utterance);
    } else {
      console.log('Speech synthesis not supported.');
    }
  }


  // translating text from one languague to another
  async function TranslateText(inputText) {
    if (inputText.trim() === '') {
      setTranslationText('')
      return;
    }
    try {

      let ApiUrl = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${translatefrom}|${translateto}`;
      const response = await fetch(ApiUrl)
      const data = await response.json()

      setTranslationText('Traslating....')

      if (data.responseStatus && data.responseStatus === 200) {
        setTimeout(() => {
          setTranslationText(data.responseData.translatedText);
        }, 1000);
      } else {
        alert(data.responseMessage)
      }
    } catch (error) {
      console.log(error)
    }

  }

  //swapping languages and text
  function swapLanguagesAndText() {
    const tempTranslateFrom = translatefrom;
    const tempTranslateTo = translateto;
    settranslateFrom(tempTranslateTo);
    settranslateTo(tempTranslateFrom);

    if (TranslationText.trim() !== '' && inputText.trim() !== '') {

      const tempTranslationText = TranslationText;
      setTranslationText(inputText);
      SetInputText(tempTranslationText);
    }
  }


  return (
    <>
      <main className='flex justify-center items-center flex-col mt-20 '>
        <img src={logo} alt="logo" />
        <div className="TranslatorContainer lg:w-[90%] flex flex-wrap justify-center items-center gap-2 md:flex-col md:w-[160%] lg:flex-row sm:flex-col sm:w-[160%] max-sm:flex-col max-sm:w-[170%]">

          <Translator languageOptions={languageOptions} handleCopy={handleCopy} speakText={speakText} TranslateText={TranslateText}  inputText={inputText} SetInputText={SetInputText} translatefrom={translatefrom} settranslateFrom={settranslateFrom}/>

          <Translated languageOptions={languageOptions} handleCopy={handleCopy} speakText={speakText} TranslateText={TranslateText} TranslationText={TranslationText} swapLanguagesAndText={swapLanguagesAndText} settranslateTo={settranslateTo} translateto={translateto}/>

        </div>
      </main>
    </>
  )
}

export default App
