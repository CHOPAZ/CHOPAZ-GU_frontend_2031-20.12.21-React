const initialState = {
  showName: false,
  name: 'Pavel'
  }
  

export const checkBoxToggle = (state = initialState, action) => {
  switch(action.type){
    case'CHANGE_STATE':
      return {
          ...state,
          showName: !state.showName
        }
        
    default: return state
  }
}