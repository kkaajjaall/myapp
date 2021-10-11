import React from 'react'
import"./App.css"

const Header = () => {
    return (
        <>
          <header>
              <section className=" container container-main">
                    <div className="row">
                         <div className="col-8 offset-2 offset-lg-0 col-lg-6 header-left-side  order-lg-first order-last">
                            <h1 className="display-2"> Online payment made<br/> easy for you.</h1>
                             <p class="main-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem itaque molestias quibusdam facilis minima laborum voluptates nesciunt, officiis assumenda.</p>
                             <h3 class="get"> get early assent for yoy </h3>
                              <div className="input-group m-lg-3 ml-1">
                               <input type="text" className="rounded-pill w-75 me-3 p-2" placeholder="Enter your email"></input>
                               <button  type="button" className="now"> Get it now</button>
                              </div>
                        </div>

                    {/* imges */}
                        <div className="col-12 col-lg-6 header-right-side  d-flex" >
                        <img src="./images/pic1.jpg" className="img1"/>
                         <img src="./images/pic7.jpg" className="img2"/>
                       </div>
                     </div>
             </section>
          </header>
        </>
    );
}

export default Header;
