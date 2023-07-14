import React,{useState} from 'react'
import Button from './sub/Button'
import Screen from './sub/Screen'
import "./sub/calc.css"

/*.eslint no-eval:0 */

function Calculator(props){
    const[inp,setInp]=useState('')
    const[out,setOut]=useState('0')

    //actions
    const actions=['+','-','*','/','%']

    //value Handler
    const valueHandler=(value)=>{
        //console.log('value=',value)
        const str=inp+value;
        setInp(str)
    }

    /*it clears both input and output */
    const clearOut=(value)=>{
        if(value ==="AC"){
            setOut('0')
            setInp('')
        }
    }
    /*clears only input */
    const clearInp=(value)=>{
        if(value==="C"){
            setInp('')
        }
    }
    /*calc final output */
    const calHandler=(val)=>{
        if(val === "="){
            if(inp===''){
                setOut('0')
            }else{
                setOut(eval(inp))
            }
        }
    }
  
    return(
        <div>
           <h1> <div className='title'>CALCULATOR</div> </h1>
            <div className="container">
                <Screen input={inp} setInput={setInp} class={'output'} result={out}></Screen>
                <div className="ops">
                    
                    <Button title={"7"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"8"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"9"} handler={valueHandler} class={"btn"}></Button>
                   

                    <Button title={"4"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"5"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"6"} handler={valueHandler} class={"btn"}></Button>
                    

                    <Button title={"1"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"2"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"3"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"/"} handler={valueHandler} class={"btn btn-warning"}></Button>

                    <Button title={"."} handler={valueHandler} class={"btn btn-warning"}></Button>
                    <Button title={"0"} handler={valueHandler} class={"btn"}></Button>
                    <Button title={"%"} handler={valueHandler} class={"btn btn-warning"}></Button>
                    <Button title={"+"} handler={valueHandler} class={"btn btn-warning"}></Button>

                    <Button title={"AC"}  handler={clearOut}  class={"btn"}></Button>
                    <Button title={"C"}  handler={clearInp}  class={"btn"}></Button>
                    <Button title={'='} handler={calHandler} class={"btn btn-success"}></Button>
                </div>
            </div>
        </div>
    )
}
export default Calculator