// import uuid from 'uuid'
// import faker from 'faker'

// const userInitialState = [{_id: uuid(), name: faker.name.firstName()}, {
//     _id: uuid(), name: faker.name.firstName()
// },{
//     _id: uuid(), name: faker.name.firstName()
// }]
// const userReducer = (state= userInitialState, action) => {
//     switch(action.type){
//         case 'ADD_USER':
//             return [...state,action.payload]
//         case 'REMOVE_USER':
//             return state.filter(user => user._id !== action.payload )
//         case 'EDIT_USER':
//             state.forEach((user) => {
//                 if(user._id === action.payload.id){
//                     user.name = action.payload.name
//                 }               
//             })
//             return [...state]
//         default: 
//             return [...state]
//     }
// }
const userReducer = (state= {},action) => {
    switch(action.type){
        case  'SET_USER':
            return {...action.payload}
        case 'REMOVE_USER':
            return {}
        default: 
            return {...state}
    }
}
export default userReducer