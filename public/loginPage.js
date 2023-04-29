"use strict";
const userForm = new UserForm;
 UserForm.loginFormCallback = function (data) {
    ApiConnector.login(data, (response) => {
        if (response.success) {
            location.reload();
        } else{
             UserForm.setLoginErrorMessage(response.error);
        }  
    });
 }
UserForm.registerFormCallback = function (data) {
    ApiConnector.register (data, (response) => {
        if (response.success) {
            location.reload ();
        } else {
            UserForm.setRegisterErrorMessage(message)(response.error);
        }
    });
}
UserForm.run();