import Categories from '~/components/Categories'
import './beachesStyles.scss';

import {DB_CA_BEACHES} from "~/assets/API"

function Beaches() {
    return (
        <div>
            <Categories
                dataPop = {DB_CA_BEACHES + "/popular"}
                dataRe = {DB_CA_BEACHES + "/recently"}
                dataPac = {DB_CA_BEACHES + "/allPackage"}
                dataSpec = {DB_CA_BEACHES + "/special"}
            />
        </div>
    )
}
export default Beaches;