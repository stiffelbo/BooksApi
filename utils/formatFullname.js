module.exports = (fullName) => {

  if(typeof fullName == 'string'){
    if(fullName.split(' ').length === 2){
      fullName = fullName.toLowerCase();
      let [ firstName, lastName ] = fullName.split(' ');
      if(!firstName || !lastName) return false;
      firstName = firstName[0].toUpperCase() + firstName.slice(1);
      lastName = lastName[0].toUpperCase() + lastName.slice(1);
      return firstName + ' ' + lastName;
    }else{
      return 'Error';
    }
  }else{
    return 'Error';
  }
};
