import { useState } from "react";

export default function Cell({flag,setflag}){
    const [child,setChild]=useState(null)
    function handlecell(){
        if(child!==null){
            alert("choose another cell");
            return;
        }
        if(flag%2===0 && flag<=9){
            setChild(0);
            setflag(flag+1);
        }
        else if(flag%2!==0 && flag<=9){
            setChild("*");
            setflag(flag+1);
        }
    }
    return(
        <div className="cell" onClick={handlecell}>
            <h1>{child}</h1>
        </div>
    );
}