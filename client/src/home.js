import React from 'react';
import ReactDOM from 'react-dom'
import './home.css';
import Logform from './logform';
import Action from './action';
import img from './mernimage.png';
import axios from 'axios';


class Home extends React.Component
{
    constructor()
    {
        super();
        this.state = {issubmit:false, err:""}
    }
     
    check =(data) =>
    {
      if (data.Email !== "" && data.Password !== "")
      {
        if (data.Email !== data.email && data.Password !== data.pass)
        {
            this.setState({err:"Invalid email and password"});
        }
        else if (data.Email !== data.email)
        {
            this.setState({err:"Invalid email"});
        }
        else if (data.pass !== data.Password)
        {
            this.setState({err:"Invalid password"});
        }
        else
        {
           this.setState({err:"Welcome Admin"});
           this.setState({issubmit:true});
        }
      }
      else
      {
          this.setState({err:"Please fill the required fields"})
      }  
        
    }
    render()
    {
        return <div>
                    <nav className="navbar navbar-expand-lg navbar-collapse" id="navbarTogglerDemo01" >

                          <h3 className="navbar-text navbar-collapse" id="navbarTogglerDemo01">
                                 User Management System
                         </h3>
                        
                   </nav>
                        <div className="container mt-5">
                  <div className="row">
                      <div className="col-6" id="line">
                       <img  className="img-fluid" src={img}></img>
                      </div>
                      <div className="col-6 mt-5">
                            {this.state.issubmit  ? <Action /> : <Logform logdata={this.check} showerr={this.state.err} /> }
                      </div>
                    </div>
                </div>
                </div>
    }
}













export default Home;