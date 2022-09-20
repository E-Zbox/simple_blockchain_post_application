import { useState } from "react";

const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    return [
        state,
        ({ target: { value, name } }) =>
            setState((prevState) => ({ ...prevState, [name]: value })),
    ];
};

export default useForm;
