import React, {Component} from 'react'
import styled from 'styled-components'

import {
  MainContainer,
  Container,
  Heading,
  Input,
  EditContainer,
  Button,
  InlineText,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  getText = event => {
    this.setState({text: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {isEditable, text} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <EditContainer>
            {isEditable ? (
              <Input onChange={this.getText} type="text" />
            ) : (
              <InlineText> {text} </InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}> Edit </Button>
            )}
          </EditContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableTextInput
