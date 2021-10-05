import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export default class Modal extends Component {
    render() {
        const { message, title } = this.props

        return (
            <div className={'modal-shaded-container'}>
                <div className={'modal-container'}>
                    <div className={'modal-title'}>{title}</div>
                    <div className={'modal-message'}>{message}</div>
                    <div className={'modal-button'} onClick={(event) => this.props.closeModal(event)}>{'Close'}</div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    message: PropTypes.string,
    title: PropTypes.string,
}
