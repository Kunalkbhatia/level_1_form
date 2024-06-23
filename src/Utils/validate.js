const validate = (values) => {
    let errors = {};
    
    if (!values.name) {
      errors.name = 'Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age <= 0) {
      errors.age = 'Age must be greater than 0';
    }
    if(values.attending && !values.guestName){
        errors.guestName = 'Guest name is Required'
    }
  
    return errors;
  };
  
  export default validate;
  