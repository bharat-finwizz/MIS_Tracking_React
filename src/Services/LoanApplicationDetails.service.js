import axios from 'axios';


const API = 'http://localhost:8080';


class LoanApplicationDetailsService{

    saveDetails(loanapplicationDetails){
        return axios.post(API + "/saveDetails", loanapplicationDetails);
        
    }


    getAllUser(){
        return axios.get(API + "/displayAllUsers");
    }


    getDetailsbyID(id){
        return axios.get(API + "/getDetailsbyId/" + id);
    }

    deleteDetails(id){
        return axios.get(API + "/deleteDetails" + id);
    }


    editDetails(id){
        return axios.post(API + "/editDetails" + id);
    }
    
    findByPanNumber(panNumber){
        
         return   axios.get(API + "/checkdedupe/" + panNumber);
         
      
    }
    


}

export default new LoanApplicationDetailsService;