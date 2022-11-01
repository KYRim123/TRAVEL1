import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ListItemStyle.scss";
import { fetchApiWeb } from '~/assets/API'

function ListItem({propertyName}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchApiWeb(propertyName)
            .then((res) => {
                setData(res.data[propertyName])})
            .catch((err) => console.log(err))
    }, []);

    return <div className="listItem">
        <ul className="listItem--ul">
            {
                data && data.map((item, index) =>
                    <li key={index} className="listItem--li">
                        <Link href="/">
                            <img src={item.img} alt="dasda"></img>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                )
            }
        </ul>
    </div>
}



export default ListItem;