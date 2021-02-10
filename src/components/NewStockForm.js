import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewStockForm(props) {

  function handleNewStockFormSubmission(event) {
    event.preventDefault();
    props.onNewStockCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <>
      <ReusableForm formSubmissionHandler={handleNewStockFormSubmission}
      buttonText="Create Stock Item"/>
    </>
  );
}

NewStockForm.propTypes = {
  onNewStockCreation: PropTypes.func
};

export default NewStockForm;