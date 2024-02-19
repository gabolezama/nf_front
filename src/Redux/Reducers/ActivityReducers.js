const initialState = {
   list: [],
   editItem: {}
};
  
  const activityReducer = (state = initialState, action) => {
    console.log('REDUCER: ', action);
    switch (action.type) {
      case 'ADD_LIST':
        return {
          ...state,
          list: [...state.list, action.payload],
          editItem: {
            name:'',
            description: ''
          }
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          list: state.list.filter( item => item.id !== action.payload.id),
          editItem: action.payload
        };
      case 'DELETE_BY_ID':
        return {
          ...state,
          list: state.list.filter( item => item.id !== action.payload.id)
        };

      default:
        return state;
    }
  };
  
  export default activityReducer;