import React,{useState} from 'react'
import Money from "./Api/MoneyApi"
import"./App.css"


const Mone = () => {
    const[paisa,setpaisa]= useState(Money);
    return (

     <section className="money-section mb-5">
      <div className="container money-container">
         <h2 className="main-heading text-center"> How to send Money </h2>
        <div className="row mt--lg-3">
         { paisa.map((element)=>{
             const{logo,tittle,info}=element
             return(
                 <>
                <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <i className={`fontawesome-style ${logo} ` }></i>
                    <h4 className="sub-heading  "> {tittle}</h4>
                    <p className="para "> {info}</p>

                </div>

                 </>
             )
         })
   
         }
         </div>
     </div>

     </section>  
    )
}

export default Mone;
