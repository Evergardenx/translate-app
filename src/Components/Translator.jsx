
import sound from '/sound_max_fill.svg'
import Copy from '/Copy.svg'
import TranslateSymbol from '/Sort_alfa.svg'
import PropTypes from 'prop-types';

const Translator = ({ languageOptions,handleCopy , speakText , TranslateText,inputText,SetInputText,translatefrom,settranslateFrom}) => {

    const handleChange = (e) => {
        settranslateFrom(e.target.value)
    }

    const handleInputText = (e) =>{
        SetInputText(e.target.value)
    }
    return (
        <section className="w-[49%] bg-[#212936cc] p-4 border-[1px] border-solid border-[#4D5562] rounded-2xl mt-8">
            <div className="translatorLanguages w-full flex gap-4 ">
                <button id="detect" className="text-[#4D5562] hover:bg-[#4D5562] hover:text-white rounded-xl px-3 py-1.5">Detect Language</button>
                <button id="english" className=" bg-[#4D5562] hover:bg-[#4D5562] text-white hover:text-white rounded-xl px-3 py-1.5">English</button>
                <button id="spanish" className="text-[#4D5562] hover:bg-[#4D5562] hover:text-white rounded-xl px-3 py-1.5">French</button>
                {
                    <select className='bg-transparent text-[#4D5562] outline-none hover:text-[#F9FAFB] hover:bg-[#4D5562] hover:rounded-xl hover:pl-2' value={translatefrom} onChange={handleChange}>
                        {languageOptions}
                    </select>
                }
            </div>
            <hr className="mt-4 border-[#4D5562] border-[1px]" />
            <form >
                <textarea name="textranslate" id="textranslate" cols="30" rows="7" maxLength={500} className="w-full p-2 outline-none border-solid border-[#4D5562] rounded-xl mt-4 bg-transparent resize-none text-white font-semibold" value={inputText} onChange={handleInputText} ></textarea>
            </form>
            <div className="textLength text-[#4D5562] m-2 flex justify-end my-1">
                <p>{inputText.length}/500</p>
            </div>
            <div className="controlPanel flex justify-between">
                <div className="speechCopyButton flex gap-3">
                    <button className='border-[2px] border-solid border-[#4D5562]  hover:text-white rounded-xl px-3 py-1.5'><img src={sound} alt="speech" onClick={() => speakText(inputText)}/></button>
                    <button className='border-[2px] border-solid border-[#4D5562]  text-white hover:text-white rounded-xl px-3 py-1.5' onClick={()=>handleCopy(inputText)}><img src={Copy} alt="" /></button>
                </div>
                <div className="translateButton">
                    <button className='bg-[#3662E3]  text-white  rounded-xl px-6 py-2.5 flex text-xl border-[0.5px] border-[#F9FAFB]'onClick={()=>TranslateText(inputText)}><img src={TranslateSymbol} alt="TranslateSymbol" /> Translate</button>
                </div>
            </div>
        </section>
    )
}

export default Translator

Translator.propTypes = {
    languageOptions: PropTypes.array.isRequired,
    handleCopy: PropTypes.func.isRequired,
    speakText: PropTypes.func.isRequired,
    TranslateText: PropTypes.func.isRequired,
    inputText: PropTypes.string.isRequired,
    SetInputText: PropTypes.func.isRequired,
    settranslateFrom: PropTypes.func.isRequired,
    translatefrom: PropTypes.string.isRequired

};