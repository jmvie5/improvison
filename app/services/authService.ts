import UserInterface from "../components/userComponents/UserInterface";

async function test(string:string) {
    let response;
    await fetch("/api/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(string),
    })
        .then((res) => {
            return res.json();
        }).then((data) => {
            response = data
        });
    return response;
}

async function register(newRegister: UserInterface) {

    let response;
    await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRegister),
    })
        .then((res) => {
            return res.json();
        }).then((data) => {
            response = data;
        });
    return response;
}

async function login(email: string, pw: string) {
    const user = { email: email, password: pw };
    let response;
    await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem("token", data.token);
            response = data;
        });
    return response;
}

async function getLoginStatus(onSuccess: Function, onFailure: Function) {
    fetch("/api/auth/getUser", {
        headers: {
            "x-access-token": sessionStorage.getItem("token") as string,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.isLoggedIn) {
                onSuccess(data);
            } else onFailure();
        });
}

async function deleteUser(user: UserInterface, id: string | undefined) {

    await fetch(`/api/auth/${id}`, {
        method: "DELETE",
    }).catch((error) => {
        window.alert(error);
    });
}

const authService = { login, getLoginStatus, register, deleteUser, test };
export default authService;
