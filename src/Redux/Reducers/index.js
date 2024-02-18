const initialState = {
    user: null // El usuario por defecto es null (no registrado)
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload // Actualiza el estado del usuario con los datos del usuario registrado
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null // Borra los datos del usuario al hacer logout
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  