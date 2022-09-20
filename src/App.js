import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// styles
import GlobalStyles from "./styles/GlobalStyles";
import {
    Container,
    Contents,
    HeaderContainer,
    PostContainer,
    GetPostsContainer,
    AddPostContainer,
    PostDiv,
} from "./styles/Container";
import {
    Header,
    SubHeader,
    Form,
    FormInput,
    FormTextArea,
    Button,
    PostMessage,
    PostName,
    Dot,
    AddressContainer,
    AddressText,
} from "./styles/Other";
// hooks
import useForm from "./hooks/useForm";
// data
import { theme, postABI, deployedContractNetwork } from "./data";
// api
import { getPosts, createPost } from "./api";

// smart contract
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
const PostContractAddress = deployedContractNetwork.goerli;
const PostContractABI = postABI;

const App = () => {
    const [signer, setSigner] = useState(null);
    const [postContract, setPostContract] = useState();
    const [formState, setFormState] = useForm({
        input_name: "",
        input_message: "",
    });
    const [postsData, setPostsData] = useState([]);

    const fetchPostsData = () => {
        console.log(`I just got called ${Date()}`);
        getPosts(postContract)
            .then((response) => {
                response.forEach(([name, message, date]) =>
                    setPostsData((prevState) => [
                        ...prevState,
                        { name, message, date },
                    ])
                );
            })
            .catch((err) => console.log("an error occurred ", err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await createPost(
            postContract,
            formState.input_name,
            formState.input_message
        );

        response?.hash.length > 0 && fetchPostsData();
    };

    useEffect(() => {
        if (signer == null) {
            provider.send("eth_requestAccounts", []).then(() =>
                provider.listAccounts().then((accounts) => {
                    setSigner(provider.getSigner(accounts[0]));
                })
            );
        }
    }, []);

    useEffect(() => {
        setPostContract(
            new ethers.Contract(PostContractAddress, PostContractABI, signer)
        );
    }, [signer]);

    useEffect(() => {
        signer !== null && fetchPostsData();
    }, [postContract]);

    // console.table(postContract);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <Contents>
                        <HeaderContainer>
                            <Header>Post Anything on the Blockchain</Header>
                            <SubHeader>
                                This application is your one stop to add
                                anything on the blockchain. Just connect your
                                metamask and get started
                            </SubHeader>
                        </HeaderContainer>
                    </Contents>
                    <AddressContainer>
                        Address:{" "}
                        <AddressText>{signer && signer._address}</AddressText>
                    </AddressContainer>
                    <PostContainer>
                        <GetPostsContainer>
                            <PostDiv>
                                <PostMessage>
                                    This application is your one stop to add
                                    anything on the blockchain. Just connect
                                    your metamask and get started
                                </PostMessage>
                                <PostName>
                                    {" "}
                                    <Dot></Dot> benzman
                                </PostName>
                            </PostDiv>
                            {postsData.map(({ name, message }, index) => (
                                <PostDiv key={index}>
                                    <PostMessage>{message}</PostMessage>
                                    <PostName>
                                        <Dot></Dot> {name}
                                    </PostName>
                                </PostDiv>
                            ))}
                        </GetPostsContainer>
                        <AddPostContainer>
                            <Form>
                                <FormInput
                                    placeholder="Enter name"
                                    type="text"
                                    name="input_name"
                                    required
                                    value={formState.input_name || ""}
                                    onChange={setFormState}
                                />
                                <FormTextArea
                                    placeholder="Enter message to publish on blockchain"
                                    name="input_message"
                                    required
                                    value={formState.input_message || ""}
                                    onChange={setFormState}
                                />
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </AddPostContainer>
                    </PostContainer>
                </Container>
            </ThemeProvider>
            <GlobalStyles />
        </>
    );
};

export default App;
