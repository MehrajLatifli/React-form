import React, { memo } from 'react'
import Tableitem from './Tableitem'

export default  memo (function Table({todos}) {



  return (



<table className="table" style={{width:"100%" }}>
  <thead className="bg-primary">
    <tr>
      <th scope="col" className="text-light">#</th>
      <th scope="col" className="text-light">Email</th>
      <th scope="col" className="text-light">FullName</th>
      <th scope="col" className="text-light">Salary</th>
      <th scope="col" className="text-light">Department</th>
    </tr>
  </thead>
  <tbody>

     {todos.map((todo,index)=> (


       <Tableitem key={index} todo={todo} />

    ))}
    
  </tbody>
</table>
  )
})
