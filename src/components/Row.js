import Cell from "./Cell";
export default function Row({flag,setflag}){
    return(
        <div className="row">
            <Cell flag={flag} setflag={setflag}/>
            <Cell flag={flag} setflag={setflag}/>
            <Cell flag={flag} setflag={setflag}/>
        </div>
    );
}