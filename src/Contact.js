import React,{useState} from 'react'
import "./App.css"

const Contact = () => {
  const submit=()=>
  {
    alert("thank you!!!")
  }
    return (
        <>
          <section>
              <div className="container m-5 p-5">
                  <div className="row">
                  <div className="col-lg-4 col-12 ml-lg=5  contact-data ">
                   <h1 className="main-heading"> Connect to our<br/> service team</h1>
                   <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore sint nulla sunt.</p>
                   <img className="contact-img" src="./images/pic5.jpg" width="250px" height="250px"></img>
                   </div>
           

                  <div className="col-lg-8 col-10 w-80% ">
                    <form method="POST" className="form-control ">
                     Name:<br/><input type="text" className="ip" placeholder="first name" /><br/><br/>
                     Email:<br/><input type="text" className="ip" placeholder="email"/><br/><br/>
                     Password: <br/> <input type="password" className="ip"  password="" placeholder="password"/><br/><br/>
                     Phone no:  <br/><input type="number"className="ip"   phone=""placeholder="phone number"/> <br/> <br/>
                     Address:  <br/> <input type="text"className="ip"   Address=""placeholder="Add address"/> <br/><br/>
                     Massage:  <br/> < input type="text" className="ip"  placeholder="Enter your massage"/><br/><br/>
                    <input class="form-check-input"    type="checkbox" value="" id="flexCheckChecked" checked/>
                     <label class="form-check-label" for="flexCheckChecked">
                     <h6> I agreey that all terms and condition of kajalpay.</h6>
                    </label> <br/> <br/>
                    <button className="btn" onClick={submit}> Submit </button>
                   </form>
                   </div>
                  </div>
              </div>
          </section>
        </>
    );
}

export default Contact;
