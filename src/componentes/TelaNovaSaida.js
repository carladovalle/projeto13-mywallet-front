import styled from 'styled-components';
import React from 'react';

export default function TelaNovaSaida() {

    return (
        <Tela>
            <Titulo>
                Nova Saída
            </Titulo>
            <Input type="text" placeholder="Valor" />
            <Input type="text" placeholder="Descrição" />
            <Salvar>
                Salvar Saída
            </Salvar>
        </Tela>
    )

}

const Tela = styled.div`
    background-color: #8C11BE;
    height: 667px;
    width: 375px;
    overflow-y: hidden;

    a:link {
        text-decoration: none;
    }
`
const Titulo = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 25px;
    margin-left: 24px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
`
const Input = styled.input`
    width: 326px;
    height: 58px;
    background-color: #FFFFFF;
    margin-bottom: 13px;
    margin-left: 24px;
    border-radius: 5px;

    &::placeholder {
        color: #000000;
        font-size: 20px;
        font-weight: 400;
    }
`
const Salvar = styled.div`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 26px;
`