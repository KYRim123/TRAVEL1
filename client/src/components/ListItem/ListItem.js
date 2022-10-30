import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ListItemStyle.scss";
import getData from '../../RestApi';


function ListItem({courseApi}) {
    const [data, setData] = useState([]);
    useEffect(() =>{
        getData(courseApi, setData)
    }, []);

     return <div className="listItem">
        <ul className="listItem--ul">
            {
              data &&  data.map((item, index) =>
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