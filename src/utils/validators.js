const validatorUtils = {
  fullNameValidate: (name, field = 'name') => {
    const errors = [];

    if(!name || !validatorUtils.isNotEmpty(name)) {
      errors.push({ field, reason: 'empty', message: 'Name cannot be blank' });
    }

    return errors;
  },
  websiteValidate: (website, field = 'website') => {
    const errors = [];

    // can be empty
    if (!website) {
      return errors
    }

    if(!website.startsWith('http://') && !website.startsWith('https://')) {
      errors.push({ field, reason: 'format', message: 'Please provide a valid url' });
    }

    return errors;
  },
  emailValidate: (email, field = 'email') => {
    const errors = [];

    if(email && validatorUtils.isNotEmpty(email)) {
      // email is fine :D
      if (!validatorUtils.isEmail(email)) {
        errors.push({ field, reason: 'format', message: 'Email does not match the expected format' });
      }
    } else {
      errors.push({ field, reason: 'empty', message: 'Email cannot be blank' });
    }

    return errors;
  },
  passwordValidate: (password, field = 'password', canBeBlank=false) => {
    const errors = [];

    if(password && validatorUtils.isNotEmpty(password)) {
      // const specialChars = '^ $ * . [ ] { } ( ) ? - " ! @ # % & / \\ , > < \' : ; | _ ~ `';
      // const specialCharsList = specialChars.split('').filter(s => s !== ' ');

      if (password.length < 6){
        errors.push({ field, reason: 'too_short', message: 'Password must be at least 8 characters' });
      } else if (password.length > 99) {
        errors.push({ field, reason: 'too_long', message: 'Password must be at most 99 characters' });
      } /* else if (!password.split('').some(s => specialCharsList.includes(s))) {
        errors.push({ field, reason: 'missing_special_char', message: `Password must contain a special character such as: ${specialChars}`, example: specialChars });
      } else if (!(/[A-Z]/.test(password))) {
        errors.push({ field, reason: 'missing_uppercase', message: `Password must contain an uppercase character such as: A-Z`, example: 'A-Z' });
      } else if (!(/[a-z]/.test(password))) {
        errors.push({ field, reason: 'missing_lowercase', message: `Password must contain an lowercase character such as: a-z`, example: 'a-z' });
      } */
      // password is fine :D
    } else if (!canBeBlank) {
      errors.push({ field, reason: 'empty', message: 'Password cannot be blank' });
    }

    return errors;
  },
  isEmpty: str => (!str || typeof str !== 'string' || str.trim().length === 0),
  isNotEmpty: str => !validatorUtils.isEmpty(str),
  isFullname: str => str.trim().indexOf(' ') !== -1
    && str.trim().indexOf(' ') > 1
    && str.trim().indexOf(' ') !== str.trim().length,
  isEmail: (str) => {
    const lastAtPos = str.lastIndexOf('@');
    const lastDotPos = str.lastIndexOf('.');
    const domainOfEmail = lastAtPos === -1 ? '' : str.substring(lastAtPos, str.length);

    return (
      domainOfEmail.indexOf('..') === -1 // regexp-less way of ensuring there is a proper domain & TLD
      && lastDotPos - lastAtPos > 1 // no @.
      && lastAtPos < lastDotPos // @ is before last dot
      && lastAtPos > 0 // @ not at the end
      && str.indexOf('@@') === -1 // no @@
      && lastDotPos > 2 // last dot is at least 2 chars from the end
      && (str.length - lastDotPos) > 2 // more than 2 chars after last dot
    );
  }
};

export default validatorUtils;
