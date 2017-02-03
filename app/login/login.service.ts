import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  validateCredentials(userName:string,password:string){
    if(userName=="kamal" && password=="123"){
      return "success";
    }
  }
}
