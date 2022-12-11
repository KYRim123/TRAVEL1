import './ListItem2Style.scss';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchApiWeb, fetchApi } from '~/assets/API'



function ListItem2({ propertyName }) {
    const [data, setData] = useState([]);
    //get data from api
    // useEffect(() => {
    //     fetchApiWeb(propertyName)
    //         .then((res) => {
    //             setData(res.data[propertyName])
    //         })
    //         .catch((err) => console.log(err))
    // }, []);

    //get data from firebase

    useEffect(() => {
        fetchApi(propertyName)
            .then((res) => {
                setData(res.val());
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return <div className="listItem2">
        <ul>
            {data && data.map((item, index) =>
                <li key={index}>
                    <Link href="/">
                        <img src={item.img} alt="dasda"></img>
                        <h4>{item.name}</h4>
                        <span>Travel community</span>
                        <br />
                        <span>155,073 travelers</span>
                    </Link>
                </li>
            )}
        </ul>
    </div>
}

export default ListItem2;