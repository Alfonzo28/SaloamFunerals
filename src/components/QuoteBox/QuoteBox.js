import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuoteBox.scss';
import Quote from '../../assets/Quote.svg';

export default class QuoteBox extends Component {
	render() {
		const {cardPreHeader, cardHeaderEnd, cardBody, cardImage, index} = this.props;
		const boxClass = index % 2 === 0 ? 'box' : 'box box-float-right';
		
		return (
			<div className={boxClass}>
				<div className="box-image-container">
					<img className="box-image" src={cardImage} alt="testimony-picture"/>
				</div>
				<div className="box-text-container">
					<div className="box-header-div">
						<div className="box-pre-header">{cardPreHeader}</div>
						<div className="box-header-end">{cardHeaderEnd}</div>
						<img className="quote" src={Quote} alt="quote"/>
					</div>
					<div className="box-body">{cardBody}</div>
				</div>
			</div>
		);
	}
}

QuoteBox.propTypes = {
	cardBody: PropTypes.string,
	cardHeaderEnd: PropTypes.string,
	cardImage: PropTypes.string,
	cardPreHeader: PropTypes.string,
	index: PropTypes.number,
};
