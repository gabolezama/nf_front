const initialState = {
   list: [],
   isEditing: false,
   editItem: {},
   dataToSend: {}
};
  
  const activityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LIST':
        return {
          ...state,
          list: [...state.list, action.payload],
          isEditing: false,
          editItem: {
            name:'',
            description: ''
          }
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          isEditing: true,
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