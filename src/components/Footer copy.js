import React from 'react';
import { BrowserRouter as Router, Link , useNavigate } from 'react-router-dom';

function Footer() {
  // const navigate = useNavigate();
  const handleClick = (routes) => {
    console.log(routes)
    // navigate(rou)
  }
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer_blog">
            <div className="row">
              <div className="col-lg-5">
                <h2>Picground</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex purus, pharetra vel eleifend nec, consequat eu urna. Quisque ligula nisl, ullamcorper vitae felis id, fermentum ultricies ligula.</p>
                <ul className="social-list">
                  <li><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.76776 4.63119H11.7836V1.12033C11.4358 1.07249 10.2397 0.964844 8.8468 0.964844C5.9404 0.964844 3.94944 2.79296 3.94944 6.15294V9.24518H0.742188V13.1701H3.94944V23.0457H7.88168V13.171H10.9592L11.4477 9.2461H7.88076V6.54211C7.88168 5.40771 8.18713 4.63119 9.76776 4.63119Z" fill="white" /></svg></li>
                  <li><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3382 1.96777H8.21146C4.91564 1.96777 2.23438 4.64904 2.23438 7.94486V18.0717C2.23438 21.3674 4.91564 24.0486 8.21146 24.0486H18.3383C21.634 24.0486 24.3152 21.3674 24.3152 18.0717V7.94486C24.3152 4.64904 21.634 1.96777 18.3382 1.96777ZM23.0208 18.0717C23.0208 20.6536 20.9202 22.7542 18.3382 22.7542H8.21146C5.62942 22.7542 3.52885 20.6536 3.52885 18.0717V7.94486C3.52885 5.36282 5.62942 3.26225 8.21146 3.26225H18.3383C20.9202 3.26225 23.0208 5.36282 23.0208 7.94486V18.0717Z" fill="white" stroke="white" strokeWidth="0.5" />
                    <path d="M13.2641 6.96875C9.93495 6.96875 7.22656 9.67714 7.22656 13.0063C7.22656 16.3355 9.93495 19.0439 13.2641 19.0439C16.5933 19.0439 19.3017 16.3355 19.3017 13.0063C19.3017 9.67714 16.5933 6.96875 13.2641 6.96875ZM13.2641 17.7494C10.6489 17.7494 8.52104 15.6217 8.52104 13.0063C8.52104 10.3911 10.6489 8.26322 13.2641 8.26322C15.8795 8.26322 18.0072 10.3911 18.0072 13.0063C18.0072 15.6217 15.8795 17.7494 13.2641 17.7494Z" fill="white" stroke="white" strokeWidth="0.3" />
                    <path d="M19.4481 4.8252C18.4643 4.8252 17.6641 5.62557 17.6641 6.60922C17.6641 7.59305 18.4643 8.39342 19.4481 8.39342C20.4319 8.39342 21.2323 7.59305 21.2323 6.60922C21.2323 5.6254 20.4319 4.8252 19.4481 4.8252ZM19.4481 7.09878C19.1782 7.09878 18.9585 6.8791 18.9585 6.60922C18.9585 6.33918 19.1782 6.11967 19.4481 6.11967C19.7181 6.11967 19.9378 6.33918 19.9378 6.60922C19.9378 6.8791 19.7181 7.09878 19.4481 7.09878Z" fill="white" />
                  </svg>
                  </li>
                  <li><svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.534 2.16004C21.7129 2.52023 20.8379 2.75898 19.9257 2.87491C20.8642 2.31461 21.5804 1.43413 21.9171 0.372867C21.0422 0.894528 20.0761 1.263 19.0466 1.46863C18.2158 0.584015 17.0317 0.0361328 15.74 0.0361328C13.2338 0.0361328 11.2162 2.07034 11.2162 4.5641C11.2162 4.92291 11.2465 5.26793 11.3211 5.59638C7.55766 5.41283 4.22758 3.6091 1.99051 0.861407C1.59995 1.53901 1.37086 2.31461 1.37086 3.14954C1.37086 4.71728 2.1782 6.107 3.3816 6.91157C2.65431 6.89777 1.94083 6.68663 1.33636 6.35403C1.33636 6.36783 1.33636 6.38577 1.33636 6.40371C1.33636 8.60352 2.90549 10.4307 4.96315 10.8516C4.59467 10.9524 4.19308 11.0007 3.7763 11.0007C3.48649 11.0007 3.19392 10.9841 2.91929 10.9234C3.50581 12.7161 5.17016 14.034 7.14916 14.0768C5.60902 15.2816 3.65348 16.0075 1.53647 16.0075C1.16523 16.0075 0.80918 15.991 0.453125 15.9454C2.45835 17.2385 4.8348 17.9769 7.39757 17.9769C15.7276 17.9769 20.2818 11.0766 20.2818 5.09542C20.2818 4.89531 20.2749 4.7021 20.2652 4.51028C21.1636 3.87269 21.9185 3.0764 22.534 2.16004Z" fill="white" />
                  </svg>
                  </li>
                  <li><svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_362_475)">
                      <path d="M22.7183 23.0461V23.0452H22.7238V14.947C22.7238 10.9854 21.871 7.93359 17.2395 7.93359C15.013 7.93359 13.5189 9.1554 12.9089 10.3137H12.8445V8.30345H8.45312V23.0452H13.0257V15.7456C13.0257 13.8237 13.39 11.9652 15.7702 11.9652C18.1154 11.9652 18.1503 14.1586 18.1503 15.8689V23.0461H22.7183Z" fill="white" />
                      <path d="M1.00781 8.30273H5.58592V23.0445H1.00781V8.30273Z" fill="white" />
                      <path d="M3.29999 0.964844C1.83621 0.964844 0.648438 2.15261 0.648438 3.61639C0.648438 5.08017 1.83621 6.29278 3.29999 6.29278C4.76377 6.29278 5.95154 5.08017 5.95154 3.61639C5.95062 2.15261 4.76285 0.964844 3.29999 0.964844V0.964844Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_362_475">
                        <rect width="22.0809" height="22.0809" fill="white" transform="translate(0.648438 0.964844)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="otherlinks_blog">
                  <h5>Other Links</h5>
                  <Router>
                    <ul>

                      <Link to="/termscondition">
                      <li onClick={() => handleClick("/termscondition")}>Terms & Conditions</li>
                      </Link>
                      {/* <Link to="/privacypolicy"> */}
                      <li onClick={() => handleClick("/privacypolicy")}>Privacy Policy</li>
                      {/* </Link> */}
                      <li>Company</li>
                      <li>Case Studies</li>
                    </ul>
                  </Router>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contactus_blog">
                  <h5>Contact Us</h5>
                  <ul>
                    <li><b>Phone Number</b> : +94 000 00000 </li>
                    <li><b>Email Address</b> : Picground@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <span>© All rights reserved by Picground</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer