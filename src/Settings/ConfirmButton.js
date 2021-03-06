import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSize1,greenBoxShadow,color3 } from '../Shared/Styles';
export const ConfirmButtonStyled = styled.div`
margin: 20px;
color: ${color3}
${fontSize1}
padding:5px
cursor: pointer; 
&:hover {
   ${greenBoxShadow}
}
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