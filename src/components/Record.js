import TopBar from "./TopBar";

import trophy from '../assets/imgs/trophy.png';
import grayTrophy from '../assets/imgs/grayTrophy.png';

function Record() {

    const OLLENAME = ['1', '1-1', '2', '3-A', '3-B', '4', '5', '6', '7', '7-1', '8', '9', '10', '10-1', '11', '12', '13', '14', '14-1', '15-A', '15-B', '16', '17', '18', '18-1', '18-2', '19', '20', '21'];

    const renderTrophy = () => 
        OLLENAME.map(route => (
            <div>
                <img src={grayTrophy} alt='' />
                <p style={{fontFamily: 'hallasan'}}>{`Course ${route}`}</p>
                <p style={{marginTop: '10px', fontFamily: 'hallasan'}}>---</p>
            </div>
        ))
    

    return (
        <div>
            <TopBar />
            <div style={{width: '1080px', margin: '10px auto'}}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', placeItems: 'center', rowGap: '17px' }}>
                    {renderTrophy()}
                </div>
            </div>

        </div>
    );
}

export default Record;