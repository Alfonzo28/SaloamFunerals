import React, { Component } from 'react'
import './Header.scss'
import { HOME, ABOUT_US, WHY_US, TESTIMONIES, GET_IN_TOUCH, SCROLL_ELEMENT } from '../../constants/headerConstants'
import MobileNavDropdown from '../../assets/mobile-nav-dropdown.svg'
import MobileCloseDropdown from '../../assets/mobile-close-dropdown.svg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDesktop: false,
            dropdownOpen: false,
        }

        this.updatePredicate = this.updatePredicate.bind(this)
    }

    componentDidMount() {
        this.updatePredicate()
        window.addEventListener('resize', this.updatePredicate)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate)
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 660 })
        window.innerWidth > 660 && this.setState({ dropdownOpen: false })
    }

    renderHeaderButton(headerButton) {
        if (headerButton === HOME) {
            return (
                <div
                    key={headerButton}
                    className={'header-text header-button'}
                    onClick={() => this.handleClick(headerButton)}
                >
                    <div className={'header-item-text-highlighted'}>{headerButton}</div>
                    <div className={'header-underline-highlighted'}>
                    </div>
                </div>
            )
        } else {
            return (
                <div
                    key={headerButton}
                    className={'header-text header-button'}
                    onClick={() => this.handleClick(headerButton)}
                >
                    <div className={'header-item-text'}>{headerButton}</div>
                    <div className={'header-underline'}>
                    </div>
                </div>
            )
        }
    }

    renderHeaderButtons() {
        const headerButtons = [
            HOME, ABOUT_US, WHY_US, TESTIMONIES
        ]
        return (
            headerButtons.map(headerButton=>this.renderHeaderButton(headerButton))
        )
    }

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
        case WHY_US: {
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
        case GET_IN_TOUCH: {
            const page = document.getElementById(SCROLL_ELEMENT)
            const pageHeight = page.scrollHeight
            window.scrollTo({
                top: pageHeight * 0.9,
                left: 0,
                behavior: 'smooth'
            })
            break
        }
        default: {
            break
        }
        }
    }

    handleMobileDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen })
    }

    renderMobileHeaderButtons() {
        const headerButtons = [
            HOME, ABOUT_US, WHY_US, TESTIMONIES
        ]
        return (
            headerButtons.map(headerButton=>this.renderMobileHeaderButton(headerButton))
        )
    }

    renderMobileHeaderButton(headerButton) {
        return (
            <div
                key={headerButton}
                className={'header-text mobile-header-button'}
                onClick={() => this.handleClick(headerButton)}
            >
                <div className={'header-item-text'}>{headerButton}</div>
                <div className={'header-underline'}>
                </div>
            </div>
        )
    }

    render() {
        const isDesktop = this.state.isDesktop

        return (
            <div className={'header'}>
                <div className={'header-text header-title'} onClick={() => this.handleClick(HOME)}>{'SALOAM'}</div>
                <div className={'f-1'}/>
                {(!isDesktop && !this.state.dropdownOpen) && <img className={'dropdown'} src={MobileNavDropdown} alt={'dropdown'} onClick={() => this.handleMobileDropdown()}/>}
                {isDesktop && this.renderHeaderButtons()}
                {(!isDesktop && this.state.dropdownOpen) &&
				<div className={'mobile-header-buttons'}>
				    {(!isDesktop && this.state.dropdownOpen) && <img className={'dropdown-close'} src={MobileCloseDropdown} alt={'dropdown'} onClick={() => this.handleMobileDropdown()}/>}
				    {this.renderMobileHeaderButtons()}
				</div>
                }

                {isDesktop &&
                <button
                    className={'contact-button'}
                    onClick={() => this.handleClick(GET_IN_TOUCH)}
                >
                    {GET_IN_TOUCH}
                </button>}
            </div>
        )
    }
}

export default Header
