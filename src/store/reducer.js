export const reducer=(state,action)=>
{
   switch(action.type)
   {
       case "INC":
           {
               state.count++;
               return {...state}
           }
       case "DEC":
          {
               state.count--;
               return {...state}
          }
          case "addval":
              {
                  state.count+=action.payload
                  return {...state}
              }
              case "subval":
              {
                  state.count-=action.payload
                  return {...state}
              }
              case "mulval":
              {
                  state.count=state.count*action.payload
                  return {...state}
              }
              case "divval":
              {
                    state.count=state.count/action.payload
                  return {...state}
              }
          default:
            {
                return state
            }  
}   
}