import DeleteApp from "./DeleteApp";
import EditApp from "./EditApp";
import React, { useState } from "react";

const AppOptions = ({app, onAction}) => {
    
    

  return (
    <div className = "app-options">
      <button  id = "add-to-list" title = "Add app to List">➕</button>
      <button onClick={() => onAction("delete", app)} id = "delete-btn" title = "Delete App from Database">➖</button> 
      <button onClick={() => onAction("edit", app)} id = "edit-btn" title = "Edit App">📝</button>
      <button onClick={() => onAction("details", app)} id = "detail-btn" title = "Details of App">ℹ️</button>
    </div>
  );
};

export default AppOptions;