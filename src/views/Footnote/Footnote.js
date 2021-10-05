import React, { Component } from 'react'
import './Footnote.scss'
import { HOME, ABOUT_US,TESTIMONIES,  SCROLL_ELEMENT } from '../../constants/headerConstants'

class Footnote extends Component {
    handleClick(headerButton) {
        switch (headerButton) {
        case HOME: {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        }
        case ABOUT_US: {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        }
        case 'Why Saloam?': {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            break
        }
        case TESTIMONIES: {
            const page = document.getElementById(SCROLL_ELEMENT)
            const pageHeight = page.scrollHeight
            window.scrollTo({
                top: pageHeight * 0.4,
                left: 0,
                behavior: 'smooth'
            })
            break
        }
        default:{
            break
        }
        }
    }

    render() {
        return (
            <div className={'footnote-container'}>
                <div className={'footnote-list-item'} onClick={() => this.handleClick(HOME)}>
                    {HOME}
                </div>
                <div className={'footnote-list-item'} onClick={() => this.handleClick(ABOUT_US)}>
                    {ABOUT_US}
                </div>
                <div className={'footnote-list-item'} onClick={() => this.handleClick('Why Saloam?')}>
                    {'Why Saloam?'}
                </div>
                <div className={'footnote-list-item'} onClick={() => this.handleClick(TESTIMONIES)}>
                    {TESTIMONIES}
                </div>
                <div className={'footnote-end'}>
                    {'Privacy policy '}&nbsp;&nbsp;&nbsp;{' @2021 '}&nbsp;<div className={'footnote-end-bold'}>{'Saloam Funerals.'}</div>&nbsp;{' All rights reserved\r'}
                </div>
            </div>
        )
    }
}

export default Footnote
