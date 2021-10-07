import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './QuoteBox.scss'

export default class QuoteBox extends Component {
    render() {
        const { cardPreHeader, cardHeaderEnd, cardBody, cardImage, index } = this.props
        const boxClass = index % 2 === 0 ? 'box' : 'box box-float-right'

        return (
            <div className={boxClass}>
                <div className={'box-image-container'}>
                    <img className={'box-image'} src={cardImage} alt={'testimony'}/>
                    <div className={'box-header-div'}>
                        <div className={'box-pre-header'}>{cardPreHeader}</div>
                        <div className={'box-header-end'}>{cardHeaderEnd}</div>
                    </div>
                </div>
                <div className={'box-body'}>{cardBody}</div>
            </div>
        )
    }
}

QuoteBox.propTypes = {
    cardBody: PropTypes.string,
    cardHeaderEnd: PropTypes.string,
    cardImage: PropTypes.string,
    cardPreHeader: PropTypes.string,
    index: PropTypes.number,
}
