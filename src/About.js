import React,{useState} from 'react'
import AboutApi from"./Api/AboutApi";
import "./App.css"

const About = () => {
  const [aboutdata, setaboutdata] = useState(AboutApi)
    return (

    <section className="common-section our services">
       <div className="container about-container mb-5">
            <div className="row">
                 <div className="col-lg-4 col-8 offset-1 offset-lg-0 about-image">
                 <img className="hii" 
                      src="./images/pic4.jpg" 
                      width="300px" 
                      height="550">
                 </img>
                 </div>

                 <div className="col-lg-8 col-12  offset-lg-0 about-data">
                 <h6 className="h6style">---  AVALABLE @ GOOGLE AND IOS APP STORE ONLY</h6>
                 <h3 className="main-heading"> How to used the APP ?</h3>

                  {/* map  function */}
                   {aboutdata.map((element)=>{
                       const{id,tittle,info}=element;
                       return(
                       <>
                       <div className="row">
                       <div className="col-1 about-number">{id}</div>  
                          <div className="col-10 about-services"> 
                          <h5 className="sub-heading"> {tittle} </h5>
                           <p className="about-para"> {info} </p>
                           </div>
                        </div>
                        </>)
                   })}
                  {/* map function end */}
                  <br/>
                   <button className="btn"> Learn more</button>
             </div>
          </div>
    {/* 1st portion end================== */}
    {/* 2nd portion start================ */}

    <div className="row secondpart">
      <div className="col-lg-8 col-10 about-data2 ml-0 pl-0 mt-0 ">
               <h6 className="h6style">---  SUPPORT IN ANY LANGUAGES</h6>
               <h3 className="main-heading"> World class support is<br/> avilable 24/7</h3>

               {/* map  function */}
               {aboutdata.map((element)=>{
                const{id,tittle,info}=element;
                return(
                <>
                 <div className="row">
                  <div className="col-1 about-number">{id}</div>  
                  <div className="col-10 about-services"> 
                  <h5 className="sub-heading"> {tittle} </h5>
                  <p className="about-para"> {info} </p>
                  </div>
                 </div>
                </>)
                   }) }
               {/* map function end */}
               <br/>
               <button className="btn"> Learn more</button>
             </div>
          
             <div className="col-lg-4 col-10 offset-lg-0  offset-1 order-first order-lg-last about-image2">
                <img className="hii"src="./images/pic9.jpg" width="300px" height="550px"></img>
             </div> 
    </div>
    </div>
</section>
    )
}

export default About;

