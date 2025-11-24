// import React from 'react';

// function Movies() {
//     return (
//         <>
//             <div className="movies" style={{backgroundColor:"black", color:"white"}}>
//                 <div className="container p-5">
//                     <div className="row">
//                         <div className="col-12">
//                             <h3>Trending Now</h3>
//                         </div>

//                         <div className=" img col-4 mb-5">
//                             <img src="/images/m1.jpg" />
//                         </div>
//                         <div className="img col-4">
//                             <img src="/images/m2.jpg" />
//                         </div>
//                         <div className="img col-4">
//                             <img src="/images/m3.jpg" />
//                         </div>
//                         <div className="img col-4">
//                             <img src="/images/m4.jpg" />
//                         </div>
//                         <div className="img col-4">
//                             <img src="/images/m5.jpg" />
//                         </div>
//                         <div className="img col-4">
//                             <img src="/images/m6.jpg" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Movies;




import React from 'react';

function Movies() {

    // All inline styles here
    const styles = {
        imgBox: {
            overflow: "hidden",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
        },

        img: {
            width: "100%",
            height: "250px",
            borderRadius: "10px",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
        }
    };

    // Hover functions
    const handleHover = (e) => {
        e.currentTarget.style.transform = "scale(1.15)";
    };

    const handleLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    return (
        <>
            <div className="movies" style={{ backgroundColor: "black", color: "white" }}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h3>Trending Now</h3>
                        </div>

                        {["m1", "m2", "m3", "m4", "m5", "m6"].map((img, i) => (
                            <div className="col-4 mb-4" key={i}>
                                <div
                                    style={styles.imgBox}
                                >
                                    <img
                                        src={`/images/${img}.jpg`}
                                        style={styles.img}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleLeave}
                                    />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
