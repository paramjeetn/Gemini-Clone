import React, { useContext } from 'react'
import { assets } from '../../assets/assets.js'
import './main.css'
import { Context } from '../../context/Context.jsx'
const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput } = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user icon" />
            </div>
            <div className="main-container">
                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Paramjeet</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="compass icon" />
                        </div>
                        <div className="card">
                            <p>Briefly summarise the concept of urban planning</p>
                            <img src={assets.bulb_icon} alt="compass icon" />
                        </div>
                        <div className="card">
                            <p>Teach me how quantum computers work on q bits</p>
                            <img src={assets.message_icon} alt="compass icon" />
                        </div>
                        <div className="card">
                            <p>Tell me some great React JS project ideas</p>
                            <img src={assets.code_icon} alt="compass icon" />
                        </div>
                    </div>
                </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini icon" />
                            {loading ? <>
                                <div className="loader">
                              <hr />
                              <hr />
                              <hr />
                                </div>
                            </>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            {/* <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" /> */}
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                            
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check it's responses. Your privacy with gemini app
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main