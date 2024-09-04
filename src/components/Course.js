import { useNavigate } from "react-router-dom";

import TopBar from "./TopBar";
import route1 from "../assets/imgs/route1.png";

function Course() {

    const OLLENAME = ['1', '1-1', '2', '3-A', '3-B', '4', '5', '6', '7', '7-1', '8', '9', '10', '10-1', '11', '12', '13', '14', '14-1', '15-A', '15-B', '16', '17', '18', '18-1', '18-2', '19', '20', '21'];

    const navigate = useNavigate();

    const renderRoutes = () => {
        return OLLENAME.map((route) => (
            <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'hallasan', fontSize: '25px', borderRight: '1px solid orange', borderBottom: '1px solid orange', cursor: 'pointer' }}
                onClick={() => { gotoCourse(route) }}
            >
                {`# ${route}`}
            </div>
        ))
    }

    const gotoCourse = course => {
        navigate(`/course?${course}`);
    }

    return (
        <div>
            <TopBar />
            <div style={{width: '1080px', margin: '0 auto 30px'}}>
                <nav style={{ height: '300px', display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', borderTop: 'orange 1px solid', borderLeft: '1px solid orange', marginTop: '30px' }}>
                    {renderRoutes()}
                </nav>
                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={route1} alt='' />
                    <article style={{ maxWidth: '866px', fontSize: '13px', marginTop: '30px', lineHeight: '1.7em', fontFamily: 'Pretendard, sans-serif', border: '1px dotted blue', borderRadius: '12px', padding: '20px'}}>
                        {"제주올레에서 가장 먼저 열린 길. 오름과 바다가 이어지는 '오름-바당 올레'다. 푸른 들을 지나 말미오름과 알오름에 오르면 성산일출봉과 우도, 조각보를 펼쳐놓은 듯한 들판과 바다가 한눈에 보인다. 검은 돌담을 두른 밭들이 옹기종기 붙어 있는 들판의 모습은 색색의 천을 곱게 기워 붙인 한 장의 조각보처럼 아름답다. 종달리 소금밭을 거쳐 시흥리 해안도로를 지나 수마포 해변에서 다시금 성산일출봉이 눈앞에 펼쳐진다. 길이 끝나는 광치기 해변의 물빛과 이끼 낀 높낮이가 다른 너럭 바위가 신비로움을 자아낸다."}
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Course;