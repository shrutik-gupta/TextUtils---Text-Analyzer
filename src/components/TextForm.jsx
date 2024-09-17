import { useState } from "react";
function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const textFormOnChange = (e) =>{
        setText(e.target.value);
    }

    const uppercaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to Uppercase', 'success');
    }
    const lowercaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to Lowercase', 'success');
    }

    const clearClick = () =>{
        setText("");
        props.showAlert('Text cleared', 'success');
    }

    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={textFormOnChange} style={{backgroundColor: props.mode==='light'? '#fff' : '#333' , color: props.mode==='light'? '#000' : '#fff'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={uppercaseClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowercaseClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.length} Characters</p>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
                <h2>Preview</h2>
                <p>{text.length===0? 'Enter text to preview' : text}</p>
            </div>
        </>
    );
}
export default TextForm 

