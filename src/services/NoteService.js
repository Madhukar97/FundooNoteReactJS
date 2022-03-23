import AxiosService from '../services/AxiosService';

const baseURL = "http://localhost:8083/notemicroservice/"

export class NoteServices{
  constructor(){}

  axiosService = new AxiosService();

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

  searchNotes(query){
    let token = localStorage.getItem('fundooUserToken');
    return(
      this.axiosService.get(baseURL+"note/search/"+query,{token},'')
    )
  }

}

