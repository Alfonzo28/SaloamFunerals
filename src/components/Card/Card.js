import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

export default class Card extends Component {
    render() {
        const { cardHeader, cardBody, cardIcon, cardIconAlt } = this.props

        return (
            <div className={'card'}>
                <img src={cardIcon} alt={cardIconAlt}/>
                <div className={'card-header'}>{cardHeader}</div>
                <div className={'card-body'}>{cardBody}</div>
            </div>
        )
    }
}

Card.propTypes = {
    cardBody: PropTypes.string,
    cardHeader: PropTypes.string,
    cardIcon: PropTypes.string,
    cardIconAlt: PropTypes.string,
}
