import { useEffect , useState } from 'react';
import './ListItem3Style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import icons from '~/assets/icons'


import ToastMessage from '../ToastMessage';
import { fetchApiWeb, createSchedule } from '~/assets/API'


function ListItem3({ propertyName }) {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetchApiWeb(propertyName)
            .then((res) => {
                setData(res.data[propertyName])})
            .catch((err) => console.log(err))
    }, []);


    function clickBookNow(event) {
        let currentIndex = event.target.getAttribute("data")
        let dtBeachs = data[currentIndex]
        let onlyBook = -1;
        if (onlyBook !== currentIndex) {
            createSchedule(dtBeachs);
            onlyBook = currentIndex;
            const AddSchedule = document.querySelector('.toast--message')
            AddSchedule.classList.add('active');
            setTimeout(function () {
                AddSchedule.classList.remove('active');
            }, 3000)
        }
    }

    return <div className="listItem3">
        <ul className='listItem3--ul'>
            {
                data.map((item, index) =>
                    <li key={index} className="listItem3--li">
                        <img  className='listItem3--img' src={item.img} alt="" />
                        <div className='infor'>
                            <h4>{item.name}</h4>
                            <FontAwesomeIcon className='icon' icon={faStar} />
                            <span>{item.start}</span>
                        </div>  
                        <span>{item.time}</span>
                        <div className='other'>
                            <div>
                                <img src={icons.plane} alt="" />
                                <br />
                                <span>2 Flights</span>
                            </div>
                            <div>
                                <img src={icons.hotel} alt="" />
                                <br />
                                <span>1 Hotel</span>
                            </div>
                            <div>
                                <img src={icons.car} alt="" />
                                <br />
                                <span>2 Transfers</span>
                            </div>
                            <div>
                                <img src={icons.person} alt="" />
                                <br />
                                <span>4 Activities</span>
                            </div>
                        </div>
                        <ul className='other--infor'>
                            <li>Tour combo with return airport transfer</li>
                            <li>City Tour</li>
                            <li>Curious Corner</li>
                        </ul>
                        <div className='price'>
                            <span className='price--old'>$100.52</span>
                            <span className='price-new'>$99.52</span>
                            Per person
                            <button 
                                data = {index}
                                className='price--btn'
                                onClick={clickBookNow}
                            >Book Now</button>
                        </div>
                    </li>
                )
            }
        </ul>
        <ToastMessage
            title="Add successful !"
            des="Please check your schedule!"
            icon="false"
        />
    </div>
}

export default ListItem3;