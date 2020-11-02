import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
    return(
        <div>
            <h1>About Me</h1>
            <p>
              Born in Florida before moving to NH at age 10. I originally went to college for Electrical Engineering before giving it up for business but ended up regretting it and am now becoming a coder.
            </p>
            <img src="../T014DSLRTAR-U014LHDDZB7-073cbb3ff7b9-512.jpg" alt = "image" class="img-thumbnail"></img>
            <h5 class="card-title">Fun facts</h5>
            <ul class="card-text">
                <li>Is an Eagle Scout</li>
                <li>Liked the Devil Rays as a Kid</li>
            </ul>
        </div>
    )
}
export default About;