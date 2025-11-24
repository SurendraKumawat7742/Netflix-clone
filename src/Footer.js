import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (

    <div className="footer">
    <div className="container mt-4 p-5">
      <div className="row mt-5">
        <div className="col-12 mb-5 text-white">
          <h5>Questions? Call <a href="" className="text-white">000-800-919-1743</a></h5>
        </div>

        <div className="col-3 d-flex flex-column">
          <a href="#" className="text-white mb-0">
            FAQ
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Investor Relations
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Privacy
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Speed Test
          </a>
        </div>

        <div className="col-3 d-flex flex-column">
          <a href="#" className="text-white mb-0">
            Help Centre
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Jobs
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Cookie Preferences
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Legal Notices
          </a>
        </div>

        <div className="col-3 d-flex flex-column">
          <a href="#" className="text-white mb-0">
            Account
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Ways to Watch
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Corporate Information
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Only on Netflix
          </a>
        </div>

        <div className="col-3 d-flex flex-column">
          <a href="#" className="text-white mb-0">
            Media Centre
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Terms of Use
          </a>
          <br />
          <a href="#" className="text-white mb-0">
            Contact Us
          </a>
        </div>

        <div className="col-12 mb-5 text-white mt-5">
          <select className="form-select w-auto bg-dark text-white border-light">
            <option value="EN">English</option>
            <option value="ES">Hindi</option>
          </select>
        </div>
        <div className="col-12 mb-4 text-white">
          <p>Netflix India</p>
        </div>
        <div className="col-12 mb-5 text-white">
          <p style={{fontSize:"13px"}}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         <p className="footer-top">
//           Questions? Call <a href="#">000-800-919-1743</a>
//         </p>

//         <div className="footer-links">
//           <ul>
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Investor Relations</a></li>
//             <li><a href="#">Privacy</a></li>
//             <li><a href="#">Speed Test</a></li>
//           </ul>

//           <ul>
//             <li><a href="#">Help Centre</a></li>
//             <li><a href="#">Jobs</a></li>
//             <li><a href="#">Cookie Preferences</a></li>
//             <li><a href="#">Legal Notices</a></li>
//           </ul>

//           <ul>
//             <li><a href="#">Account</a></li>
//             <li><a href="#">Ways To Watch</a></li>
//             <li><a href="#">Corporate Information</a></li>
//             <li><a href="#">Only on Netflix</a></li>
//           </ul>

//           <ul>
//             <li><a href="#">Media Centre</a></li>
//             <li><a href="#">Terms of Use</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>

//         <select className="language-select">
//           <option>English</option>
//           <option>Hindi</option>
//         </select>

//         <p className="netflix-india">Netflix India</p>

//         <p className="captcha-text">
//           This page is protected by Google reCAPTCHA to ensure you're not a bot.
//           <a href="#"> Learn more.</a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
