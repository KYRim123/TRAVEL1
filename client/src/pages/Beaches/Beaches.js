import Categories from '~/components/Categories'
import './beachesStyles.scss';

import {DB_BEACH_POP, DB_RE_VIEW, DB_PACKAGES,DB_SPECIAL} from "~/assets/API"

function Beaches() {
    return (
        <div>
            <Categories
                dataPop = {DB_BEACH_POP}
                dataRe = {DB_RE_VIEW}
                dataPac = {DB_PACKAGES}
                dataSpec = {DB_SPECIAL}
            />
        </div>
    )
}
export default Beaches;