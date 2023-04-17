import s from './Main.module.css'
import Alex from "../../images/Alex.png"
import Elena from "../../images/Elena.png"
import Lily from "../../images/Lily.png"

const Main = () => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.text_name}>
                    <h1>WHO WE ARE</h1><br />
                    <hr width="40" size="5" color="#DDDBDB" /><br /><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, cupiditate architecto? Quos eligendi cupiditate est labore at itaque repudiandae consectetur ad dolorem neque dolorum tenetur, repellendus dolor voluptatem ex modi.</p>
                </div>
                <div>
                    <ul className={s.photo}>
                        <a href="#" className={s.Alex_photo}>
                            <img src={Alex} alt="" />
                        </a>
                        <a href="#" className={s.Elena_photo}>
                            <img src={Elena} alt="" />
                        </a>
                        <a href="#" className={s.Lily_photo}>
                            <img src={Lily} alt="" />
                        </a>
                    </ul>
                    <ul className={s.photo_text}>
                        <b>Alex Cutter</b>
                        <b>Elena Simpson</b>
                        <b>Lily Allen</b>
                    </ul>
                    <ul className={s.photo_text_job}>
                        <b>Developer</b>
                        <b>Artist</b>
                        <b>Graphic Designer</b>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Main;