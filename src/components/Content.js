import { useNavigate } from 'react-router-dom';

import style from '../styles/Content.module.css';

import doorImage from '../assets/imgs/doorImage.png';
// import trophy from '../assets/imgs/trophy.png';
import footprint from '../assets/imgs/footprint.png';
import fullJeju from '../assets/imgs/fullJeju.png';
import ollepass from '../assets/imgs/ollepass.png';

function Content() {

    const navigate = useNavigate();

    const gotoPass = () => {
        window.open('https://www.ollepass.org/?_gl=1*qxd21m*_gcl_au*MjAxODI2MzgxNC4xNzIxNDg5OTA0*_ga*MTE2MDgxMDI5My4xNzIxNDg5OTA1*_ga_V6FDLS8ZYJ*MTcyMzAzNjUwOC44LjAuMTcyMzAzNjUwOC42MC4wLjA.');
    }

    const gotoRoute = () => {
        navigate('/olleroute');
    }

    const gotoRecord = () => {
        navigate('/record');
    }

    return(
        <div style={{width: '1200px', margin: '0 auto'}}>
            <div className='olle_image' style={{paddingTop: '25px'}}>
                <img style={{width: '840px', height: '400px'}} src={doorImage} alt=''></img>
            </div>
            <div className={`${style.items}`}>
                <div className={`${style.select_grid}`} style={{borderBottom: '1px dotted gray'}}>
                    <p style={{fontFamily: 'dokdo', fontSize: '40px', cursor: 'pointer'}} onClick={gotoRecord}>내 기록 확인</p>
                    <img src={footprint} style={{width: '50%', height: '70%', cursor: 'pointer'}} alt='' />
                </div>
                <div style={{gridRow: '1/3', gridColumn: '2/3', display: 'flex', alignItems: 'center', padding: '0 20px'}}>
                    <div className={`${style.startBtn}`}>
                        Start <br />Olle
                    </div>
                </div>
                <div className={`${style.select_grid}`} style={{borderBottom: '1px dotted gray', justifyContent: 'center'}}>
                    <p style={{fontFamily: 'dokdo', fontSize: '35px'}}>Coming Soon</p>
                </div>
                <div className={`${style.select_grid}`} style={{marginTop: '10px'}}>
                    <p style={{fontFamily: 'dokdo', fontSize: '35px', cursor: 'pointer'}} onClick={gotoRoute}>올레 둘러보기</p>
                    <img src={fullJeju} style={{width: '50%', height: '70%', cursor: 'pointer'}} onClick={gotoRoute} alt='' />
                </div>
                <div className={`${style.select_grid}`} style={{marginTop: '10px'}}>
                    <p style={{fontFamily: 'dokdo', fontSize: '35px', cursor: 'pointer'}} onClick={gotoPass}>올레패스</p>
                    <img src={ollepass} style={{width: '50%', height: '70%', cursor: 'pointer'}} onClick={gotoPass} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Content;