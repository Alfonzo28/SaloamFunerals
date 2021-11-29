import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import About from './views/About/About'
import Footnote from './views/Footnote/Footnote'
import WhyUs from './views/WhyUs/WhyUs'
import Contact  from './views/Contact/Contact'
import Testimonies from './views/Testimonies/Testimonies'
import HelmetComponent from './components/Helmet/HelmetComponent'
class App extends Component {

    render() {
        return (
            <div className={'App'}>
                <Header/>
                <div className={'App-content'}>
                    <Home/>
                    <About/>
                    <WhyUs/>
                    <Testimonies/>
                    <Contact/>
                    <Footnote/>
                </div>
                <HelmetComponent/>
            </div>
        )
    }
}

export default App
