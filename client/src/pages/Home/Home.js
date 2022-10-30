import React, { useEffect } from 'react';
//scss
import './homeStyle.scss';
//layout component
import ListItem from '~/components/ListItem';
import ListItem2 from '~/components/ListItem2';
import Offers from '~/components/Offers';
//imgVacation
import { imgOffers, imgContact } from '~/assets/images/index.js';

//courseApi
import {API_VACATION, API_HOTELS, API_COMUNITY, API_OFFERS} from "~/assets/API"
function Home() {

    return <React.Fragment>
        <div className='topVacation wide font-black'>
            <h3 className="topVacation-title">Top Vacation Destinations</h3>
            <ListItem courseApi={API_VACATION} /> 
        </div>
        <Offers courseApi= {API_OFFERS} />
        <div className='tyeVacation wide'>
            <h3 className="tyeVacation-title">Browse by property type</h3>
            <ListItem courseApi={API_HOTELS}/>
        </div>
        <div className='planTravel wide '>
            <a href="/">
                <img src={imgOffers.imgPlanTravel} alt="" />
                <div className='planTravel-content'>
                <h3>Plan your trip with travel expert</h3>
                <p>Our professional advisors can craft your perfect itinerary</p>
                </div>
            </a>
        </div>
        <div className="travelInOurComunity wide">
            <h3>Connect with other travelers in our community</h3>
            <ListItem2 courseApi = {API_COMUNITY}/>
        </div>
        <div className="contact">
            <div className='contact-content'>
                <img className='img-mobile' src={imgContact.img1} alt="imgcontact1" />
                <div className="contact-des">
                    <h3>Your all-in-one travel app.</h3>
                    <p>Book flights, hotels, trains and rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>
                    <div className="contact-call-install">
                        <div className="call">
                            <div className='call__btn'>
                                <button className='active'>Mobile</button>
                                <button>Email</button>
                            </div>
                            <p>Enter your phone number to receive a text with a link to download the app.</p>
                            <div className="call__search">
                                <input placeholder='+84 Mobile number' type="text" />
                                <button>Search</button>
                            </div>
                        </div>
                        <span></span>
                        <div className="install">
                            <a href="/">
                            <img src={imgContact.img2} alt="imgcontact2" />
                            </a>
                            <a href="/">
                            <img src={imgContact.img3} alt="imgcontact3" />
                            </a>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>

}
export default Home