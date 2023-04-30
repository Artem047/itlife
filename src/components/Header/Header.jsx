import Logo from "../../images/Logo.png"
import s from './Header.module.css'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <div className={s.menu_left}>
                    <img src={Logo} alt="" />
                    <p>ITLIFE</p>
                </div>
                <Navbar />
                <div className={s.menu_right}>
                    <p>CALLBACK</p>
                </div>
            </div>
            <hr />
        </div>
    )
}


export default Header;