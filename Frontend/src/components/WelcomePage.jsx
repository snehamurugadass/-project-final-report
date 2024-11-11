import React from 'react';

function WelcomePage() {
    return (
        <div className="welcome-container">
            <div className="text-content">
                <h1>Smarter Than Your Average Shopping List</h1>
                <p>Learn more about our convenient and time-saving features</p>
            </div>
            <div className="image-overlay">
                <img src={"https://tse2.mm.bing.net/th?id=OIP.uqFcVfYtJNS-rqDdcW7AfwHaES&pid=Api&P=0&h=180"} alt="Shopping List App"  style={{width:"1500px",height:"500px"}}/>
            </div>
        </div>
    );
}



export default WelcomePage;

