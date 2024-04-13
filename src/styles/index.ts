import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Campo = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 10px;
  background: none;
  padding: 16px;
  font-size: 1rem;
  color: #8b4d52;
  font-size: 18px;
  letter-spacing: 1px;
  width: 100%;
`

export const Button = styled.button`
  text-transform: capitalize;
  padding: 16px;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  color: #fff;
  border: none;
  border-radius: 4px;
`

export default EstiloGlobal
