import React from 'react';
import NewStockForm from './NewStockForm';
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
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStockForm onNewStockCreation={this.handleAddingNewStockToList}/>
      buttonText = "Return to Stock List";
    } else {
      currentlyVisibleState = <StockList stockList={this.state.masterStockList}/>
      buttonText = "Add Stock";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default StockControl;