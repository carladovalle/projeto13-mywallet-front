import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function TelaLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function erroLogin(erro) {
        alert("Erro")
    }

    function sucessoLogin(resposta) {
        navigate("/")
    }

    function logar(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }
        const promise = axios.post("", body)
        promise
            .then(resposta => {
                sucessoLogin(resposta)
            })
            .catch(erro => {
                erroLogin(erro)
            })
    }

    return (
        <Tela>
            <Logo>MyWallet</Logo>
            <form onSubmit={logar}>
                <Dados>
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                </Dados>
                <Button type="submit">
                    Entrar
                </Button>
            </form>
            <Link to={"/cadastro"}>
                <IrParaCadastro>Não tem uma conta? Cadastre-se!</IrParaCadastro>
            </Link>
        </Tela>
    )
}

const Tela = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #8C11BE;
    height: 667px;
    width: 375px;

    a:link {
        text-decoration: none;
    }

`
const Logo = styled.div`
    color: #FFFFFF;
    font-size: 32px;
    margin-top: 159px;
    margin-left: 100px;
`
const Dados = styled.div`
    margin-top: 24px;
    margin-left: 20px;
`
const Input = styled.input`
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;

    &::placeholder {
        color: #000000;
        font-size: 20px;
        font-weight: 400;
    }
`
const Button = styled.button`
    background-color: #A328D6;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #A328D6;
`
const IrParaCadastro = styled.div`
    font-size: 15px;
    color: #FFFFFF;
    text-decoration: underline;
    margin-top: 32px;
    margin-left: 70px;
`