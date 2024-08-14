import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar';
import style from '../styles/AllRoute.module.css';

import map1_1 from '../assets/imgs/map1-1.png';
import map1_1_hover from '../assets/imgs/map1-1_hover.png';

function AllRoute() {

    const OLLENUM = 29;
    const OLLENAME = ['1', '1-1', '2', '3-A', '3-B', '4', '5', '6', '7', '7-1', '8', '9', '10', '10-1', '11', '12', '13', '14', '14-1', '15-A', '15-B', '16', '17', '18', '18-1', '18-2', '19', '20', '21'];

    const navigate = useNavigate();
    
    const routeImg = useRef();
    const routep = useRef();

    const [hoverIdx, setHoverIdx] = useState(-1);

    const renderroutes = () => {
        let routediv = [];
        for (let i = 0; i < OLLENUM; i++) {
            routediv.push((
                <div key={i} className={i === hoverIdx ? `${style.hoverDiv}` : ''}>
                    <img
                        className={`${style.routeImage}`}
                        src={i === hoverIdx? map1_1_hover : map1_1} alt=''
                        ref={routeImg}
                        onMouseOver={() => { setHoverIdx(i) }}
                        onMouseOut={() => { setHoverIdx(-1) }}
                        onClick={() => {gotoCourse(OLLENAME[i])}}
                    />
                    <p
                        className={`${style.routeName}`}
                        style={{ fontFamily: 'hallasan' }}
                        ref={routep}
                        onMouseOver={() => { setHoverIdx(i) }}
                        onMouseOut={() => { setHoverIdx(-1) }}
                        onClick={() => {gotoCourse(OLLENAME[i])}}
                    >
                        {`${OLLENAME[i]}코스`}
                    </p>
                </div>
            ))
        }
        return routediv;
    }

    const gotoCourse = course => {
        navigate(`/course?${course}`);
    }

    return (
        <div>
            <TopBar />
            <div style={{ width: '1080px', margin: '20px auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: '2px dashed orangered' }}>
                {renderroutes()}
            </div>
        </div>
    );
}

export default AllRoute;