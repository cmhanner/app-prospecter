import "./../css/DataTable.css"
import AppOptions from "./AppOptions";
import React, { useState } from "react";
import EditApp from "./EditApp";
import DeleteApp from "./DeleteApp";
import AppDetail from "../pages/AppDetail";
import { deleteApp } from "../api/appsApi";

const DataTable = ({ rows, onRefresh }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [anchorPos, setAnchorPos] = useState (null);

  function openModal(action, app, buttonLocation) {
    setSelectedApp(app);
    setModalAction(action);
    setAnchorPos (buttonLocation);
    setModalOpen (true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedApp(null);
    setModalAction(null);
    setAnchorPos (null);

  }

  async function doDelete(id) {
    console.log("Deleting app with id:", id);
      try {
        
        await deleteApp(id);
        //  call parent refresh function to update data
        if (onRefresh) {
          await onRefresh();
        }

        //  close the modal and clearing the state
        setModalOpen(false);
        setSelectedApp(null);
        setModalAction(null);
      } catch (error) {
        console.error("Error deleting app:", error);
      }
  }

  async function handleEditSuccess() {
    if (onRefresh) {
      await onRefresh();
    }
    setModalOpen(false);
    setSelectedApp(null);
    setModalAction(null);
  }

  let modalBody = null;
  if (modalAction === "edit") {
    modalBody = (
    <EditApp 
    app = {selectedApp} 
    onDone = {handleEditSuccess}
    
      /> 

    );
  }
  if (modalAction === "delete") {
    modalBody = (
    <DeleteApp 
      app = {selectedApp}
      onConfirm= {() => doDelete (selectedApp._id)}
      onCancel = {() => setModalOpen(false)}
      />
    );

     

  }
  if (modalAction === "details") {
    modalBody = <AppDetail app = {selectedApp} />
  }

  

 

  return (
    <div className="table-wrap">
      <table className="table-style">
        <thead>
          <tr>
            <th>Image</th>
            <th>App</th>
            <th>Company</th>
            <th>Rating</th>
            <th>Industry</th>
            <th>Developer</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => ( //  build each table row from povided data in Database and List
            <tr key={row._id}>
              <td><img src={row.imageUrl} alt={row.name} loading = "lazy"/></td>
              <td>{row.name}</td>
              <td>{row.company}</td>
              <td>{"★".repeat(row.rating)}</td>
              <td>{row.industry}</td>
              <td>{row.developer}</td>
              <td>
                <div className="row-actions">
                 <AppOptions 
                  app = {row}
                  onAction = {openModal} 
                 
                 />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          {modalAction === "delete" && anchorPos && (
            <div 
              className="modal-card" 
              onClick={(e) => e.stopPropagation()}
                style = {{
                  position: "fixed",
                  top: anchorPos.bottom + 8,
                  left: anchorPos.left,
                  
                  
                }}
            >
              <button className = "modal-close" onClick = {closeModal}>✖</button>
              {modalBody}
            </div>
          )}

          {modalAction === "edit" && (
            <div
              className = "modal-card centered"
              onClick = {(e) => e.stopPropagation()}
            >
              <button className = "modal-close" onClick = {closeModal}>✖</button>
              {modalBody}
              </div>
          )}
            
          </div>
    
        )}
    </div>
  );
};

export default DataTable;