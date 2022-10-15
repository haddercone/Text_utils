import React , {useState}from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    
    const handleUpClick = () => {
        if(handleEmptyTextForm() !== 0){
            let new_text = text.toUpperCase()
            setText(new_text)
            props.showAlert("Converted to uppercase", "success")
        }
        
    }
    const handleLoClick = () => {
        if(handleEmptyTextForm() !== 0){
            let new_text = text.toLowerCase()
            setText(new_text)
            props.showAlert("Converted to lowercase", "success")
        }
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        console.log();
        setText(event.target.value)
    }
    const handleRemoveClick =() => {
        if(handleEmptyTextForm() !== 0){
            setText("")
            props.showAlert("Text removed successfully", "success")
        }
    }

    const handleCopy = () => {
        if(handleEmptyTextForm() !== 0){
            var text = document.getElementById('myBox')
            text.select()
            navigator.clipboard.writeText(text.value)
            props.showAlert("Text has been copied", "success")
        }
    }

    const handleExtraSpaces =() => {
        if (handleEmptyTextForm() !== 0)
        {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert("Extra spaces have been removed", "success")
        }
    }
    const handleEmptyTextForm = () => {
        const textBox = document.getElementById('myBox')
        const textContent = textBox.textContent;
        return textContent.length;
    } 
    return (
    <>
        <div style={{color: props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{color: props.mode === 'light'?'black':'white', backgroundColor: props.mode === "light"?"white":"#6c6969"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode === "light"?"black":"white"}}>
            <h2>Your text summary:</h2>
            <p>{text.split(" ").filter(ele => ele.length!==0).length} words and {text.length} characters</p>
            <p>{(0.008 * text.split(" ").filter(ele => ele.length!==0).length).toFixed(3)} Minute(s) read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}
