import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={s.menu_center}>
                <li><a href="#">HOME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACTS</a></li>
            </div>
        </div>
    )
}


export default Navbar