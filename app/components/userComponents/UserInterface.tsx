export default interface UserInterface {
    id?: string;
    username: string;
    email: string;
    password: string;
    mainInstrument: string;
    transposition: string;
    secondaryInstrument: string[];
    role: string;
    karma: number;
    progress: string;
}

export const emptyUser = {
    id: "",
    username: "",
    email: "",
    password: "",
    mainInstrument: "",
    transposition: "",
    secondaryInstrument: [],
    role: "",
    karma: 0,
    progress: "",
};
