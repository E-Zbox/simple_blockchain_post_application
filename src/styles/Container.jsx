import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Contents = styled.div`
    width: 70%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: grid;
    place-content: center;
    margin: var(--ten-px) 0px;
`;

export const PostContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
`;

export const GetPostsContainer = styled.div`
    width: 65%;
    height: 100%;
    padding: var(--ten-px);
`;

export const AddPostContainer = styled.div`
    width: 30%;
    height: fit-content;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #cc990045; */
    padding: calc(var(--ten-px));
    box-sizing: border-box;
    /* border: 1px solid green; */
`;

export const PostDiv = styled.div`
    padding: var(--seven-px);
    background-color: ${({
        theme: {
            colors: { yellow02 },
        },
    }) => yellow02};
    border-radius: 3px;
`;
