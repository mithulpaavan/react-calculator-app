import React,{useContext} from 'react'
import { appContext } from '../App';

const Buttons = () => {
    let {Inputdata, setInputdata, setdoneOperation} = useContext(appContext);

    const calculate = (input) => {
        setdoneOperation("");

        try{
            const answer = eval(input);

            setInputdata(answer);

            setdoneOperation(input);
        }
        catch(err){
            alert("please type correctly");
        }
    }

    return ( 
        <>
        <div className="button-container">
            <button className="ac" onClick={()=>{setInputdata(""); setdoneOperation("")}}>AC</button>
            <button className="del" onClick={()=>{setInputdata(Inputdata.slice(0,-1))}}>DEL</button>
            <button className="percentage" onClick={()=>{setInputdata(Inputdata+="//")}}>%</button>
            <button className="plus" onClick={()=>{setInputdata(Inputdata+="+")}}>+</button>
            <button className="7" onClick={()=>{setInputdata(Inputdata+="7")}}>7</button>
            <button className="8" onClick={()=>{setInputdata(Inputdata+="8")}}>8</button>
            <button className="9" onClick={()=>{setInputdata(Inputdata+="9")}}>9</button>
            <button className="minus" onClick={()=>{setInputdata(Inputdata+="-")}}>-</button>
            <button className="4" onClick={()=>{setInputdata(Inputdata+="4")}}>4</button>
            <button className="5" onClick={()=>{setInputdata(Inputdata+="5")}}>5</button>
            <button className="6" onClick={()=>{setInputdata(Inputdata+="6")}}>6</button>
            <button className="multiply" onClick={()=>{setInputdata(Inputdata+="*")}}>*</button>
            <button className="3" onClick={()=>{setInputdata(Inputdata+="3")}}>3</button>
            <button className="2" onClick={()=>{setInputdata(Inputdata+="2")}}>2</button>
            <button className="1" onClick={()=>{setInputdata(Inputdata+="1")}}>1</button>
            <button className="division" onClick={()=>{setInputdata(Inputdata+="/")}}>/</button>
            <button className="0" id='zero' onClick={()=>{setInputdata(Inputdata+="0")}}>0</button>
            <button className="dot" onClick={()=>{setInputdata(Inputdata+=".")}}>.</button>
            <button className="equalto" onClick={()=>{calculate(Inputdata)}}>=</button>
        </div>
        </>
     );
}
 
export default Buttons;