import React from 'react';
import NewStockForm from './newNewStockForm';
import StockList from './StockList';

class StockControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStockList: []
    };
  }

  handleAddingNewStockToList = (newStock) => {
    const newMasterStockList = this.state.masterStockList.concat(newStock);
    this.setState({
      masterStockList: newMasterStockList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currenttlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currenttlyVisibleState = <NewStockForm onNewTicketCreation={this.handleAddingNewStockToList}/>
      buttonText = "Return to Stock List";
    } else {
      currenttlyVisibleState = <StockList stockList={this.state.masterStockList}/>
      buttonText = "Add Stock";
    }
    return (
      <>
        {currenttlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default StockControl;