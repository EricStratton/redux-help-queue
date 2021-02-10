import React from 'react';
import NewStockForm from './NewStockForm';
import StockList from './StockList';
import ItemDetail from './ItemDetail';

class StockControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterStockList: [],
      selectedItem: null
    };
  }

  handleAddingNewStockToList = (newStock) => {
    const newMasterStockList = this.state.masterStockList.concat(newStock);
    this.setState({
      masterStockList: newMasterStockList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterStockList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} />
      buttonText = "Return to Stock List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStockForm onNewStockCreation={this.handleAddingNewStockToList} />
      buttonText = "Return to Stock List";
    } else {
      currentlyVisibleState = <StockList stockList={this.state.masterStockList} onItemSelection={this.handleChangingSelectedItem} />
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