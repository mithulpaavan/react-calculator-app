import React,{useContext} from 'react'
import { appContext } from '../App';

const Input = () => {
    const {Inputdata, doneOperation} = useContext(appContext);
    return ( 
        <>
            <div className="input-container">
                <div className="small-display">{doneOperation}</div>
                <div className="big-display">{Inputdata}</div>
            </div>      
        </>
     );
}
 
export default Input;