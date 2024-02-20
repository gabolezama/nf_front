const initialState = {
   list: [],
   isEditing: false,
   editItem: {},
   formData: false,
   mapData: false,
   dataToSend: {}
};
  
  const activityReducer = (state = initialState, action) => {
    console.log('ACTIVITY RED: ', state.list);
    switch (action.type) {
      case 'SET_FORM_DATA':
        return {
          ...state,
          dataToSend: action.payload,
          formData: true
        };
      case 'SET_MAP_DATA':
        return {
          ...state,
          dataToSend: {...state.dataToSend, ...action.payload},
          mapData: true
        };
      case 'ADD_LIST':
        return {
          ...state,
          list: [...state.list, state.dataToSend],
          isEditing: false,
          formData: false,
          mapData: false,
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