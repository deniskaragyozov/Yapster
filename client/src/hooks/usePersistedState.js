import { useState } from "react";

export default function usePersistedState(stateKey, initialState){
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);
        if(!persistedState){
            return typeof initialState === 'function' ? initialState() : initialState;
        }

        const persistedStateData = JSON.parse(persistedState);

        return persistedStateData;
    });

    const setPersistedState = (input) => {
        const value = typeof input === 'function' 
        ? input(state) 
        : input

        const persistedData = JSON.stringify(value);

        localStorage.setItem(stateKey, persistedData);
        
        setState(value); 
    }

    return [
        state,
        setPersistedState
    ]
}