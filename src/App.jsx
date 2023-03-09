import './App.css'
import React from 'react'
import { Header } from './component/Header'
import { AboutMe } from "./component/AboutMe"
import { Skills } from "./component/Skills"
import { PersonalImfomation } from "./component/Personal-Imfomation"
import { Footer } from './component/Footer'
function ResumeApp() {
    return (       
        <div className='container'>         
            <div className='squeeze-container'>
                <Header />
                <AboutMe />
                <PersonalImfomation />
                <Skills />
                <Footer />
            </div>
        </div>

    )
}

export default ResumeApp
