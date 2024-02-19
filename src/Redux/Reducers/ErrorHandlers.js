const initialState = {
    globalAlert: {
        show: false,
        message: '',
        type: ''
    }
};
  
  const errorHandler = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_GLOBAL_ALERT':
        return {
          ...state,
          globalAlert: action.payload
        };

      default:
        return state;
    }
  };
  
  export default errorHandler;