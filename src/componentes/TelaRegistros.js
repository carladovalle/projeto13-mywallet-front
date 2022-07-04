import styled from 'styled-components';
import React from 'react';

export default function TelaRegistros() {

    return (
        <Tela>
            <Titulo>
                Olá, fulano
            </Titulo>
            <Registros>
                Não há registros de entradas ou saídas
            </Registros>
            <Buttons>
                <ButtonNovaEntrada>
                    Nova Entrada
                </ButtonNovaEntrada>
                <ButtonNovaSaida>
                    Nova Saída
                </ButtonNovaSaida>
            </Buttons>
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
const Titulo = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 25px;
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
`
const Registros = styled.div`
    background-color: #FFFFFF;
    width: 326px;
    height: 446px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 22px;
    margin-top: 22px;
    color: #868686;
    font-size: 20px;
    text-align: center;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 13px;
    margin-bottom: 16px;
`
const ButtonNovaEntrada = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
    margin-left: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonNovaSaida = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`