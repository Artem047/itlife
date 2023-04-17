import Logo from "../../images/Logo.png"
import s from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <ul className={s.menu_left}>
                    <img src={Logo} alt="" />
                    <p>ITLIFE</p>
                </ul>
                <ul className={s.menu_center}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
                <ul className={s.menu_right}>
                    <p>CALLBACK</p>
                </ul>
            </div>
            <hr />
        </div>
    )
}


export default Header;