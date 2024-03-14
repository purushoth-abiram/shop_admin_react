import { useLocation } from "react-router-dom";
import React from "react";
import moment from "moment";
import 'moment-timezone';
import { ROUTES } from "../configs/constants";


export const userSession = (withToken = false) => {
    const _token: string | null = localStorage.getItem('guest_login');

    if (_token === null) {
        return null;
    }

    try {
        const user = JSON.parse(atob(_token));
        const response = {
            id: user?.id,
            firstName: user?.name,
            emailId: user?.emailId,
            mobileNumber: user?.mobileNumber,
            dateOfBirth: user?.dateOfBirth,
            guestDocuments: user?.guestDocuments,
            guestFamilyDetails: user?.guestFamilyDetails,
            profilePictureUrl: user?.profilePicture,
            accessToken: null,
        };

        if (withToken) {
            response.accessToken = user?.accessToken;
        }

        return response;
    } catch (error) {
        localStorage.clear();
        return null;
    }

};

export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function EncodeUnicode(str: any) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }))
}

// Decoding base64 ⇢ UTF8

export function DecodeUnicode(str: any) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}

// Get Milliseconds from time frame

export function getMilliseconds(timeString: any) {
    const format = 'DD-MM-YYYY HH:mm:ss';
    const dateTime = moment(timeString, format);
    const milliseconds = dateTime.valueOf();
    return milliseconds;
}


// Date format in DD/MM/YYYY
export const formatDateTime = (date: any) => {
    let dateReturn = '-';
    try {
        if (date !== '' && date !== null) {
            const _date = moment.tz(date, moment.tz.guess()).toDate();
            dateReturn = moment(_date).format('DD-MMM-YYYY hh:mm:ss A');
        }
    } catch (e) {
        dateReturn = '-';
    }

    return dateReturn;
}

export const formatDate = (date: any) => {
    let dateReturn = '-';
    try {
        if (date !== '' && date !== null) {
            const _date = moment.tz(date, moment.tz.guess()).toDate();
            dateReturn = moment(_date).format('DD-MMM-YYYY');
        }
    } catch (e) {
        dateReturn = '-';
    }

    return dateReturn;
}


export const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #dcdcdc',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #000'
        },
    },
    '& .MuiInputBase-input': {
        fontFamily: 'Poppins, sans-serif !important'

    },
    '& .MuiInputLabel-outlined': {
        backgroundColor: '#fff !important',
        paddingRight: '0.25rem !important',
    },
    '& label.Mui-focused': {
        fontFamily: 'Poppins, sans-serif !important',
        color: '#000 !important',
    },
    'label + &': {
        fontFamily: 'Poppins, sans-serif !important'
    },
}

export const radioButton = {
    color: '#B2BAC2',
    '&.Mui-checked': {
        color: '#000 !important',
    },
}


export const base64 = {
    encode(text: string) {
        return btoa(text);
    },
    decode(text: string) {
        return atob(text);
    }
}

export const IsFutureDates = (date:any) => {
    const targetDate = moment(date);
    const currentDate = moment();
    return targetDate.isAfter(currentDate);
}