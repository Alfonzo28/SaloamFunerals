import React, { Component } from 'react'
import Helmet from 'react-helmet'

class HelmetComponent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{'Saloam Funerals'}</title>
                    <meta name={'description'} content={'Saloam Funerals'} />
                    <meta name={'robots'} content={'index, follow'} />
                    <meta charset={'utf-8'} />
                    <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
                    <meta name={'theme-color'} content={'#000000'} />
                    <meta name={'keywords'} content={'Funeral,Funeral Parlor,Saloam,Burial'} />
                </Helmet>
            </div>
        )
    }
}

export default HelmetComponent
