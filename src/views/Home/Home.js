import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
    render() {
        const preHeader = 'Saloam'
        const postHeader = 'Funerals'
        const subTitle = 'Where Family Matter'

        return (
            <div className={'home'}>
                <div className={'pre-header'}>{preHeader}</div>
                <div className={'header-end'}>{postHeader}</div>
                <div className={'sub-title'}>{subTitle}</div>
            </div>
        )
    }
}
