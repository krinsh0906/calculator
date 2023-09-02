import { Button } from "react-bootstrap";
import  React,{useState} from "react";
import { FaBackspace } from "react-icons/fa";



function Calculator() {
    const [input,setInput] = useState("");
     const [output,setOutput] = useState("");
    const handleinput =(e) =>{
        const value = e.target.value;
        setInput((input) => input+value)


    }
    
    const handledelete = () =>{
        if(input.length>0)
        setInput((input) => input.slice(0, -1))
    }
    
    const handleequal = (e) => {
        const value = e.target.value;
        if(value=="="){
            if(input){
                setOutput(eval(input));
                setInput(input);
            }
            
        }
        else if(value=="Ac"){
            setInput("")
            setOutput(0)
        }

        else if(value=="+/-"){
           if(input){
            let check = eval(input);
            setInput(check !== 0 ? (check > 0? `-${check}`: `${Math.abs(check)}`) :"")

           }
        }
        else if(["+","-","/","*","."].includes(value)){
            if(input){
                const lastchar= input.slice(-1)
                if(["+","-","/","*","."].includes(lastchar)){
                    setInput(input.slice(0,-1) + value)
                }
                else{
                    setInput(input +value)
                }
                  
                
            }
        }
       
        
        
        

       
    }
    const handledote = (e) => {
            const value = e.target.value;
            const lastChar = input.slice(-1);
          
            if (value === '.') {
              // If the last character is an operator, disallow adding a decimal point
              if (['+', '-', '*', '/'].includes(lastChar)) {
                return;
              }
          
              // If there's already a decimal point in the current number, disallow adding another
              const currentNumber = input.split(/[\+\-\*\/]/).pop();
              if (currentNumber.includes('.')) {
                return;
              }
            }
          
            setInput((input) => input + value);
          };
          
    
      
      
      
    return (
        <div className="Calculator">
            <div className="Calculator-Wrapper ">
                <div className="Calculator-Heading Aligned">
                    <h3 className="Disable">
                        Calculator
                    </h3>
                </div>
                <div className="Calculator-Screen Aligned">
                    <div className="Calculator-output">
                        <span>
                        {input? input:"0"}
                        </span>
                    </div>

                </div>
                <div className="Calculator-Input Aligned">
                    
                    <span>
                         {output? output:""}
                    </span>

                </div>

                <div className="Calculator-Button">

                    <Button type="button" className="Top-btn" value="Ac"onClick={handleequal}>
                        AC
                    </Button>

                    <Button type="button" className="Top-btn" value="+/-"onClick={handleequal}>
                        <sup>+</sup>/<sub>-</sub>

                    </Button>
                    <Button type="button" className="Top-btn" value="%"onClick={handleinput}>
                        %
                    </Button>

                    <Button type="button" className="Special-btn" value="" onClick={handledelete}>
                        <FaBackspace />

                    </Button>
                    <Button type="button" className="Normal-btn" value="7" onClick={handleinput}>
                        7
                    </Button>

                    <Button type="button" className="Normal-btn" value="8" onClick={handleinput} >
                        8
                    </Button>
                    <Button type="button" className="Normal-btn"value="9"  onClick={handleinput}>
                        9
                    </Button>
                    <Button type="button" className="Special-btn" value="*" onClick={handleequal}>
                        X
                    </Button>
                    <Button type="button" className="Normal-btn" value="4" onClick={handleinput}>
                        4
                    </Button>
                    <Button type="button" className="Normal-btn" value="5" onClick={handleinput}>
                        5
                    </Button>
                    <Button type="button" className="Normal-btn" value="6" onClick={handleinput}>
                        6
                    </Button>
                    <Button type="button" className="Special-btn" value="/"onClick={handleequal}>
                      ÷
                    </Button>
                    <Button type="button" className="Normal-btn" value="1" onClick={handleinput}>
                        1
                    </Button>
                    <Button type="button" className="Normal-btn" value="2" onClick={handleinput}>
                        2
                    </Button>
                    <Button type="button" className="Normal-btn" value="3" onClick={handleinput}>
                        3
                    </Button>
                    <Button type="button" className="Special-btn" value="-" onClick={handleequal}>
                        -
                    </Button>
                    <Button type="button" className="Normal-btn" value="." onClick={handledote}>
                        .
                    </Button>
                    <Button type="button" className="Normal-btn" value="0" onClick={handleinput}>
                        0
                    </Button>
                    <Button type="button" className="Special-btn" value="+" onClick={handleequal}>
                        +
                    </Button>
                    <Button type="button" className="Special-btn" value="=" onClick={handleequal}>
                        =
                    </Button>
                    
                </div>
            </div>
        </div>
        
    )

}
export default Calculator;