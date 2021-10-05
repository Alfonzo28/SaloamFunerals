import React, { Component } from 'react'
import './WhyUs.scss'
import Card from '../../components/Card/Card'
import Heart from '../../assets/heart.svg'
import Star from '../../assets/star.svg'
import Clock from '../../assets/clock.svg'

class WhyUs extends Component {
    generateWhyUsCards(whyUsCards) {
        if (whyUsCards?.length > 0) {
            return whyUsCards.map((whyUsCard, index) => {
                return (
                    <Card key={index} cardBody={whyUsCard?.body} cardHeader={whyUsCard?.header} cardIcon={whyUsCard?.icon} cardIconAlt={whyUsCard?.iconAlt}/>
                )
            })
        }
    }

    render() {
        const whyUsCards = [
            {
                header: 'Family Owned',
                body: 'Welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                icon: Heart,
                iconAlt: 'heart'
            },
            {
                header: 'Family Owned',
                body: 'Welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                icon: Star,
                iconAlt: 'start'
            },
            {
                header: 'Family Owned',
                body: 'Welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                icon: Clock,
                iconAlt: 'clock'
            },
        ]

        return (
            <div className={'why-us-container'}>
                <div className={'why-us-header-container'}>
                    <div className={'why-us-header'}>{'Why Choose Saloam Funerals?'}</div>
                    <div className={'why-us-body'}>{'Welcome Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat  ut aliquip ex ea commodo consequat'}</div>
                </div>
                <div className={'why-us-cards-container'}>
                    {this.generateWhyUsCards(whyUsCards)}
                </div>
            </div>
        )
    }
}

export default WhyUs
