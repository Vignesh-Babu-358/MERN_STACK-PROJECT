import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
class Action extends React.Component
{
    constructor()
    {
        super();
        this.state = {url:"/add_user"};
    }

    render()
    {
        return <div className="mt-5 ">
            <h3 className="mt-5 adm">Welcome Admin</h3>
              <div className="mt-5">
                <a className="btn btn-primary mt-5 actbutton" href="/add_user" role="button">Add User</a> <br/>
                <a className="btn btn-primary mt-5 actbutton" href="/edit_user" role="button">Edit user</a> <br/>
                <a className="btn btn-primary mt-5 actbutton" href="/delete_user" role="button">Delete user</a> <br/>
              </div>
                
        </div>
    }
}

export default Action;