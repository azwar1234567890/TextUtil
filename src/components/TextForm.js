import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = (() => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text changed to UpperCase","Success")
   

     
  })

  const handleLowerClick = (() => {
    console.log("LowerCase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text changed to LowerCase","Success")
  })

  const handleClearClick = (() => {
    console.log("Clear was clicked" + text)
    let newText = "";
    setText(newText);
    props.showAlert("Your Text is Cleared","Success")
  })

  const handleRemoveSpaces = (() => {
    console.log("Extra Spaces Removes" + text)
    let newText = text.split(/[ ]+/) ;
    setText(newText.join(" "));
    props.showAlert("Your Text is Formatted","Success")
  })


  const unsecuredCopyToClipboard = (text) => { 
    const textArea = document.createElement("textarea");
     textArea.value = text;
      document.body.appendChild(textArea);
       textArea.focus(); textArea.select(); 
       try { document.execCommand('copy') } catch (err) 
       { console.error('Unable to copy to clipboard', err) } 
       document.body.removeChild(textArea) };


  const handleCopyClick = (() => {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      unsecuredCopyToClipboard(text);
    }
    props.showAlert("Your Text is Copied","Success")
  })

  // const handleCopyClick = () => {
  //   console.log("Text copied")
  //   var text = document.getElementById("myBox");
  //   text.select()
  //   navigator.clipboard.writeText(text.value)
  //   alert('Copied')


  // }

  /**
   * Copies the text passed as param to the system clipboard
   * Check if using HTTPS and navigator.clipboard is available
   * Then uses standard clipboard API, otherwise uses fallback
  */





  const handleOnChange = ((event) => {
    console.log("On Change")
    setText(event.target.value)
  })



  // setText(text)
  return (
    <>
      <h3 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.title} </h3>
      <div className="mb-3">
        <textarea className="form-control" id="myBOX" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>ABC</button>
      <button className="btn btn-primary" onClick={handleLowerClick}>abc</button>
      <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary" onClick={handleCopyClick}>Copy</button>
      <button className="btn btn-primary" onClick={handleRemoveSpaces}>Space</button>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h4>Text Summary</h4>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h6> Your Text has <span className="charnum">{text.length} </span>Characters and <span className="charnum"> {text.split(" ").length - 1}</span> words.</h6>
        <h6>Time taken to read  by an average reader is <span className="charnum">{0.008 * ((text.split(" ").length - 1))}</span> Minutes.</h6>
      </div>

      <div className="container my-5" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Preview</h3>
        <p style={{color:props.mode==='dark'?'white':'#042743'}}>{text}</p>
      </div>


    </>
  )
}
