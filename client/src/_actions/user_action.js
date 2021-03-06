import axios from 'axios';
import {
    SIGN_IN_USER,
    SIGN_UP_USER,
    AUTH_USER
} from './types'

export function SignInUser(dataToSubmit) {
    const request = axios.post('/api/signIn', dataToSubmit)
                        .then(response => response.data)

    return {
        type: SIGN_IN_USER,
        payload: request
    }
}

export function SignUpUser(dataToSubmit) {
    const request = axios.post('/api/signUp', dataToSubmit)
                        .then(response => response.data)

    return {
        type: SIGN_UP_USER,
        payload: request
    }
}

export function auth(dataToSubmit) {
    const request = axios.get('/api/auth', dataToSubmit)
                        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}