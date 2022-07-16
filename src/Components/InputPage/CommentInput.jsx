import React, { useState } from "react";
import { GetFromApi } from '../../HelperFun/ApiReqHandler';
import { AnalysisUrl } from '../../StaticInfo';
import "../../Styles/SaInput.css";
import BasicOutputContainer from './BasicOutputContainer';
import Spinner from '../unitComponent/Spinner';
import ExtendedOutputGraph from './ExtendedOutputGraph';

export default function CommentInput() {
  const [textAreaData, setTextAreaData] =useState("");
  const [loading, setLoading] = useState(false);
  const [extendedOutput, setExtendedOutput]=useState(false);
  const [resResult,setResResult]=useState({positive:0,negative:0,neutral:0});

  const RunAnalysisHandler=()=>{
    setLoading(true)
    GetFromApi(`${AnalysisUrl}/inputcomment/${textAreaData}`).then(
      (res)=>{ setResResult(res); setLoading(false) }
    ).catch((err)=>console.log(err))
  }
  
  const handleChange = (e) => setTextAreaData(e.target.value)

  return (
      <main className="container">
        <div className="upper-box">

          <p className="headTitle">
            Please Enter your Youtube video's link  for Analysis As shown below
          </p>
          <textarea
            className="textBox"
            value={textAreaData}
            placeholder="Wow, that’s amazing! I’ve never seen a sunset like that before!
            Look at that mountain!"
            onChange={handleChange}
            name="textContent"
          />
          <button className="btn" type="submit" onClick={RunAnalysisHandler}>
            Run Analysis
          </button>
        </div>
        {
          loading ? <Spinner/> : <BasicOutputContainer props={resResult}/>
        }
        
        <button className="btn3" onClick={()=>setExtendedOutput(true)}>See Detailed Analysis</button>
        {
          extendedOutput ? <ExtendedOutputGraph/> : <></>
        }
      </main>
  );
}
