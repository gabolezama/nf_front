const initialState = {
    status: null // El usuario por defecto es null (no registrado)
  };
  
  const isAreaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'IS_AREA':
        return {
          ...state,
          status: action.payload
        };

      default:
        return state;
    }
  };
  
  export default isAreaReducer;