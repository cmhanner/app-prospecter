import "./../css/DataTable.css"
const DataTable = ({ rows }) => {
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
                  <button>➕</button>
                  <button>📝</button>
                  <button>ℹ️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;