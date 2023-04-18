import s from './Footer.module.css'
import Logo from "../../images/Logo.png"
import twitter from "../../images/twitter.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import telegram from "../../images/telegram.png"




const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
                <div className={s.footer_logo}>
                    <img src={Logo} alt="" />
                    <p>ITLIFE</p>
                </div><br /><br />
                <div className={s.footer_select}>
                    <a href="#">HOME</a>
                    <a href="#">SERVICES</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACTS</a>
                </div>
                <div className={s.footer_icon}>
                    <a href="#" className={s.twit_ico}>
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#" className={s.face_ico}>
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#" className={s.inst_ico}>
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#" className={s.link_ico}>
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="#" className={s.tg_ico}>
                        <img src={telegram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;