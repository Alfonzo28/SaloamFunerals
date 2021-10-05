import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import About from './views/About/About'
import Footnote from './views/Footnote/Footnote'
import WhyUs from './views/WhyUs/WhyUs'
import Contact  from './views/Contact/Contact'

class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <Header/>
                <div className={'App-content'}>
                    <Home/>
                    <About/>
                    <WhyUs/>
                    <Contact/>
                    <Footnote/>
                </div>
            </div>
        )
    }
}

export default App
