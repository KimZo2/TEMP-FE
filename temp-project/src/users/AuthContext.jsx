import { createContext, useContext, useReducer } from "react";

export const reducer = (authInfo, action) => {
    const { token, nickname } = authInfo;

    switch (action.type) {
        case "getToken":
            {
                return localStorage.getItem("token");
            }
        case "getNickName":
            {
                return localStorage.getItem("nickname");
            }

        case "setToken":
            {
                localStorage.setItem("token", action.token);
                authInfo.token = action.token;

                return authInfo;
            }

        case "setNickName":
            {
                localStorage.setItem("nickname", action.nickname);
                authInfo.nickname = action.nickname;

                return authInfo;
            }
    }
}

export const AuthContext = createContext();
export const AuthDispatchContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authInfo, dispatch] = useReducer(reducer, { token: null, nickname: null });

    return (
        <AuthContext.Provider value={authInfo}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);