import Logo from "../images/Logo.png"

const Header = () => {
    return (
        <div>
            <div className="header">
                <ul className="menu_left">
                    <img src={Logo} alt="" />
                    <p>ITLIFE</p>
                </ul>
                <ul className="menu_center">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
                <ul className="menu_right">
                    <p>CALLBACK</p>
                </ul>
            </div>
        </div>
    )
}


export default Header;