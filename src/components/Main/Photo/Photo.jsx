import s from './Photo.module.css'
import Alex from "../../../images/Alex.png"
import Elena from "../../../images/Elena.png"
import Lily from "../../../images/Lily.png"

const Photo = () => {
    return (
        <div>
            <div className={s.photo}>
                <a href="#" className={s.Alex_photo}>
                    <img src={Alex} alt="" />
                </a>
                <a href="#" className={s.Elena_photo}>
                    <img src={Elena} alt="" />
                </a>
                <a href="#" className={s.Lily_photo}>
                    <img src={Lily} alt="" />
                </a>
            </div>
            <div className={s.photo_text}>
                <b>Alex Cutter</b>
                <b>Elena Simpson</b>
                <b>Lily Allen</b>
            </div>
            <div className={s.photo_text_job}>
                <b>Developer</b>
                <b>Artist</b>
                <b>Graphic Designer</b>
            </div>
        </div>
    )
}

export default Photo