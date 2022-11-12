import React, { useState, useEffect } from 'react'
import './scheduleStyles.scss'
import { fetchApiSchedule, deleteSchedule} from '~/assets/API'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faTrash } from '@fortawesome/free-solid-svg-icons'


export default function Schedule() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchApiSchedule()
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    function handleDeleteSchedule(id) {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
        deleteSchedule(id)
            .then(() => {
                console.log("delete shedule successful!");
            })
            .catch(() => {
                console.log("delete schedule failure!");
            })
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
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faInfo} />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
