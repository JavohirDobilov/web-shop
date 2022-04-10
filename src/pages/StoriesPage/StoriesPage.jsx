import React from 'react'
import "../StoriesPage/storiesPage.css"
import banner from "../../img/bannerImage/banner.png"
import shop from "../../img/bannerImage/shopM.svg"
import vilka from "../../img/bannerImage/vilka.svg"
import shopWhite from "../../img/bannerImage/shopWhite.svg"
import vilkaWhite from "../../img/bannerImage/vilkaWhite.svg"
import info from "../../img/bannerImage/info.svg"
import dilevry from "../../img/bannerImage/dilevry.svg"
import saved from "../../img/bannerImage/saved.svg"
import star from "../../img/bannerImage/star.svg"
import { useState } from "react"
import SalesCard from '../../components/SalesCard/SalesCard'

import apelsin from "../../img/salescard/apelsin2.png"
import pomidor from "../../img/salescard/pomidor.png"
import cuck from "../../img/salescard/cuck.png"
import meva from "../../img/salescard/ananas.png"
import filterSort from "../../img/salescard/filterSort.svg"
import ProductCard from '../../components/ProductCard/ProductCard'
import seeall from "../../img/bannerImage/arrow4.svg"
import product1 from "../../img/ProductCardImage/image 10.svg"
import product2 from "../../img/ProductCardImage/image 12.svg"
import product3 from "../../img/ProductCardImage/image 13.svg"
import product4 from "../../img/ProductCardImage/image 14.svg"


const StoriesPage = () => {



    const [filterBtn, setFilterBtn] = useState(1)




    const products = [
        {id:1,image:"",title:"",pricing:""},
        {id:2,image:"",title:"",pricing:""},
        {id:3,image:"",title:"",pricing:""},
        {id:4,image:"",title:"",pricing:""},
        {id:5,image:"",title:"",pricing:""}
    ]

    const salesSlider = [
        {
            id: 1,
            title: "Sale",
            text: "Promocode down",
            btnText: "ORANGE",
            color: "#ff7700",
            image: apelsin
        },
        {
            id: 2,
            title: "Tomato",
            text: "Buy affortibel",
            btnText: "PRICING",
            color: "rgb(219, 34, 34)",
            image: pomidor
        },
        {
            id: 3,
            title: "Sale 40%",
            text: "Very tasty pasta",
            btnText: "FOOD 40%",
            color: "rgb(117, 206, 0)",
            image: cuck
        },
        {
            id: 4,
            title: "Sale",
            text: "Very fullPack",
            btnText: "ORANGE",
            color: "#7753F6",
            image: cuck
        },
        {
            id: 5,
            title: "Collection",
            text: "Sale full Pack",
            btnText: "COLLECT",
            color: "#ff7700",
            image: apelsin
        },

        {
            id: 6,
            title: "Sale",
            text: "Promocode down",
            btnText: "ORANGE",
            color: "#ff7700",
            image: apelsin
        },
        {
            id: 7,
            title: "Tomato",
            text: "Buy affortibel",
            btnText: "PRICING",
            color: "rgb(247, 0, 0)",
            image: pomidor
        },
        {
            id: 8,
            title: "Sale",
            text: "Promocode down",
            btnText: "ORANGE",
            color: "#ff7700",
            image: apelsin
        },
        {
            id: 9,
            title: "Tomato",
            text: "Buy affortibel",
            btnText: "PRICING",
            color: "rgb(247, 0, 0)",
            image: pomidor
        },
        {
            id: 10,
            title: "Sale",
            text: "Very tasty pasta",
            btnText: "FOOD 40",
            color: "rgb(117, 206, 0)",
            image: cuck
        },
    ]
    const len = salesSlider.length

    const sliderItems = {
        width: `${len * 100 / 4}%`,
        display: 'flex'
    }
    const sliderItem = {
        width: `${100 / len}%`
    }


    const [shopVil, setShopVil] = useState(1)
    return (
        <div className='store'>
            <div className='store-banner-shop'>
                <div className='store-banner'>
                    <div className='store-banner-img'>
                        <img src={banner} />
                    </div>
                    <div className='store-banner-container-flex'>
                        <div className='store-banner-container'>
                            <div className='store-banner-container-title'>
                                Wallmart store
                            </div>
                            <div className='store-banner-container-circle'>

                            </div>
                            <div className='store-banner-container-info'>
                                <img src={info} />
                                Store info
                            </div>
                            <div className='store-banner-container-circle'>

                            </div>
                            <div className='store-banner-container-dilevry'>
                                <img src={dilevry} />
                                Store dilevry time
                            </div>
                            <div className='store-banner-container-circle'>

                            </div>
                            <div className='store-banner-container-saved'>
                                <img src={saved} />
                                Saved
                            </div>
                        </div>
                        <div className='store-banner-star'>
                            <img src={star} />
                            4.5
                        </div>
                    </div>
                </div>
                <div className='store-shop-content'>
                    <div onClick={() => setShopVil(1)} className={(shopVil === 1 && 'active') + (' store-shop-content-top1')}>
                        <img src={shopVil !== 1 ? shop : shopWhite} />
                    </div>
                    <div onClick={() => setShopVil(2)} className={(shopVil === 2 && 'active') + (' store-shop-content-top2')}>
                        <img src={shopVil === 1 ? vilka : vilkaWhite} />
                    </div>
                </div>
            </div>

            <div className='sales-slider'>
                <div className="sales-slider-items" style={sliderItems}>
                    {salesSlider.map(item => (
                        <div key={item.id} style={sliderItem}><SalesCard data={item} /></div>
                    ))}
                </div>
            </div>

            <div className='sales-buttons'>
                <div className='sales-button-filter'>
                    <img src={filterSort} />
                </div>
                <div onClick = {()=>setFilterBtn(1)} className={(filterBtn===1 && "active")+(" sales-button-filts")}>
                    Fruits and Vegetables
                </div>
                <div onClick = {()=>setFilterBtn(2)} className={(filterBtn===2 && "active")+(" sales-button-filts")}>
                    Eggs and Dairys
                </div>
                <div onClick = {()=>setFilterBtn(3)} className={(filterBtn===3 && "active")+(" sales-button-filts")}>
                    Frozens
                </div>
                <div onClick = {()=>setFilterBtn(4)} className={(filterBtn===4 && "active")+(" sales-button-filts")}>
                    Beverange
                </div>
                <div onClick = {()=>setFilterBtn(5)} className={(filterBtn===5 && "active")+(" sales-button-filts")}>
                    Snacks
                </div>
                <div onClick = {()=>setFilterBtn(6)} className={(filterBtn===6 && "active")+(" sales-button-filts")}>
                    Households
                </div>
                <div className='sales-button-filts'>
                    More
                    <img src=''/>
                </div>
            </div>
            <div className='store-seAll'>
                <div className='store-seAll-title'>
                    Fresh Fruit
                </div>
                <div className='store-seAll-btn'>
                    See all
                    <img src={seeall}/>
                </div>
            </div>
            <div className='store-products'>
                <div className='store-products-items'>
                    {products.map(item=>(
                        <ProductCard product = {item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StoriesPage