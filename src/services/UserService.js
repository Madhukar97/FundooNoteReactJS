import AxiosService from '../services/AxiosService';

const baseURL = "http://localhost:8080/"

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
      color: note.color
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

