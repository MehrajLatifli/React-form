
import React, { memo } from 'react' 

export default  memo (function Form({email, fullname, salary, department, onSubmitHandler, onChangeHandler1, onChangeHandler2, onChangeHandler3, onChangeHandler4}) {


  return (

  <form onSubmit={onSubmitHandler}>
    <div className="form-group">
      <input type="email" value={email} onChange={onChangeHandler1} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <input type="text" value={fullname} onChange={onChangeHandler2}   className="form-control" id="Fullname" placeholder="Full name"/>
    </div>
    <div className="form-group">
      <input type="text" value={salary} onChange={onChangeHandler3}   className="form-control" id="Salary" placeholder="Salary"/>
    </div>
    <div className="form-group">
      <input type="text" value={department} onChange={onChangeHandler4}   className="form-control" id="Department" placeholder="Department"/>
    </div>
    <small id="emailHelp"  className="form-text text-muted">We will always keep your privacy at risk by selling your confidential information for money.</small>
    <br/>
    <button type="submit" className="btn btn-primary"  style={{width:"100%" }}>Add</button>
  </form>
  
  )
})
