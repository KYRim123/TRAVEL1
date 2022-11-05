import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
//icon
import IconCategories  from "~/assets/icons"
import './HeaderStyles.scss';
import { useState } from "react";

function Header(){
    const [navInx, setNavInx] = useState(0)
    const [currentTC, setCurrentTC] = useState('')
    const navBar = [
        {link:'/home', name: 'home'}, 
        {link:'/schedule', name: 'schedule'}, 
        {link:'/home', name: 'Flights'},
        {link:'/home', name: 'Packages'}
    ]
    
    const topCategories = [
        {link: '/beaches', icon: IconCategories.icon1, name: 'Beaches'},
        {link: '/home', icon: IconCategories.icon2, name: 'Deserts'},
        {link: '/home', icon: IconCategories.icon3, name: 'Mountains'},
        {link: '/home', icon: IconCategories.icon4, name: 'Iconic Cities'},
        {link: '/home', icon: IconCategories.icon5, name: 'Houseboats'},
        {link: '/home', icon: IconCategories.icon6, name: 'Countryside'},
        {link: '/home', icon: IconCategories.icon7, name: 'Camping'},
        {link: '/home', icon: IconCategories.icon8, name: 'Castles'},
        {link: '/home', icon: IconCategories.icon9, name: 'Skiing'},
        {link: '/home', icon: IconCategories.icon10, name: 'Tropical'}
    ]

    

    return (
            <div className="background">
                <header id="header">
                    <div className="header__container">
                        <div className="header__logo">
                            <Link to="/home">TRAVEL</Link>
                        </div>
                        <div className="header__navbar">
                            <ul>
                                {
                                    navBar.map((nav, inx) => (
                                        <li 
                                            key={inx}
                                            onClick={() => setNavInx(inx)}
                                            className={`header__navbar--link ${inx === navInx ? 'active':''}`}
                                        >
                                        <Link to={nav.link}>{nav.name}</Link>
                                        </li>
                                    ))
                                }
                                <li className="header__navbar--logout"><Link to="/">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="content">
                    <div className="content__title"><h1>The whole world <br /> awaits.</h1></div>
                    <div className="content__search">
                        <FontAwesomeIcon className="content__search--icon" icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Search destinations, hotels" />
                        <div className="content__search__button">
                            <Link href="">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>check in</span>
                            </Link>
                            <Link href="">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>check out</span>
                            </Link>
                            <Link href="">
                                <FontAwesomeIcon icon={faUser} />
                                <span>1 room, 2 adults</span>
                            </Link>
                            <button>Search</button>
                        </div>
                    </div>
                    {/* Top categories */}
                    <div className='topCate'>
                        <h3>Top categories</h3>
                        <ul>
                            {
                                topCategories.map((item, index) => (
                                    <li 
                                        key={index} 
                                        onClick={() => setCurrentTC(index)}
                                    >
                                        <Link to={item.link} style={{opacity: currentTC === index ? '1':''}}>
                                            <img src={item.icon} alt="topcategories" />
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            


            
    )
}

export default Header;