import React, { useState, useEffect } from 'react'
import './scheduleStyles.scss'
import { API_SCHEDULE } from '~/assets/API'
import getData, {delData} from '~/RestApi'

export default function Schedule() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData(API_SCHEDULE, setData);
    }, [])

    function handleDeleteSchedule(id) {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
        delData(API_SCHEDULE, id)
    }

    
    
    return (
        <div className='schedule--wrapper'>
            <h3 className="schedule__heading">Your schedule</h3>
            <ul className='schedule__list'>
                {
                    data.map((item, index) => (
                        <li key={index}>
                            <div className="schedule__item">
                                <img src={item.img} alt="imgSchedule" />
                                <div className='schedule__item--content'>
                                    <h3>{item.title || item.name}</h3>
                                    <p>{item.heading || item.time}</p>
                                    <p>{item.des || item.start + "*"}</p>
                                </div>
                                <button onClick={() => handleDeleteSchedule(item.id)}>
                                    Delete
                                </button>
                                <button>
                                    <span>Infor</span>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
