import { useState, useEffect } from 'react';
import { createSchedule, DB_OFFERS, fetchApi } from '~/assets/API';

import './OffersStyle.scss';

import ToastMessage from '../ToastMessage';


function Offers() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchApi(DB_OFFERS)
            .then((res) => {
                setData(res.val());
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function clickBookNow(event) {
        let onlyBook = -1;
        let currentIndex = event.target.getAttribute("data")
        let dtOffers = data[currentIndex]
        if (onlyBook !== currentIndex) {
            createSchedule(dtOffers)
            onlyBook = currentIndex;
            const AddSchedule = document.querySelector('.toast--message')
            AddSchedule.classList.add('active');
            setTimeout(function () {
                AddSchedule.classList.remove('active');
            }, 3000)
        }
    }

    return <div className='offers wide'>
        <h3 className="offers__title">offers</h3>
        <div className="offers-list">
            <ul>
                {
                    data.map((item, index) =>
                    (
                        <li key={index}>
                            <img src={item.img} alt="aa" />
                            <div className="item__content">
                                <span className="item__content--title">{item.title}</span>
                                <h3 className="item__content--heading">{item.heading}</h3>
                                <span className="item__content--des">{item.des}</span>
                                <button data={index} onClick={clickBookNow}>Book Now</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <ToastMessage
            title="Add successful !"
            des="Please check your schedule!"
            icon="success"
        />
    </div>
}

export default Offers;