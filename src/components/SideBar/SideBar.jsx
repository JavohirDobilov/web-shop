import React, { useState } from 'react'
import "../SideBar/sidebar.css"
import menu from "../../img/sidebarIcons/menyu.png"
import user from "../../img/sidebarIcons/Userimage.png"
import notifacation from "../../img/sidebarIcons/notif.svg"
import setting from "../../img/sidebarIcons/setting.svg"
import added from "../../img/sidebarIcons/added.svg"
import message from "../../img/sidebarIcons/message2.svg"
import stores from "../../img/sidebarIcons/linksIcon/Frame.svg"
import order from "../../img/sidebarIcons/linksIcon/Frame (1).svg"
import saved from "../../img/sidebarIcons/linksIcon/Frame (8).svg"
import liked from "../../img/sidebarIcons/linksIcon/Frame (2).svg"
import viwed from "../../img/sidebarIcons/linksIcon/Frame (3).svg"
import wallet from "../../img/sidebarIcons/linksIcon/Frame (4).svg"
import profil from "../../img/sidebarIcons/linksIcon/Frame (5).svg"
import helper from "../../img/sidebarIcons/linksIcon/Frame (6).svg"
import log from "../../img/sidebarIcons/linksIcon/Frame (7).svg"
import arrow from "../../img/sidebarIcons/linksIcon/arrow.svg"
import { Link } from 'react-router-dom'

const SideBar = () => {



    const [linkItem, setLinkItem] = useState(1)
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebar-gbmarket'>
                    <img src={menu} />
                    GMarket
                </div>
                <div className='sidebar-content'>
                    <div className='sidebar-avatar'>
                        <div className='sidebar-avatar-icon'>
                            <div className='sidebar-avatar-icon1-icon2'>
                                <img src={setting} />
                            </div>
                            <div className='sidebar-avatar-image'>
                                <img src={user} />
                            </div>
                            <div className='sidebar-avatar-icon1-icon2'>
                                <img src={notifacation} />
                            </div>
                        </div>
                        <div className='sidebar-avatar-name-nomer'>
                            <div className='sidebar-avatar-name'>
                                Roberto Cavanali
                            </div>
                            <div className='sidebar-avatar-nomer'>
                                (+99893) 100-00-00
                            </div>
                        </div>
                    </div>

                    <div className='sidebar-wallet-balance'>
                        <div className='sidebar-wallet-balance-num'>
                            <div className='sidebar-wallet-balance-title'>
                                Wallet balance
                            </div>
                            <div className='sidebar-wallet-balance-total'>
                                $425,97
                            </div>
                        </div>
                        <div className='sidebar-wallet-balance-added-icon'>
                            <img src={added} />
                        </div>
                    </div>

                    <div className='sidebar-sharet-wallet'>
                        <img src={message} />
                        Share wallet
                    </div>

                    <div className='sidebar-links'>
                        <Link to="/"> <div onClick={() => setLinkItem(1)} className='sidebar-links-item'>
                            <div className={(linkItem === 1 && "active") + (' sidebar-links-icon')}>
                                <img src={stores} />
                            </div>
                            <div className={(linkItem === 1 && "active") + (' sidebar-links-title')}>
                                Stores
                            </div>
                        </div>
                        </Link>
                        <Link to="/orders"><div onClick={() => setLinkItem(2)} className='sidebar-links-item'>
                            <div className={(linkItem === 2 && "active") + (' sidebar-links-icon')}>
                                <img src={order} />
                            </div>
                            <div className={(linkItem === 2 && "active") + (' sidebar-links-title')}>
                                Order history
                            </div>
                        </div>
                        </Link>
                        <Link to="/saveds"><div onClick={() => setLinkItem(3)} className='sidebar-links-item'>
                            <div className={(linkItem === 3 && "active") + (' sidebar-links-icon')}>
                                <img src={saved} />
                            </div>
                            <div className={(linkItem === 3 && "active") + (' sidebar-links-title')}>
                                Saved stores
                            </div>
                        </div>
                        </Link>
                        <Link to="/likes"><div onClick={() => setLinkItem(4)} className='sidebar-links-item'>
                            <div className={(linkItem === 4 && "active") + (' sidebar-links-icon')}>
                                <img src={liked} />
                            </div>
                            <div className={(linkItem === 4 && "active") + (' sidebar-links-title')}>
                                Liked products
                            </div>
                        </div>
                        </Link>
                        <Link to="/views"><div onClick={() => setLinkItem(5)} className='sidebar-links-item'>
                            <div className={(linkItem === 5 && "active") + (' sidebar-links-icon')}>
                                <img src={viwed} />
                            </div>
                            <div className={(linkItem === 5 && "active") + (' sidebar-links-title')}>
                                Viwed Products
                            </div>
                        </div>
                        </Link>
                        <Link to="/wallets"><div onClick={() => setLinkItem(6)} className='sidebar-links-item'>
                            <div className={(linkItem === 6 && "active") + (' sidebar-links-icon')}>
                                <img src={wallet} />
                            </div>
                            <div className={(linkItem === 6 && "active") + (' sidebar-links-title')}>
                                Wallet history
                            </div>
                        </div>
                        </Link>
                        <Link to="/profil"><div onClick={() => setLinkItem(7)} className='sidebar-links-item'>
                            <div className={(linkItem === 7 && "active") + (' sidebar-links-icon')}>
                                <img src={profil} />
                            </div>
                            <div className={(linkItem === 7 && "active") + (' sidebar-links-title')}>
                                Profil setting
                            </div>
                        </div>
                        </Link>

                    </div>


                    <div className='sidebar-links-down'>
                        <div className='sidebar-links-help-log-item'>
                            <div className='liner'>
                            </div>
                            

                                    <div className='sidebar-links-help-go'>
                                        <div className='sidebar-links-helplog'>
                                            <img src={log} />
                                            Log
                                        </div>
                                        <div className='sidebar-links-arrow'>
                                            <img src={arrow} />
                                        </div>
                                    </div>

                           

                            <div className='liner'>
                            </div>
                            

                            <div className='sidebar-links-help-go'>
                                        <div className='sidebar-links-helplog'>
                                            <img src={helper} />
                                            Helper
                                        </div>
                                        <div className='sidebar-links-arrow'>
                                            <img src={arrow} />
                                        </div>
                                    </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default SideBar