import React from 'react'
import ListItem3 from '../ListItem3/ListItem3'
import './categoriesStyles.scss'

function Categories({dataPop, dataRe, dataPac, dataSpec}) {
    return (
        <React.Fragment>
            <div className="popularBeach wide">
                <h3>Popular Beach Destinations</h3>
                <ListItem3 propertyName={dataPop} />
            </div>
            <div className="recentlyViewed wide">
                <h3>Recently Viewed</h3>
                <div className='recentlyViewed--container'>
                    <ListItem3 propertyName={dataRe} />
                </div>
            </div>

            <div className="allPackages wide">
                <h3>All Inclusive Packages!</h3>
                <ListItem3 propertyName={dataPac} />
            </div>

            <div className="special wide">
                <h3>Honeymoon Freebies Special</h3>
                <ListItem3 propertyName={dataSpec} />
            </div>

        </React.Fragment>
    )
}

export default Categories
