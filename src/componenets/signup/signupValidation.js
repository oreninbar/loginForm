import {getUser} from "../../serverRequests";

export default async function validation(values) {
  let errors = {};
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

  //checks email
  if (!values.useremail) {
    errors.useremail = "Email required";
  } else if (!regexEmail.test(values.useremail)) {
    errors.useremail = "Email address is invalid";
  } else {
    let tempUser = await getUser(values.useremail);
    if (tempUser && tempUser.useremail === values.useremail) {
      errors.useremail =
        "Email address already exist, login with the exists email or change email";
    }
  }

  //check password
  if (!values.userpassword) {
    errors.userpassword = "Password number required";
  } else if (!regexPassword.test(values.userpassword)) {
    errors.userpassword =
      "Password invalid, Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
  }

  //check password confirmation
  if (!values.userpasswordconfirmation) {
    errors.userpasswordconfirmation = "Password confirmation required";
  } else if (values.userpassword !== values.userpasswordconfirmation) {
    errors.userpasswordconfirmation = "Passwords need to identical";
  }

  return errors;
}
