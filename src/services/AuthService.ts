import axios from "axios"

const baseUrl = 'localhost:8080/auth'

const login = async (username: string , password: string)  => {
    const resp = await axios.post<{accessToken: string}>(`${baseUrl}/login`, {
        username,
        password
    })

    const token = resp.data.accessToken;
    return token
}

export { login }