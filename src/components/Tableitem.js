import React from 'react'

export default function Tableitem({id,todo}) {

    console.log({todo})

  return (
    <tr>
    <th scope="row" key={id} > </th>
    <td>{todo.email}</td>
    <td>{todo.fullname}</td>
    <td>{todo.salary}</td>
    <td>{todo.department}</td>
  </tr>
  )
}
