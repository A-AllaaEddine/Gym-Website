import React from "react";
import './homepage.styles.scss';

const HomePage = ({ history}) => (
    <div className="homepage">
        <div className="banner">
            <h1 className="text">
                BE <span className='strong'>STRONG</span><br/> 
                TRAIN HARD
            </h1>
            <button className="get-info" onClick={() => history.push('/join')}>JOIN NOW</button>
        </div>
    </div>
)

export default HomePage;