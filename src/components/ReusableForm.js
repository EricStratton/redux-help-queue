import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit = {props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Name of new stock item'/>
        <textarea name='description' placeholder='Describe your new stock item:'/>
        <input type='number' name='quantity' placeholder='How many items would you like to sell?'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;