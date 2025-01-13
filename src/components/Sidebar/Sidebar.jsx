import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../Context/Context.jsx';
import ThemeBtn from '../ThemeBtn.jsx';

const Sidebar = () => {

    const[extended , setExtended] = useState(false);
    const{onSent , prevPrompts , setRecentPrompt , newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar dark:bg-gray-800 dark:border-gray-700'>
        
        <div className="top">
            
            {/* <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="" className="menu" /> */}
            <div class="space-y-1" onClick={() => setExtended(prev => !prev)}>
                <div class="bg-gray-700 w-6 h-1 rounded-full shadow-lg dark:bg-white"></div>
                <div class="bg-gray-700 w-6 h-1 rounded-full shadow-lg dark:bg-white"></div>
                <div class="bg-gray-700 w-6 h-1 rounded-full shadow-lg dark:bg-white"></div>
            </div>

            <div onClick ={() => newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>
            
            {extended
                ? <div className="recent">
                    <p className="recent-title dark:text-white">Recent</p>
                    {prevPrompts.map((item , index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)} ... </p>
                            </div>
                        )
                    })}
                </div>
                : null
            }
            
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry dark:hover:bg-gray-700">
                <img src={assets.question_icon} alt="" />
                {extended ? <p className='dark:text-white dark:hover:text-gray-900'>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended ? <p className='dark:text-white dark:hover:text-gray-900'>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended ? <p className='dark:text-white dark:hover:text-gray-900'>Setting</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.dark_Theme} alt="" />
                {extended ? <ThemeBtn /> : null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar