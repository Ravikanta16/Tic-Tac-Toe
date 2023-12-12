import Row from "./Row";
import {useState} from 'react'
export default function Box(){
    const [flag,setflag]=useState(1);
    return(
        <div className="box">
            <Row flag={flag} setflag={setflag}/>
            <Row flag={flag} setflag={setflag}/>
            <Row flag={flag} setflag={setflag}/>
        </div>
    );
}