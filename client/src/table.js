import React from 'react';

class Table extends React.Component
{
    constructor()
    {
        super();
    }


    render()
    {
        return(

            <table className="table mt-5">
            <thead>
              <tr>
                <th className="tab" scope="col">Name</th>
                <th className="tab" scope="col">Age</th>
                <th className="tab" scope="col">Email</th>
                <th className="tab" scope="col">Phone</th>
                <th className="tab" scope="col">edit</th>
                <th className="tab" scope="col">delete</th>
              </tr>
            </thead>
            <tbody>
              {
                  this.props.getdata.length > 0 ?
                  (
                    this.props.getdata.map(e =>
                      <tr key={e._id} >
                        <td>{e.Name}</td>
                        <td>{e.Age}</td>
                        <td>{e.Email}</td>
                        <td>{e.Phone}</td>
                        <td><button onClick={event =>{
                          this.props.upddata(e);
                        }} type="submit" className="btn btn-primary">Edit</button></td>
                        <td><button onClick={event =>{
                          this.props.deldata(e);
                         }} type="submit" className="btn btn-primary">delete</button></td>
                      </tr>
                      )
                  )
                  :
                  (
                     <tr>
                       <td>
                         no data
                       </td>
                     </tr>

                  )
              }
            </tbody>
          </table>
        )
    }
}

export default Table;