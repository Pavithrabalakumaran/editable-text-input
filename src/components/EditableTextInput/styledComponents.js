import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const Container = styled.div`
  height: 150px;
  padding: 30px;
  margin: auto;
  background-color: white;
  border-radius: 12px;
  width: 400px;
  color: black;
`

export const Heading = styled.h1`
  color: black;
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
`

export const Input = styled.input`
  border: solid 2px #cbd2d9;
  background-color: transparent;
  border-radius: 2px;
  margin: 10px;
  padding: 10px;
  height: 30px;
  width: 300px;
`
export const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d946ef;
  color: white;
  border-radius: 2px;
  border: none;
  outline: none;
  height: 30px;
  font-size: 15px;
`
export const InlineText = styled.p`
  display: inline;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
`
