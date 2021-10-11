import React,{useState} from 'react';
import Workapi from './Api/workApi';
import "./App.css"

const Work = () => {

    const[Workdata,setWorkdata]=useState(Workapi);

    return (
        <>
        <section>
        <div className=" container work-container">
             <h2 className="main-heading text-center">  How it Works </h2>
                <div className="row">
                  {Workdata.map((element)=>{
                          const {id,logo,tittle,info }=element;
                          return(
                                 <>
                                 <div className="col-12  col-lg-4 work-container-subdiv text-center">
                                     <i class={`fontawesome-style ${logo}`}></i>
                                     <h5 className="sub-heading"> {tittle}</h5>
                                     <p className="workpara"> {info} </p>
                                  </div>
                                  </>
                                )
                              })
                   }
                </div>
        </div>
        </section>
        </>
        )
        };

export default Work;
