import React, { useState } from "react";
import { deleteApp } from "../api/appsApi";

const DeleteApp = (app) => {
    return (
        <div id = "delete-app">
            <h3>Are you sure you want to delete {app.name} </h3>
            <section>
                <button onClick = {deleteApp}>Yes</button>
                <button>No</button>
            </section>
        </div>
    )
}

export default DeleteApp;