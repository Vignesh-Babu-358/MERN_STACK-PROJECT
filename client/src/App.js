import React from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';
import Form from './form';
import Table from './table';
import axios from 'axios';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={Data:[], editdata:[],redirect:false};
  }

  create = (data) =>
  {
      if (!data.isEdit)
      {
        axios.post("http://localhost:5000/info",data).then(res => {
          this.getall();
      });
      }
      else
      {
        axios.put("http://localhost:5000/info/update",data).then(res => {
          this.getall();
      });
      }
  }

  componentDidMount()
  {
    this.getall();
  }

  getall()
  {
     axios.get("http://localhost:5000/info").then(res => {
       this.setState({Data:res.data})
     })
  }

  update = (data) =>{
    console.log(data);
    this.setState({editdata:data});
  }

  delete =(data) =>
  {
    console.log(data);
    var d = window.confirm("Are you sure?")
    if(d)
    {
      axios.delete(`http://localhost:5000/info/delete/${data._id}`).then(res =>
      {
        console.log(res);
        this.getall();
      });
    }
  }


  render()
  {
    return( <div>
                  <nav className="navbar">
                      <h3 className="navbar-text">
                            User Management System
                    </h3>
                    <ul className="logout mt-1">
                      <li className="nav-item"><a href="/" className="btn btn-primary">Logout</a></li>
                    </ul>
  
              </nav>
              <div id="img" className="container mt-5">
                  <div className="row">
                      <div className="col-6 mt-3">
                        <Form mydata={this.create} editform={this.state.editdata}/>
                      </div>
                      <div className="col-6 mt-3">
                          <Table getdata={this.state.Data} upddata={this.update} deldata={this.delete}/>
                      </div>
                    </div>
                </div>
              </div> 
            
    )
  }
}




export default App;
