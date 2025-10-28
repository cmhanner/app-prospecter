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
          {rows.map(r => ( //  build each table row from povided data in Database and List
            <tr key={r.id}>
              <td><img src={r.img} alt="" /></td>
              <td>{r.name}</td>
              <td>{r.company}</td>
              <td>{"★".repeat(r.rating)}</td>
              <td>{r.industry}</td>
              <td>{r.dev}</td>
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