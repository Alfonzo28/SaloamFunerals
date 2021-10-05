import React, { Component } from 'react'
import QuoteBox from '../../components/QuoteBox/QuoteBox'
import './Testimonies.scss'
import TestimonyImage from '../../assets/testimony-image.svg'
import Quote from '../../assets/quote.svg'

export default class Testimonies extends Component {
    renderCards(testimonyCard, index, testimonyCardsLength) {
        return (
            <QuoteBox
                key={index}
                index={index}
                cardPreHeader={testimonyCard?.pretitle}
                cardHeaderEnd={testimonyCard?.titleEnd}
                cardBody={testimonyCard?.body}
                cardImage={testimonyCard?.image}
            />
        )
    }

    generateTestimonies(testimonyCards) {
        if (testimonyCards?.length > 0) {
            return testimonyCards.map((testimonyCard, index) => this.renderCards(testimonyCard, index, testimonyCards?.length))
        }
    }

    render() {
        const header = 'Testimonials'
        const testimonyCards = [
            {
                pretitle: 'James Riviers',
                titleEnd: '/Design Lead @ SABC NEWS',
                body: 'Alfonzo is a hardworking person on both a personal and team level. It was a joy to collaborate on projects for SABC NEWS.',
                image: TestimonyImage
            },
            {
                pretitle: 'Janet White',
                titleEnd: '/Full-Stack Developer @ Retro Rabbit',
                body: 'Team player and overall great person. Alfonzo is dedicated, energetic, a true go-getter and is destined for greatness.',
                image: TestimonyImage
            },
            {
                pretitle: 'Stacey Thomas',
                titleEnd: '/Lead Graphic Designer @ MegaVision Media',
                body: 'He brings an element of humour, inspiration, a great work ethic and believes that hard work strengthens character.',
                image: TestimonyImage
            },
            {
                pretitle: 'Richard Welcome',
                titleEnd: '/Freelance Client',
                body: 'Alfonzo takes pride in what he does and offers the best quality and attention to detail. An overall great person, great designer and has become a great friend.',
                image: TestimonyImage
            }
        ]

        return (
            <div className={'testimonies'}>
                <div className={'testimonies-header-container'}>
                    <img className={'quote'} src={Quote} alt={'quote'}/>
                    <div className={'testimonies-header'}>{header}</div>
                </div>
                <div className={'testimonies-container'}>{this.generateTestimonies(testimonyCards)}</div>
                <div className={'traverse-buttons-container'}>
                    <div className={'traverse-left-button'}></div>
                    <div className={'traverse-right-button'}></div>
                </div>
            </div>
        )
    }
}
