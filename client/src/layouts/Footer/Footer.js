import './FooterStyles.scss';

import icons from '~/assets/icons'

function Footer() {
   return  <div className="footer">
        <div className="footer__container wide">
            <div className="footer__logo">Travel</div>
            <div className="footer__container--partner">
                <div className="footer__partner--link">
                    <div className="partner__col1">
                        <a href="/">Seslendirme ve Alt Jazz</a>
                        <a href="/">Media Market</a>
                        <a href="/">Gillie</a>
                        <a href="/">Size Last</a>
                    </div>
                    <div className="partner__col1">
                        <a href="/">Self Betimes</a>
                        <a href="/">Yatırımcı İlişkileri</a>
                        <a href="/">Basal Himmler</a>
                    </div>
                    <div className="partner__col1">
                        <a href="/">Yard Market</a>
                        <a href="/">Is İmkanları</a>
                        <a href="/">Car Tercihleri</a>
                    </div>
                    <div className="partner__col1">
                        <a href="/">Hedge Karla</a>
                        <a href="/">Mullein Koşulları</a>
                        <a href="/">Autumnal Bulgier</a>
                    </div>
                </div>
            
                <div className="footer__container--link">
                    <span>9/2022 by Nguyen Thanh Luong</span>
                    <div className="footer__container--link--item">
                        <a href="/">
                            <img src={icons.facebook} alt="" />
                        </a>
                        <a href="/">
                            <img src={icons.instagram} alt="" />
                        </a>
                        <a href="/">
                            <img src={icons.twitter} alt="" />
                        </a>
                        <a href="/">
                            <img src={icons.youtube} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
   </div>
}

export default Footer;