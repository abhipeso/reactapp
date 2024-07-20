import React, {useState} from 'react'




export default function Textform(props) {
    const [text, settext] = useState("Enter text here");
  return (
    <>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<h1>{props.abc} </h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className="btn btn primary">Convert to Uppercase</button>
</div>
    </>
  )
}
