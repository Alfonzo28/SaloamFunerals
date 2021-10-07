import React, { Component } from '../../../node_modules/react'
import PropTypes from 'prop-types'
import Snackbar from '../../../node_modules/@material-ui/core/Snackbar'
import './SnackBar.css'

export default class SnackBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    updateOpen (updatedOpenState) {
        this.state.open!==updatedOpenState && this.setState({ open:updatedOpenState })
    }

    getActionComponent(actionText) {
        return (
            <div
                className={'action'}
                onClick={()=>this.handleRemoveSnackBar()}
            >
                {actionText}
            </div>
        )
    }

    handleRemoveSnackBar() {
        this.updateOpen(false)
    }

    render() {
        const { message } = this.props

        return (
            <div className={'main'}>
                <Snackbar
                    open={this.state.open}
                    message={message}
                    action={this.getActionComponent('Dismiss')}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    onClose={()=>this.handleRemoveSnackBar()}
                />
            </div>
        )
    }
}

SnackBar.propTypes = {
    message: PropTypes.string,
}
