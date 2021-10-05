import React, { Component } from 'react';
import QuoteBox from '../../components/QuoteBox/QuoteBox';
import './Testimonies.scss';
import Test1 from '../../assets/Test 1.png';
import Test2 from '../../assets/Test 2.png';
import Test3 from '../../assets/Test 3.png';
import Test4 from '../../assets/Test 4.png';
import Ellipse from '../../assets/Ellipse.svg';
import Dots from '../../assets/Dots.svg';

export default class Testimonies extends Component {	
	renderEllipse() {
		return(
			<img className="ellipse" src={Ellipse} alt="ellipse"/>
		);
	}

	renderDots() {
		return(
			<img className="dots" src={Dots} alt="dots"/>
		);
	}

	renderCards(testimonyCard, index, testimonyCardsLength) {
		return (
			<div key={index}>
				<div className="ellipse-dot-quote-container">
					<div className="ellipse-container">
						{index % 2 === 0 && this.renderEllipse()}
					</div>
					<div>
						{index  % 2 === 0 && this.renderDots()}
					</div>
				</div>
				<QuoteBox
					key={index}
					index={index}
					cardPreHeader={testimonyCard?.pretitle}
					cardHeaderEnd={testimonyCard?.titleEnd}
					cardBody={testimonyCard?.body}
					cardImage={testimonyCard?.image}
				/>
				<div className="ellipse-dot-quote-container-end">
					<div>
						{index === testimonyCardsLength - 1 && this.renderDots()}
					</div>
					<div>
						{index % 2 === 1 && this.renderEllipse()}
					</div>
				</div>
			</div>
		);
	}

	generateTestimonies(testimonyCards) {
		if (testimonyCards?.length > 0) {
			return testimonyCards.map((testimonyCard, index) => this.renderCards(testimonyCard, index, testimonyCards?.length));
		}
	}

	render() {
		const header = 'TESTIMONIES';
		const testimonyCards = [
			{
				pretitle: 'James Riviers',
				titleEnd: '/Design Lead @ SABC NEWS',
				body: 'Alfonzo is a hardworking person on both a personal and team level. It was a joy to collaborate on projects for SABC NEWS.',
				image: Test1
			},
			{
				pretitle: 'Janet White',
				titleEnd: '/Full-Stack Developer @ Retro Rabbit',
				body: 'Team player and overall great person. Alfonzo is dedicated, energetic, a true go-getter and is destined for greatness.',
				image: Test2
			},
			{
				pretitle: 'Stacey Thomas',
				titleEnd: '/Lead Graphic Designer @ MegaVision Media',
				body: 'He brings an element of humour, inspiration, a great work ethic and believes that hard work strengthens character.',
				image: Test3
			},
			{
				pretitle: 'Richard Welcome',
				titleEnd: '/Freelance Client',
				body: 'Alfonzo takes pride in what he does and offers the best quality and attention to detail. An overall great person, great designer and has become a great friend.',
				image: Test4
			}
		];

		return (
			<div className="testimonies">
				<div className="testimonies-header">{header}</div>
				<div className="testimonies-container">{this.generateTestimonies(testimonyCards)}</div>
			</div>
		);
	}
}
