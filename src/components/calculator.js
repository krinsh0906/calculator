import { Button } from "react-bootstrap";
import  React,{useState} from "react";
import { FaBackspace } from "react-icons/fa";



function Calculator() {
    const [input,setInput] = useState("");
    const handleinput =(e) =>{
        const value = e.target.value;
        setInput((input) => input+value)


    }
    
    const handledelete = () =>{
        setInput(input.slice(0, -1))
    }
    const handleallclear = () =>{
        setInput("")
    }
    const handleequal = () => {
        setInput(eval(input))
    }
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
                       
                        </span>
                    </div>

                </div>
                <div className="Calculator-Input Aligned">
                    
                    <span>
                         {input? input:"0"}
                    </span>

                </div>

                <div className="Calculator-Button">

                    <Button type="button" className="Top-btn" value="Ac"onClick={handleallclear}>
                        AC
                    </Button>

                    <Button type="button" className="Top-btn" value="+/-"onClick={handleinput}>
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
                    <Button type="button" className="Special-btn" value="*" onClick={handleinput}>
                        *
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
                    <Button type="button" className="Special-btn" value="/"onClick={handleinput}>
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
                    <Button type="button" className="Special-btn" value="-" onClick={handleinput}>
                        -
                    </Button>
                    <Button type="button" className="Normal-btn" value="." onClick={handleinput}>
                        .
                    </Button>
                    <Button type="button" className="Normal-btn" value="0" onClick={handleinput}>
                        0
                    </Button>
                    <Button type="button" className="Special-btn" value="+" onClick={handleinput}>
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