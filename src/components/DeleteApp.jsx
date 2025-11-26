import React, { useState } from "react";
import { deleteApp } from "../api/appsApi";

const DeleteApp = ({app, onConfirm, onCancel}) => {
    

    return (
        <div id = "delete-app">
            <h3>Are you sure you want to delete {app.name} </h3>
            <section>
                <button onClick ={() => onConfirm (app._id)}>Yes</button>
                <button onClick={onCancel}>No</button>
            </section>
        </div>
    )
}

export default DeleteApp;