import DeleteApp from "./DeleteApp";
import EditApp from "./EditApp";
import React, { useState } from "react";

const AppOptions = () => {
    
    

  return (
    <div className = "app-options">
       <button id = "add-to-list">➕</button>
       <button id = "delete-btn">&#128507;</button> 
        <button id = "edit-btn">📝</button>
        <button id = "detail-btn">ℹ️</button>
          
    
    </div>
  );
};

export default AppOptions;