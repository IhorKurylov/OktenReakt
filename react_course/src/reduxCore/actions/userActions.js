import { UserActionTypes } from '../reducers/usersReducer.js';
import { rmApiServices } from '../../services/rmApiServices.js';
import { Endpoints } from '../../api/endpoints.js';

export const userActions = { //action Creator
  setUsers: (usersData) =>  ({type: UserActionTypes.SET_USERS, usersData, mentor: "Ihor"}),
  addUsers: (data) =>  ({type: UserActionTypes.ADD_USERS, payload:data}),
  setIsLoading: (isLoading) =>  ({type: UserActionTypes.SET_ISLOADING, payload:isLoading})
}

export const getRickMorty = () => (dispatch) => {
  dispatch(userActions.setIsLoading(true));
  // rmApiServices.getCharactersData(dispatch)

  // rmApiServices.getCharactersData2()
  //   .then(res => dispatch(setUsers(res.data)))

  rmApiServices.get(Endpoints.character)
    .then(res => dispatch(userActions.setUsers(res.data)))
    // .then(res => console.log(res.data))


}

export const getMoreData = (pageNumber) => (dispatch) => {
  dispatch(userActions.setIsLoading(true));
  rmApiServices.get(`/character?page=${pageNumber}`)
    .then(res => dispatch(userActions.addUsers(res.data)))
}


export const postMoreData2 = (user) => (dispatch) => {
  dispatch(userActions.setIsLoading(true));
  rmApiServices.get(`/character?page`, user)
    .then(res => dispatch(userActions.addUsers(res.data)))
}







