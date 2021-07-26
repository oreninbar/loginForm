import { useState, useEffect } from "react";
import ServerReq from "../../serverRequests";

const FormLogic = (formSubmitted, validationForm) => {
  const [inputValues, setInputValues] = useState({
    useremail: "",
    userpassword: "",
    userpasswordconfirmation: "",
  });
  const serverReq = new ServerReq();

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = await validationForm(inputValues);
    setErrors(tempErrors);
    setIsSubmitted(true);
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      serverReq.saveUser({
        useremail: inputValues.useremail,
        userpassword: inputValues.userpassword,
      });

      formSubmitted();
    }
  });

  return { handleInput, inputValues, handleSubmit, errors };
};

export default FormLogic;
