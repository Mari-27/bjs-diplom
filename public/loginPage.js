"use strict";
const user = new UserForm();
let data = {};
user.loginFormCallback = function(data){
    ApiConnector.login(data, (response, data) => 
    {
        if (response.success === false) throw response.error;
        try{
            console.log(response);
            setTimeout(() => location.reload(), 1000);
        } catch {
            console.log(response);
        }
    })
}

user.registerFormCallback = function(data){
    ApiConnector.register(data);
}