import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewStockForm(props) {

  function handleNewStockFormSubmission(event) {
    event.preventDefault();
    props.onNewStockCreation({name: event.target.name.value, description: event.target.description, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <>
      <form onSubmit = {handleNewStockFormSubmission}>
        <input type='text' name='name' placeholder='Name of new stock item'/>
        <textarea name='description' placeholder='Describe your new stock item:'/>
        <input type='number' name='quantity' placeholder='How many items would you like to sell?'/>
        <button type='submit'>Create new stock</button>
      </form>
    </>
  );
}

NewStockForm.propTypes = {
  onNewStockCreation: PropTypes.func
};

export default NewStockForm;