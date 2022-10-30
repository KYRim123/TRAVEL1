import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
//icon
import IconCategories  from "~/assets/icons"
import './HeaderStyles.scss';
function Header(){
    return (
            <div className="background">
                <header id="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Link to="/home">TRAVEL</Link>
                    </div>
                    <div className="header__navbar">
                        <ul>
                            <li className="header__navbar--active">
                                <Link to="/home">Home</Link> </li>
                            <li>
                                <Link to="/schedule">schedule</Link></li>
                            <li>
                                <Link>Flights</Link></li>
                            <li>
                                <Link>Packages</Link></li>
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
                            <li>
                                <Link to="/beaches">
                                    <img src={IconCategories.icon1} alt="" />
                                    <span>Beaches</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon2} alt="" />
                                    <span>Deserts</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon3} alt="" />
                                    <span>Mountains</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon4} alt="" />
                                    <span>Iconic Cities</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon5} alt="" />
                                    <span>Houseboats</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon6} alt="" />
                                    <span>Countryside</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon7} alt="" />
                                    <span>Camping</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon8} alt="" />
                                    <span>Castles</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon9} alt="" />
                                    <span>Skiing</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={IconCategories.icon10} alt="" />
                                    <span>Tropical</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            


            
    )
}

export default Header;