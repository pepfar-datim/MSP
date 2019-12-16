


export const reducer = (state, action) => {
    switch (action.type) {
      case 'changeUserPassword':
        return{
          ...state,
          user: action.newUser.user,
          password: action.newUser.password
        }

      case 'changeIndicatorName':
          return{
            ...state,
            indicatorName: action.indicatorName
          }
      
      case 'changeCurrentIndicator':
            return{
              ...state,
              currentIndicator: action.currentIndicator
          }
      
      case 'changeMatchDataElements':
            return{
              ...state,
              matchDataElements: action.matchDataElements
          }
        
      default:
        return state;
    }
  };