import React from 'react';
import "./more.css";

function More() {
    return (
        <>
            <div className="more" style={{backgroundColor:"black", color:"white"}}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h3>More reasons to join</h3>
                        </div>

                        <div className="col-3 card">
                            <h1>Enjoy on your TV</h1>
                            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                        <div className="col-3 card">
                            <h1>Download your shows to watch offline</h1>
                            <p>Save your favourites easily and always have something to watch.</p>
                        </div>
                        <div className="col-3 card">
                            <h1>Watch everywhere</h1>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default More;