import React from 'react'
import preloader from '../../assets/img/loading.gif'

const Preloader = (props) => {
    return (
        <div style={{height: '100px'}}>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader