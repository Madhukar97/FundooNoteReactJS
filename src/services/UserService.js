import axios from 'axios';
import AxiosService from '../services/AxiosService';

const baseURL = "http://localhost:8080/"

export let createUser = (user) => {
  axios({
    headers: {
      'content-type' : 'application/json ; charset=UTF-8' 
    },
    method: 'post',
    url: 'http://localhost:8080/register',
    data:{
      firstName: user.firstName,
      lastName:  user.lastName,
      email:  user.email,
      password:  user.password
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export let loginUser = (user) => {
  return axios({
    headers: {
      'content-type' : 'application/json ; charset=UTF-8' 
    },
    method: 'post',
    url: 'http://localhost:8080/user_login',
    data:{
      email:  user.email,
      password:  user.password
    }
  }) 
}

export class UserServices{
  constructor(){}

  axiosService = new AxiosService();

  register (user) {
    let data={
      firstName: user.firstName,
      lastName:  user.lastName,
      email:  user.email,
      password:  user.password
    }
    return (
    this.axiosService.post(baseURL+'register','', data));
  }

  login (userData) {
    return (
    this.axiosService.post(baseURL+'user_login','',userData));
  }

  addNote (note) {
    let data={
      title: note.title,
      content: note.content,
      color: 'white'
    }
    let token = localStorage.getItem('fundooUserToken');
    return (
      this.axiosService.post(baseURL+'users/saveNote/',{token},data)
    )
  }

  getAllNotes() {
    let token = localStorage.getItem('fundooUserToken');
    return(
      this.axiosService.get(baseURL+'users/',{token},'')
    )
  }

  deleteNote(id) {
    console.log(id)
    return(
    this.axiosService.delete(baseURL+'users/'+id,'','')
    )
  }

  updateNote(id, note){
    console.log(id)
    let token = localStorage.getItem('fundooUserToken');
    return(
    this.axiosService.put(baseURL+'users/',{token},note)
    )
  }


}

