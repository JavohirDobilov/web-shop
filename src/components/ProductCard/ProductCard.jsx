import React from 'react'
import "../ProductCard/productCard.css"
import prots from "../../img/ProductCardImage/Frame (14).svg"
import like from "../../img/ProductCardImage/Frame (15).svg"
import productImage from "../../img/ProductCardImage/image 10.svg"
import added from "../../img/ProductCardImage/Frame (16).svg"

const ProductCard = () => {
    return (
        <div className='product-card'>
            <div className='product-card-content'>
                <div className='product-card-like-prots'>
                    <div className='product-card-prots'>
                        <img src={prots} />
                    </div>
                    <div className='product-card-like'>
                        <img src={like} />
                    </div>
                </div>
                <div className='product-card-image'>
                    <img src={productImage} />
                </div>
                <div className='product-card-title'>
                    Calavo Hass Avocados
                </div>
                <div className='product-card-price-added'>
                    <div className='product-card-price'>
                        40$
                    </div>
                    <div className='product-card-added'>
                        <img src={added}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard