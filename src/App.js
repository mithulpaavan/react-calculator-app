import React,{useState,createContext} from 'react'
import Input from './components/input';
import Buttons from './components/buttons';

export const appContext = createContext(null);

function App() {

  const [Inputdata, setInputdata] = useState("");
  const [doneOperation, setdoneOperation] = useState("");

  return (
    <appContext.Provider value={{Inputdata, setInputdata, doneOperation, setdoneOperation}}>
        <div className="calculator-wrapper">
      <h1 className="heading">Calculator</h1>
      <div className="calculator-container">
    <Input />
    <Buttons />
      </div>
    </div>
    </appContext.Provider>
  );
}

export default App;
