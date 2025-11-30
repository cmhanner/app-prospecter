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

  
  const [result, setResult] = useState("");

  function openModal(action, app, buttonLocation) {
    setSelectedApp(app);
    setModalAction(action);
    setAnchorPos (buttonLocation);
    setModalOpen (true);
  }

  function closeModal() {
    setModalOpen(false);
    setResult("");
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

        setResult(`"${selectedApp.name}" deleted successfully.`);

        //  close the modal and clearing the state
       
      } catch (error) {
        console.error("Error deleting app:", error);
        setResult("Error deleting app");
      }
  }

  async function handleEditSuccess(id) {
    console.log("Edited app with id:", id);
    if (onRefresh) {
      await onRefresh();
    }
    setResult(`"${selectedApp.name}" deleted successfully.`);
   

  }

  let modalBody = null;
  if (modalAction === "edit" && selectedApp) {
    modalBody = (
    <EditApp 
    app = {selectedApp} 
    onDone = {handleEditSuccess}
    
      /> 

    );
  }
  if (modalAction === "delete" && selectedApp) {
    modalBody = (
    <DeleteApp 
      app = {selectedApp}
      onConfirm= {doDelete}
      // onCancel = {closeModal}
      />
    );

     

  }
  if (modalAction === "details" && selectedApp) {
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

    {result && (
        <p className="status-message" aria-live="polite">
          {result}
        </p>
      )
    }

        {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          {modalAction === "delete" &&  (
            <div 
              className="modal-card" 
              onClick={(e) => e.stopPropagation()}   
            >
              <button className = "modal-close" onClick = {closeModal}>✖</button>
              {modalBody}

               {result && (
                    <p className="status-message" aria-live="polite">
                      {result}
                    </p>
                  )
                }  
            </div>
          )}

          {modalAction === "edit" && (
            <div
              className = "modal-card centered"
              onClick = {(e) => e.stopPropagation()}
            >
              <button className = "modal-close" onClick = {closeModal}>✖</button>
              {modalBody}

              {result && (
                    <p className="status-message" aria-live="polite">
                      {result}
                    </p>
                  )
                }  
            </div>
          )}
          
        </div>
    
        )} {/* When Modal is Open */}
        
    </div>
  );
};

export default DataTable;