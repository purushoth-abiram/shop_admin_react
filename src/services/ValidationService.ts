import moment from "moment";

export const requiredFiled = (string: string | null | undefined): boolean => {
    let isValid = true;
    if (string === '' || string === null || string === undefined) {
        isValid = false;
    }

    return isValid;
};

export const validateEmail = (email: string | null | undefined): boolean => {
    let isValid = true;

    if (!String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        isValid = false;
    }

    return isValid;
};
export const validateMobile = (number: string | null): boolean => {
    let isValid = true;
    number = number || '';
    const pattern = new RegExp(/^[0-9]{10}$/);
    if (!pattern.test(number)) {
        isValid = false;
    }
    return isValid;
};
export const validateAadhaar = (aadhaar: string | null): boolean => {
    aadhaar = aadhaar || '';
    const pattern = /^\d{12}$/;
    return pattern.test(aadhaar);
}
export const validatePanCard = (panCard: string | null): boolean => {
    panCard = panCard || '';
    const pattern = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
    return pattern.test(panCard);
}
export const validateDrivingLicense = (drivingLicense: string | null): boolean => {
    drivingLicense = drivingLicense || '';
    const pattern = /^[A-Z0-9]{8}$/;
    return pattern.test(drivingLicense);
}
export const validatePassport = (passport: string | null): boolean => {
    passport = passport || '';
    const pattern = /^[A-Z0-9]{9}$/;
    return pattern.test(passport);
}

export const validateURL = (email: string | null | undefined): boolean => {
    let isValid = true;

    if (!String(email)
        .toLowerCase()
        .match(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g
        )) {
        isValid = false;
    }

    return isValid;
};

export const validateNumber = (number: string | null | undefined, length: number | null = null): boolean => {
    const pattern = new RegExp(/^[0-9\b]+$/);
    let isValid = true;

    number = number || '';

    if (length !== null && number.length !== length) {
        isValid = false;
    }

    if (!pattern.test(number)) {
        isValid = false;
    }

    return isValid;
};

export const validatePhone = (number: string | null | undefined, length: number | null = null): boolean => {
    const pattern = new RegExp(/^\+[0-9\b]+$/);
    let isValid = true;

    number = number || '';

    if (length !== null && number.length !== length) {
        isValid = false;
    }

    if (!pattern.test(number)) {
        isValid = false;
    }

    return isValid;
};

export const validateFloat = (number: string | null | undefined): boolean => {
    const pattern = new RegExp(/^(?!0\d)\d*(\.\d+)?$/);
    let isValid = true;

    number = number || '';

    if (number === '') {
        isValid = false;
    }

    if (!pattern.test(number)) {
        isValid = false;
    }

    return isValid;
};

interface propString {
    withNumber?: boolean;
    withSpace?: boolean;
    withDash?: boolean;
    withForwardSlash?: boolean;
}

export const validateString = (string: string | null | undefined, config?: propString): boolean => {
    const _configDefault: propString = {
        withNumber: false,
        withDash: false,
        withForwardSlash: false,
        withSpace: true,
    };
    config = { ..._configDefault, ...config };
    let patternStr = "";
    let isValid = true;

    if (config.withNumber) {
        patternStr += "0-9";
    }

    if (config.withDash) {
        patternStr += "-";
    }

    if (config.withForwardSlash) {
        patternStr += "/";
    }

    if (config.withSpace) {
        patternStr += "\\s";
    }

    const pattern = new RegExp("^[a-zA-Z" + patternStr + "]+$", 'gi');
    string = string || '';

    if (!pattern.test(string)) {
        isValid = false;
    }

    return isValid;
};

export const isPastDateValid = (dateString:any) => {
    const inputDate = moment(new Date(dateString), 'YYYY-MM-DD'); // Assuming the input format is YYYY-MM-DD
  
    console.log(inputDate)
    if (inputDate.isValid()) {
      const minDate = moment('1900-12-31', 'YYYY-MM-DD'); // Minimum valid date
      return inputDate.isSameOrAfter(minDate);
    }
  
    return false;
  }