
import { useCallback, useReducer } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import todoReducer from './components/todoReducer';

function App() {


  const [state,dispatch]=useReducer(todoReducer,{todos:[], todo:{email:'', fullname:'',salary:'', department:''}})


  const onChangeHandler1=useCallback((e)=>{
  dispatch({
      type:'SetEmail',
      value:e.target.value
    })

  },[])

  const onChangeHandler2=useCallback((e)=>{
    dispatch({
        type:'SetFullName',
        value:e.target.value
    })
  
  },[])

  const onChangeHandler3=useCallback((e)=>{
    dispatch({
          type:'SetSalary',
          value:e.target.value
    })
    
  },[])

  const onChangeHandler4=useCallback((e)=>{
      dispatch({
            type:'SetDepartment',
            value:e.target.value
      })
      
  },[])



  const onSubmitHandler=(e)=>{
 
    e.preventDefault();

    dispatch({
      type:'AddList',
      value:state.todo
    })



  }



  return (
    <div className="App" style={{display: "table", width:"50%", marginRight: "auto", marginLeft: "auto", }}>

     <Form email={state.todo.email} fullname={state.todo.fullname} salary={state.todo.salary} department={state.todo.department}  onSubmitHandler={onSubmitHandler} onChangeHandler1={onChangeHandler1} onChangeHandler2={onChangeHandler2} onChangeHandler3={onChangeHandler3} onChangeHandler4={onChangeHandler4} ></Form>

     <br/>
     <br/>

     <Table  todos={state.todos}></Table>

    </div>
  );
}

export default App;
