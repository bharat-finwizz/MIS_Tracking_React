import axios from "axios";

const API = "http://localhost:8080";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class LoanApplicationDetailsService {
  saveDetails(loanapplicationDetails) {
    return axios.post(API + "/saveDetails", loanapplicationDetails);
  }

  getAllUser() {
    return axios.get(API + "/displayAllUsers");
  }

  getDetailsbyID(id) {
    return axios.get(API + "/getDetailsbyId/" + id);
  }

  deleteDetails(id) {
    return axios.get(API + "/deleteDetails/" + id);
  }

  editDetails(id) {
    return axios.post(API + "/editDetails" + id);
  }

  findByPanNumber(panNumber) {
    return axios.get(API + "/checkdedupe/" + panNumber);
  }

  findByStatus(status) {
    return axios.get(API + "/getloanapplicationnumber/" + status);
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API}/login`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  registerSuccessfulLogin(username, password) {
    //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
    //console.log('registerSuccessfulLogin')
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  logOutUser() {
    // try {
    //     return axios.get(`${API}/logout`,
    //     { headers: { authorization: this.createBasicAuthToken(username, password)
    //        } })
    // } catch (error) {
    //     console.log(error);
    // }
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }

  userLogin = (authRequest) => {
    return axios({
      method: "POST",
      url: `${API}/login`,
      data: authRequest,
    });
  };
}

export default new LoanApplicationDetailsService();
