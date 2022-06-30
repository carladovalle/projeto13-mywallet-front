import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function TelaCadastro() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    function erroCadastro(erro) {
        alert("Erro")
    }

    function cadastrar (event) {

        event.preventDefault();
        const body = {
            name, 
            email,
            password,
            checkPassword
        }
        const promise = axios.post("http://localhost:3000/cadastro", body)
        promise
            .then(() => navigate("/login"))
            .catch(erro => erroCadastro(erro))

    }

    return (

        <Tela>
            <Logo>MyWallet</Logo>
            <form onSubmit={cadastrar}>
                <Dados>
                    <Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <Input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <Input type="password" placeholder="Confirme sua senha" value={checkPassword} onChange={e => setCheckPassword(e.target.value)} />
                </Dados>
                <Button type="submit" >
                    Cadastrar
                </Button>
        </form>
        <Link to={"/login"}>
            <IrParaLogin>Já tem uma conta? Faça login!</IrParaLogin>
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
    overflow-y: hidden;

    a:link {
        text-decoration: none;
    }
`
const Logo = styled.div`
    color: #FFFFFF;
    font-size: 32px;
    margin-top: 95px;
    margin-left: 100px;
`
const Dados = styled.div`
    margin-top: 28px;
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
    }

`
const Button = styled.button`
    background-color: #A328D6;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 20px;
    border: 1px solid #A328D6;
`
const IrParaLogin = styled.div`
    font-size: 15px;
    color: #FFFFFF;
    text-decoration: underline;
    margin-top: 32px;
    margin-left: 70px;
`
