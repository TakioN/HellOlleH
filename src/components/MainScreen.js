import style from '../styles/MainScreen.module.css';

import TopBar from './TopBar';
import Content from './Content';

function MainScreen() {
    return(
        <div className={`${style.mainScreen}`}>
            <TopBar />
            <Content />
        </div>
    );
}

export default MainScreen;