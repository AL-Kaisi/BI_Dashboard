import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const ConfirmButtonStyled = styled.div`
margin: 20px;
color: green;
cursor: pointer; 
`;
export const CenterDiv = styled.div`
display:grid;
justify-content: center;
`;
export default function ConfirmButton() {
    return (
 <AppContext.Consumer>
   

 {({confirmFavorites}) =>
  <CenterDiv>
    <ConfirmButtonStyled onClick={confirmFavorites} >
     confirmFavorites
     </ConfirmButtonStyled>
     </CenterDiv>
    }
 </AppContext.Consumer>
        )
}