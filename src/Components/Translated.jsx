import Change from '/Horizontal_top_left_main.svg'
import sound from '/sound_max_fill.svg'
import PropTypes from 'prop-types';
import Copy from '/Copy.svg'

const Translated = ({languageOptions,TranslationText,handleCopy,speakText,swapLanguagesAndText,translateto,settranslateTo}) => {
    // const langyuageOption = [...languageOptions.slice(1),languageOptions[0]]

    const handleChange = (e) =>{
        settranslateTo(e.target.value)
    }
    return (
        <section className="w-[49%] bg-[#121826cc] p-4 border-[1px] border-solid border-[#4D5562] rounded-2xl mt-8 ">
            <div className="translatorLanguages w-full flex gap-4 justify-between">
                <div className="languages flex gap-2">
                    <button id="english" className="  text-[#4D5562] hover:bg-[#4D5562]  hover:text-white rounded-xl px-3 py-1.5">English</button>
                    <button id="spanish" className="bg-[#4D5562] text-[#F9FaFb] hover:bg-[#4D5562] hover:text-white rounded-xl px-3 py-1.5">French</button>
                    {
                        <select className='bg-transparent text-[#4D5562] outline-none hover:text-[#F9FAFB] hover:bg-[#4D5562] hover:rounded-xl hover:pl-2' value={translateto} onChange={handleChange}>
                            {languageOptions}
                        </select>
                   }
                </div>

                <div className="translateContainer" onClick={swapLanguagesAndText}>
                    <img src={Change} alt="translate" className="cursor-pointer border-[2px] border-solid border-[#4D5562]  text-white hover:text-white rounded-xl px-2 py-1.5" />
                </div>
            </div>
            <hr className="mt-4 border-[#4D5562] border-[1px]" />
            <form action="">
                <textarea name="translated" id="translated" disabled readOnly cols="30" rows="8" maxLength={500} className='w-full p-2 outline-none border-solid border-[#4D5562] rounded-xl mt-4 bg-transparent resize-none text-white font-semibold' value={TranslationText}></textarea>
            </form>
            <div className="Controlpanel flex">
                <div className="speechCopyButton flex gap-3">
                    <button className='border-[2px] border-solid border-[#4D5562]  hover:text-white rounded-xl px-3  py-3' onClick={() => speakText(TranslationText)}><img src={sound} alt="speech" /></button>
                    <button className='border-[2px] border-solid border-[#4D5562]  text-white text-xl hover:text-white rounded-xl px-3 py-3'onClick={()=>handleCopy(TranslationText)}><img src={Copy} alt="" /></button>
                </div>
            </div>
        </section>
    )
}

export default Translated

Translated.propTypes = {
    languageOptions: PropTypes.array.isRequired,
    TranslationText: PropTypes.string.isRequired,
    handleCopy: PropTypes.func.isRequired,
    speakText: PropTypes.func.isRequired,
    swapLanguagesAndText: PropTypes.func.isRequired,
    translateto: PropTypes.string.isRequired,
    settranslateTo: PropTypes.func.isRequired
    
};