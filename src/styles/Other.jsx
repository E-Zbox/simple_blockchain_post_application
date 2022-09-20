import styled from "styled-components";

export const Header = styled.h4`
    font-size: 1.75rem;
    color: ${({
        theme: {
            colors: { yellow01 },
        },
    }) => yellow01};
    text-align: center;
`;

export const SubHeader = styled.span`
    font-size: 0.8rem;
    color: #000c;
    text-align: center;
`;

export const AddressContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: var(--ten-px);
    /* border: 1px solid blue; */
`;

export const AddressText = styled.h4`
    width: fit-content;
    color: white;
    background-color: ${({
        theme: {
            colors: { blue02 },
        },
    }) => blue02};
    padding: var(--three-px);
`;

export const Form = styled.form`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    box-sizing: border-box;

    * {
        font-size: 0.85rem;
        font-weight: 400;
        border: none;
        margin: var(--three-px) 0px;
    }

    input,
    textarea {
        outline: 1px solid #0044;
    }
`;

export const FormInput = styled.input`
    padding: var(--three-px);
    background-color: #fffe;
`;

export const FormTextArea = styled.textarea`
    height: 200px;
    padding: var(--three-px);
    resize: none;
    background-color: #fffe;
`;

export const Button = styled.button`
    width: 100%;
    border: 0px;
    font-size: 0.85rem;
    font-weight: 400;
    color: #ddd;
    background-color: ${({
        theme: {
            colors: { blue01 },
        },
    }) => blue01};
    transition: 250ms ease-in-out;
    padding: calc(var(--ten-px)) 0px;
    transform: scale(0.97);

    &:hover {
        transform: scale(1);
        background-color: ${({
            theme: {
                colors: { blue02 },
            },
        }) => blue02};
    }
`;

export const PostMessage = styled.p`
    font-size: 0.9rem;
    color: #000b;
`;

export const PostName = styled.h4`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${({
        theme: {
            colors: { blue02 },
        },
    }) => blue02};
`;

export const Dot = styled.div`
    width: 5px;
    height: 5px;
    margin: 0px var(--three-px);
    background-color: ${({
        theme: {
            colors: { blue02 },
        },
    }) => blue02};
    border-radius: 50%;
`;
