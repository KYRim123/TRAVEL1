import { useRef, useState } from "react";
import {Link} from "react-router-dom";
import './HeaderStyles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
//icon
import IconCategories  from "~/assets/icons"
//background
import {imgBG} from '~/assets/images'

function Header(){
    const [navInx, setNavInx] = useState(0)
    const [currentTC, setCurrentTC] = useState('')
    const [currentBg, setCurrentBg] = useState(imgBG.bgHome)
    const navBar = [
        {link:'/home', name: 'home'}, 
        {link:'/schedule', name: 'schedule'}, 
        {link:'/home', name: 'Flights'},
        {link:'/home', name: 'Packages'}
    ]
    
    const topCategories = [
        {link: '/beaches', icon: IconCategories.icon1, name: 'Beaches', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon2, name: 'Deserts', bachground: imgBG.bgHome},
        {link: '/home', icon: IconCategories.icon3, name: 'Mountains', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon4, name: 'Iconic Cities', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon5, name: 'Houseboats', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon6, name: 'Countryside' , bachground: imgBG.bgCountryside},
        {link: '/home', icon: IconCategories.icon7, name: 'Camping', bachground: imgBG.bgCamping},
        {link: '/home', icon: IconCategories.icon8, name: 'Castles', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon9, name: 'Skiing', bachground: imgBG.bgBeachs},
        {link: '/home', icon: IconCategories.icon10, name: 'Tropical', bachground: imgBG.bgBeachs}
    ]

    return (
            <div className="header--container">
                <img className="header--background" src={currentBg} alt="bground"></img>
                <div className="headerContent">
                    <header id="header">
                        <div className="header__container">
                            <div className="header__logo">
                                <Link to="/home" onClick={() => setCurrentBg(imgBG.bgHome)}>TRAVEL</Link>
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
                    <div className="content wide">
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
                                            onClick={() => {
                                                setCurrentTC(index);
                                                setCurrentBg(topCategories[index].bachground)
                                            }}
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
            </div>
            


            
    )
}

export default Header;