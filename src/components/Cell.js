export default function Cell(){
    const handlecell=()=>{
        console.log("Hello");
    }
    return(
        <div className="cell" onClick={handlecell}>Hello</div>
    );
}