import React from 'react';
import './beachesStyles.scss';
import ListItem3 from '~/components/ListItem3';

import {DB_BEACH_POP, DB_PACKAGES, DB_SPECIAL} from "~/assets/API"

function Beaches() {
    return <React.Fragment> 
            <div className="popularBeach wide">
                <h3>Popular Beach Destinations</h3>
                <ListItem3 propertyName={DB_BEACH_POP}/>
            </div>
            <div className="recentlyViewed wide">
                <h3>Recently Viewed</h3>
                <div className='recentlyViewed--container'>
                    <ListItem3 propertyName={DB_PACKAGES}/>
                </div>
            </div>

            <div className="allPackages wide">
                <h3>All Inclusive Packages!</h3>
                <ListItem3 propertyName={DB_PACKAGES}/>
            </div>

            <div className="special wide">
                <h3>Honeymoon Freebies Special</h3>
                <ListItem3 propertyName={DB_SPECIAL}/>
            </div>

        </React.Fragment>
}
export default Beaches;