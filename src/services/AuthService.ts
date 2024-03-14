import { base64 } from "./HelperService";

export const insertUpdateLocalStorage = (storeKey: string, data: any) => {
    const _temp: any = JSON.parse(localStorage.getItem(storeKey) || 'null');
    localStorage.setItem(storeKey, JSON.stringify({ ..._temp, ...data }));
}
export const getLocalStorage = (storeKey: string) => {
    return JSON.parse(localStorage.getItem(storeKey) || 'null');
}

export const removeLocalStorage = (storeKey: string) => {
    localStorage.removeItem(storeKey);
}

const authService = {
    setUser() {
        const _tempData = {};
        return _tempData;
    },
    removeUser() {
        localStorage.removeItem('guest_login');
        return null;
    },
    user() {
        const _tempData: string | null = localStorage.getItem('guest_login');
        if (!_tempData) return null;
        const user = JSON.parse(base64.decode(_tempData));
        console.log(user)
        debugger;
        return {
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
    }
}

export { authService };