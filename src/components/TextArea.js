import React,{useState} from 'react'
import './TextArea.css'

export default function TextArea() {

   const upperCase = () =>{
    console.log(text)
    let newText = text.toUpperCase();
    setText(newText)
   }

   const lowerCase = () =>{
    console.log(text)
    let newText = text.toLowerCase();
    setText(newText)
   }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }

    const clear = () =>{
        setText("")

    }


    const [text, setText] = useState('')

    return (
        <>  
            <div className="container">
            
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Editor</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10"></textarea>
                <button className="btn btn-primary my-5" onClick={upperCase}>To Upper Case</button>
                <button className="btn btn-primary my-5" onClick={lowerCase}>To Upper Case</button>
                <button className="btn btn-primary my-20" onClick={clear}>Clear</button>

            </div>
        </>
    );
}