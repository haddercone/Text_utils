import React , {useState}from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("")
    
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let new_text = text.toUpperCase()
        setText(new_text)
    }
    const handleLoClick = () => {
        let new_text = text.toLowerCase()
        setText(new_text)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        console.log();
        setText(event.target.value)
    }
    const handleRemoveClick =() => {
        setText("")
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox')
            text.select()
            navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove spaces</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary:</h2>
            <p>{text.split(" ").length -1} words and {text.length} characters</p>
            <p>{parseInt(0.08 * text.split(" ").length)} Minute(s) read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}
