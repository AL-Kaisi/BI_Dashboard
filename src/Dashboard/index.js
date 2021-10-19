import React from 'react';
import Page from '../Shared/Page';
import CoinSpotlight from './CoinSpotlight';
import PriceGrid from './PriceGrid';
import styled from 'styled-components';

const ChartGrid = styled.div`
display: grid;
margin-top: 20px;
grid-gap: 15px;
grid-template-columns: 1fr 3fr;
`
export default function Welcome(){
    return <Page name="dashboard">
   <PriceGrid />  
   <ChartGrid>    
  <CoinSpotlight />
  <div>Chart goes here</div>
  </ChartGrid>
    </Page>
}