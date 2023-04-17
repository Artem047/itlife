import s from './Main.module.css'
import Photo from './Photo/Photo'

const Main = () => {
    return (
        <div>
            <div className={s.main}>
                <div>
                    <h1>WHO WE ARE</h1><br />
                    <hr width="40" size="5" color="#DDDBDB" /><br /><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, cupiditate architecto? Quos eligendi cupiditate est labore at itaque repudiandae consectetur ad dolorem neque dolorum tenetur, repellendus dolor voluptatem ex modi.</p>
                </div>
                <Photo />
            </div>
        </div>

    )
}


export default Main;