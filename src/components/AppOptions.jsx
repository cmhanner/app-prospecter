import  "./../css/AppOptions.css";
import DeleteApp from "./DeleteApp";
import EditApp from "./EditApp";
import React, { useState } from "react";

const AppOptions = ({app, onAction}) => {
  //  function to handle button clicks and pass action to parent, and takes button location
    const handleClick = (action) => (e) => {
      const buttonLocation = e.currentTarget.getBoundingClientRect();
      onAction(action, app, buttonLocation);
    }
    

  return (
    <div className = "app-options">
      {/* <button  id = "add-to-list" title = "Add app to List">➕</button> */}
      <button onClick={handleClick("delete")} id = "delete-btn" title = "Delete App from Database">➖</button> 
      <button onClick={handleClick("edit")} id = "edit-btn" title = "Edit App">📝</button>
      {/* <button onClick={handleClick("details")} id = "detail-btn" title = "Details of App">ℹ️</button> */}
    </div>
  );
};

export default AppOptions;