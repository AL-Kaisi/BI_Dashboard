import React from 'react';
export const AppContext = React.createContext();

const cc = require('cryptocompare');
cc.setApiKey('0fd59d78587562809e801509cc6febb4c40c932159c0f88f975c2fa27d24db51')
export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites

        }
    }

    componentDidMount =() => {
       this.fetchCoins();
    }

    fetchCoins =async () => {
      let coinList = (await cc.coinList()).Data;
  
      this.setState({coinList});
    }


    confirmFavorites = () =>{
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash',JSON.stringify({
        test: 'hello'
        }));
    }
    savedSettings(){
        let cryptoDashData =JSON.parse(localStorage.getItem('cryptoDash'));

        if(!cryptoDashData){
        return {page: 'settings', firstVisit:true}
        }
        return {};
    }
    setPage = page => this.setState({page});

    render(){
        return(
         <AppContext.Provider value={this.state}>
            {this.props.children}
         </AppContext.Provider>
        )
    }
}