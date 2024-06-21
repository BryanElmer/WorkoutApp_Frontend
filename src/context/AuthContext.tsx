"use client";

import React, { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';
import { User } from '@/types/types';

// Define state and action types
interface State {
    user: User | null;
}

type Action =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };

// Reducer function
export const authReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
}

interface AuthContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const userString = localStorage.getItem('user');

        if (userString) {
            const user = JSON.parse(userString);
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, [])

    console.log('AuthContext state: ', state);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}