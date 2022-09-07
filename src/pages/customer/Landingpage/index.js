import React from "react";
import Grid from "@mui/material/Grid";

function LandingPage() {
  return (
    <>
      <nav>
        <Grid className="backImage-wrapper" container spacing={2}>
          <Grid className="logo-wrapper" item xs={6} sm={8}>
            <p>BASH</p>
          </Grid>
          <Grid className="navBar" item xs={6} sm={4}>
            <ul>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="" >
                  Sign in
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <div className="text-wrapper">
              <h1>Get out there with friends</h1>
              <p className="text-slate-500">Join, create and share events</p>
            </div>
            <div className="button-wrapper">
              <button className="btn-header-download">Download</button>
            </div>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </nav>

      {/* Grid 2 hero section image */}
      <Grid container spacing={2}>
        <Grid className="grid-2" item xs={12}>
          <div className="hero-image-wrapper">
            <img
              src="https://img.freepik.com/free-vector/abstract-business-cover-collection-with-geometrical-shapes_52683-56753.jpg?w=900&t=st=1662462973~exp=1662463573~hmac=a4a74ac5e833ccd75184ba12bd76eb690bd898ea7e74a4f44ff376c282fd9d82"
              alt=""
            />
          </div>
        </Grid>
      </Grid>

{/* Grid 3 text and button */}
      <Grid container spacing={2}>
        <Grid  item xs={12}>
          <div className="grid-3-wrapper">
            <p>
              Explore events and show your friends where you’d like to go. Join
              events or create your own, invite others and use the chat to plan.
            </p>
            <button className="btn-download-2 btn-download-common">download</button>
          </div>
        </Grid>
      </Grid>

{/* Mobile Image Grid-4 with text on right  */}
      
      <Grid className="mobile-grid-4" container spacing={2}>
        <Grid className="mobile-sub-grid" item xs={12} sm={12} md={5} lg={5}>
          <div className="mobile-image-wrapper">
          <img src="https://img.freepik.com/free-psd/smartphone-mockup-front-view_1332-2924.jpg?w=360&t=st=1662464600~exp=1662465200~hmac=117de3d8808671affc3b9133379b8f12f4dd1002ec47f4e9a3face08979c4d6b" alt="" />
          </div>
        </Grid>
        <Grid className="grid-4-text-wrapper heading-text-wrapper para-text-wrapper" item xs={12} sm={12} md={7} lg={7}>
          <div>
          <h1>Join your friends</h1>
          <p>
See what your friends are up to and join them. The <br></br>BASH feed is designed to get you offline ASAP.</p>
<button className="btn-download-common hide-button">Download</button>
          </div>
          </Grid>
      </Grid>

      {/* Mobile Image Grid-5 with text on left */}
      <Grid className="mobile-grid-5" container spacing={2}>
       
        <Grid className="grid-5-text-wrapper heading-text-wrapper para-text-wrapper" item xs={12} sm={12} md={6} lg={7}>
          <div>
          <h1>Make it happen</h1>
         <p>The calendar gives you a clear overview of everything<br></br>
         that's coming up. The event chat makes sure you keep<br></br>
         all the information in one place.
         </p>
<button className="btn-download-common hide-button">Download</button>
          </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
          <div className="mobile-2-image-wrapper">
          <img src="https://img.freepik.com/free-psd/smartphone-mockup-front-view_1332-2924.jpg?w=360&t=st=1662464600~exp=1662465200~hmac=117de3d8808671affc3b9133379b8f12f4dd1002ec47f4e9a3face08979c4d6b" alt="" />
          </div>
        </Grid>
      </Grid>

            {/* Mobile Image Grid-6 with text on right */}

      <Grid className="mobile-grid-6" container spacing={2}>
        <Grid className="mobile-sub-grid" item xs={12} sm={12} md={6} lg={5}>
          <div className="mobile-image-wrapper">
          <img src="https://img.freepik.com/free-psd/smartphone-mockup-front-view_1332-2924.jpg?w=360&t=st=1662464600~exp=1662465200~hmac=117de3d8808671affc3b9133379b8f12f4dd1002ec47f4e9a3face08979c4d6b" alt="" />
          </div>
        </Grid>
        <Grid className="grid-6-text-wrapper heading-text-wrapper para-text-wrapper" item xs={12} sm={12} md={6} lg={5}>
          <div className="btn-hover">
          <h1>Include Everyone</h1>
          <p>
          Are not all your friends on BASH yet? No problem, they <br></br>can join your event via the link without creating an.<br></br></p>
<button className="btn-download-common hide-button ">Download</button>
          </div>
          </Grid>
      </Grid>

      {/* Footer */}
      <footer>
        <Grid className="" container spacing={2}>
         
          <Grid item xs={12}>
            <div className="grid-7-text-wrapper">
              <h1>Go for it</h1>
            </div>
            <div className="button-wrapper">
              <button className="btn-download-common">Download</button>
            </div>
          </Grid>
          <Grid item xs={8}>
          </Grid>
          <Grid className="footer" item xs={12}>
            <ul>
              <li>
                <a href="">jobs</a>
              </li>
              <li>
                <a href="" >
                 privacy
                </a>
              </li>
              <li>
                <a href="" >
                 Terms and Condition
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default LandingPage;
