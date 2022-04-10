import React from 'react'
import "../SalesCard/salesCard.css"



const SalesCard = ({data}) => {
    return (
        <div className='sales-card' style={{backgroundColor:`${data.color}`}}>
            <div className='sales-card-image'>
                <img src={`${data.image}`} />
            </div>
            <div className='sales-card-content'>
                <div className='sales-card-title'>
                    {data.title}
                </div>
                <div className='sales-card-text'>
                    {data.text}
                </div>
                <div className='sales-card-fool'>
                    {data.btnText}
                </div>

            </div>
        </div>
    )
}

export default SalesCard