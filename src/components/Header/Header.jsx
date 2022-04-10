import React from 'react'
import "../Header/header.css"
import arrow from "../../img/headerIcons/leftArrow.svg"
import location from "../../img/headerIcons/location.svg"
import arrowpast from "../../img/headerIcons/pastgaArrow.svg"
import search from "../../img/headerIcons/search.svg"
import filter from "../../img/headerIcons/filter.svg"
import timer from "../../img/headerIcons/timer.svg"
import cart from "../../img/headerIcons/cart.svg"
import { useSelector } from 'react-redux'

const Header = () => {


    const cartProducts = useSelector(state=>state?.allProducts?.cart)
    const totalPrice = cartProducts.reduce((acc,product) =>acc+=+product.pricing,0)
    console.log(cartProducts)
    return (
        <div className='header'>
            <div className='header-flex'>
                <div className='header-arrow'>
                    <img src={arrow} />
                </div>
                <div className='header-location'>
                    <div className='header-location-icon'>
                        <img src={location} />
                    </div>
                    <div className='header-location-title'>
                        2972 Westheimer Rd. Santa Ana
                    </div>
                    <div className='header-location-arrow'>
                        <img src={arrowpast} />
                    </div>
                </div>

                <div className='header-search'>
                    <img src={search} />
                    <input type="texxt" placeholder='Search products in Wilmart' />
                    <img src={filter} />
                </div>
                <div className='header-timer'>
                   <div className='header-timer-circle'>
                   <img src={timer} />
                    <div className="header-timer-data">
                        By 09:00 — 23:00
                    </div>
                   </div>
                </div>
                <div className='header-cart-block'>
                    <div className='header-cart-block-circle'>
                        <img src={cart}/>
                    </div>
                    <div className='header-cart-total'>
                    ${totalPrice}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header