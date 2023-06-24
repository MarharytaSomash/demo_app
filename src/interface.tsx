export interface SignUpProps {
    handleToggleSignUp: () => void;
}
export interface inputDataReg {
    displayName: string;
    username: string;
    password: string;
    confirm_password?: string;
}
export interface inputDataAuth {
    username: string;
    password: string;
}
