import axios from '../config/config'
// export const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user
//     }
// } 

// export const removeUser = (id) => {
//     return {
//         type: 'REMOVE_USER',
//         payload: id
//     }
// } 

// export const editUser = (id,name) => {
//     return {
//         type: 'EDIT_USER',
//         payload: {id, name}
//     }
// } 
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}
export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER'
    }
}
export const startRemoveUser = (id) => {

}
export const startSetUser = () => {
    return (dispatch) => {
        if(localStorage.getItem('userAuthToken')){
            axios.get('/users/account',{
              headers: {
                  'x-auth': localStorage.getItem('userAuthToken')
              }
            })
            .then(response => {
              if(response.data.errors) {
                  alert(response.data.alert)
              } else {
                  dispatch(setUser(response.data))
              }
            })
          }
    }
}