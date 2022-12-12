import Categories from '~/components/Categories'
import './campingStyles.scss';

import {DB_CA_CAMPING} from "~/assets/API"

function Beaches() {
    return (
        <div>
            <Categories
                dataPop = {DB_CA_CAMPING + "/popular"}
                dataRe = {DB_CA_CAMPING + "/recently"}
                dataPac = {DB_CA_CAMPING + "/allPackage"}
                dataSpec = {DB_CA_CAMPING + "/special"}
            />
        </div>
    )
}
export default Beaches;