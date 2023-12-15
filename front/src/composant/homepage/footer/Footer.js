import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className=''>
  <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="footer">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="footer_menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Doctor</a>
              </li>
              <li>
                <a href="#">Speciality medicale</a>
              </li>
              <li>
                <a href="#">A propos</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_copyright">
            <p>© 2023 Sai. All Rights Reserved.</p>
          </div>
          <div className="footer_profile">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*- END COL */}
      </div>
      {/*- END ROW */}
    </div>
    {/*- END CONTAINER */}
  </div>
</>


    </div>
  )
}

export default Footer
