import styled, { css } from "styled-components"

const StyledHeader = styled.h1`
  color: #3a3ac9;
  font-family: Arial, Helvetica, sans-serif;
`

const StyledData = styled.p`
  color: #3a3ac9;
  font-weight: 700;
`

type TStyledButtonProps = {
  varient?: "success" | "failed"
}

const StyledButton = styled.button<TStyledButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid black;
  margin: 0 8px;
  padding: 8px 16px;
  cursor: pointer;
  ${(props)=> {
    if(props.varient === "success"){
      return css`
        border-color: green;
        color: green;
      `
    }
    if(props.varient === "failed"){
      return css`
        border-color: red;
        color: red;
      `
    }
  } };
`


function App() {


  return (
    <>
    <StyledHeader>Gabriel Moreira</StyledHeader>
    <StyledData>gabrielgbm97@gmail.com</StyledData>
    <StyledData>(31) 9 9999 9999</StyledData>
    <StyledData>brasil</StyledData>

    <StyledButton varient='success'>Adicionar</StyledButton>
    <StyledButton varient='failed'>Remover</StyledButton>
    <StyledButton>Detalhes</StyledButton>

    </>
  )
}

export default App
