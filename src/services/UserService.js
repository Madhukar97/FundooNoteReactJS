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

  forgotPass (email) {
    return (
      this.axiosService.post(baseURL+"forgotPass/"+email,'',''));
  }

  resetPass (password, token) {
    return (
      this.axiosService.put(baseURL+"resetpassword/"+password,{token},''));
  }
}

