import React, { Component } from 'react'
import './Contact.scss'
import { sendContactInfo } from '../../helpers/generalHelper'
import SnackBar from '../../components/SnackBar/SnackBar'
import {
    EMAIL_REGEX_TEST
} from '../../constants/generalConstants'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            message: '',
            showFirstNameError: false,
            showLastNameError: false,
            showEmailAddressError: false,
            showMessageError: false,
            showSnackbar: false,
            snackbarMessage: '',
            snackbarLoadingMessage: '',
            showLoadingSnack: false,
        }
    }

    handleTextChange(inputText, field) {
        this.setState({ [field]: inputText })
    }

    async sendContactInfo() {
        const condition = this.state.firstName !== '' && this.state.firstName != null
			&& this.state.lastName !== '' && this.state.lastName != null
			&& this.state.message !== '' && this.state.message != null
			&& EMAIL_REGEX_TEST.test(String(this.state.emailAddress).toLowerCase())

        if (condition) {
            this.setState({
                showLastNameError: false, showMessageError: false, showEmailAddressError: false,
                showFirstNameError: false, showLoadingSnack: false, snackbarLoadingMessage: 'Sending contact info...'
            })
            const response = await sendContactInfo(this.state)
            this.setState({ showSnack: true, snackbarMessage: response?.data?.message })
        } else {
            this.setState({ showFirstNameError: !(this.state.firstName !== '' && this.state.firstName != null) })
            this.setState({ showLastNameError: !(this.state.lastName !== '' && this.state.lastName != null) })
            this.setState({ showMessageError: !(this.state.message !== '' && this.state.message != null) })
            this.setState({ showEmailAddressError: !EMAIL_REGEX_TEST.test(String(this.state.emailAddress).toLowerCase()) })
            this.setState({ showLoadingSnack: true, snackbarLoadingMessage: 'Please ensure all fields are filled in correctly' })
        }
    }

    render() {
        const lastName = 'lastName'
        const firstName = 'firstName'
        const emailAddress = 'emailAddress'
        const message = 'message'

        return (
            <div className={'contact-container'}>
                {this.state.showSnack &&
        		<SnackBar
        		    message={this.state.snackbarMessage}
        		/>
                }
                {this.state.showLoadingSnack &&
        		<SnackBar
        		    message={this.state.snackbarLoadingMessage}
        		/>
                }
                <div className={'contact-title'}>{'Get In Touch'}</div>
                <div className={'form-field-container'}>
                    <div className={'name-fields-container'}>
                        <input
                            className={this.state.showFirstNameError ? 'error' : 'input'}
                            placeholder={'First Name'}
                            value={this.state[firstName]}
                            type={'text'}
                            name={firstName}
                            onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
                        />

                        <input
                            className={this.state.showLastNameError ? 'error' : 'input'}
                            type={'text'}
                            placeholder={'Last Name'}
                            value={this.state[lastName]}
                            name={lastName}
                            onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
                        />
                    </div>
                    <div className={'phoneNumber-field-container'}>
                        <input
                            className={this.state.showEmailAddressError ? 'error' : 'input'}
                            placeholder={'Email address'}
                            value={this.state[emailAddress]}
                            type={'text'}
                            name={emailAddress}
                            onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
                        />
                    </div>
                    <div className={'message-field-container'}>
                        <textarea
                            className={this.state.showMessageError ? 'error' : 'input-text-area'}
                            placeholder={'Your message'}
                            value={this.state[message]}
                            name={message}
                            onChange={(e)=>this.handleTextChange(e.target.value, e.target.name)}
                        >
                        </textarea>
                    </div>
                    <button
                        className={'contact-button'}
                        onClick={()=>this.sendContactInfo()}
                    >
                        {'Send Message'}
                    </button>
                </div>
            </div>
        )
    }
}
