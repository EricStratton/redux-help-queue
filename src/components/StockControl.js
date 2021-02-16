import React from 'react';
import NewStockForm from './NewStockForm';
import StockList from './StockList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StockControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    };
  }

  handleAddingNewStockToList = (newStock) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = newStock;
    const action = {
      type: 'ADD_STOCK',
      id: id,
      name: name,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.masterStockList[id];
    this.setState({selectedItem: selectedItem});
  }

  handleEditStockInList = (stockToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = stockToEdit;
    const action = {
      type: 'ADD_STOCK',
      id: id,
      name: name,
      description: description,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  handleSellingStockInList = (stockToSell, toIncrease) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = stockToSell;
    let action;
    if (toIncrease) {
        action = {
        type: 'ADD_STOCK',
        name: name,
        description: description,
        quantity: quantity + 1,
        id: id 
        }
    } else {
      action = {
        type: 'ADD_STOCK',
        name: name,
        description: description,
        quantity: quantity - 1,
        id: id 
        }
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  } 

  handleDeletingStock = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_STOCK',
      id: id
    }
    dispatch(action);
    this.setState({ selectedItem: null });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditStockInList}/>
      buttonText = "Return to Stock List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete={this.handleDeletingStock} onClickingEdit={this.handleEditClick} onClickingSell={this.handleSellingStockInList}/>
      buttonText = "Return to Stock List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewStockForm onNewStockCreation={this.handleAddingNewStockToList} />
      buttonText = "Return to Stock List";
    } else {
      currentlyVisibleState = <StockList stockList={this.props.masterStockList} onItemSelection={this.handleChangingSelectedItem} />
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

StockControl.propTypes = {
  masterStockList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterStockList: state
  }
}

StockControl = connect(mapStateToProps)(StockControl);

export default StockControl;