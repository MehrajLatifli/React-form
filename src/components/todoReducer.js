function todoReducer(state, action) {
    
    switch (action.type) {
        case "SetEmail":
          return {
            ...state,
            todo: { ...state.todo, email: action.value },
          };
        case "SetFullName":
          return {
            ...state,
            todo: { ...state.todo, fullname: action.value },
          };
        case "SetSalary":
          return {
            ...state,
            todo: { ...state.todo, salary: action.value },
          };
          case "SetDepartment":
            return {
              ...state,
              todo: { ...state.todo, department: action.value },
            };
        case "AddList":
          return {
            ...state,
            todos: [...state.todos, action.value],
          };
        default:
          return state;
      }
  }


  export default todoReducer;