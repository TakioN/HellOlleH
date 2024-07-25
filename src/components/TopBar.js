import style from '../styles/TopBar.module.css';
import olleh_logo from '../assets/imgs/ollehmark.png';

function TopBar() {
    return (
        <div>
            <div className={`${style.topSpace}`}>
                <img className={`${style.olleh_logo}`} src={olleh_logo} alt='olleh' />
                <a href={''}>{"HellOlleH"}</a>
                <div className={style.nav_buttons}>
                    <button className={`${style.sign}`}>Sign In</button>
                    <button className={`${style.sign}`}>Start For Free</button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;