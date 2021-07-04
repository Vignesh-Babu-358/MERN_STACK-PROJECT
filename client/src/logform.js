import React from 'react';
import axios from 'axios';
class Logform extends React.Component
{
    constructor()
    {
        super();
        this.state = {Email:"",Password:"",email:"",pass:"",Err:""}
    }
    
    change =(event) =>
    {
        this.setState({Err:""})
        let x = event.target.name
        let y = event.target.value;
        this.setState({
            [x] : y
        });
    }

    submit = (event) =>
    {
       event.preventDefault();
       let data ={
           email:this.state.email,
           pass:this.state.pass,
           Email:this.state.Email,
           Password:this.state.Password,
           err:this.state.err
        }

       this.props.logdata(data);

    }

    componentWillReceiveProps(props)
    {
        this.setState({Err:props.showerr});
    }

    componentDidMount()
    {
        this.getall()
    }

    getall()
    {
        axios.get("http://localhost:5000/").then(res =>
        {
            res.data.map(e =>{
                this.setState({email:e.Email,pass:e.Password});
            });

           
        });
        
    }
    render()
    {
        return <div>
             <form onSubmit={this.submit} className="mt-5" id="form" autoComplete="off">
                        <div className="mb-3 mt-5" id="si">
                            <input  name="Email" value={this.state.Email} onChange={this.change} type="email" className="mt-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                            <input name="Password" value={this.state.Password} onChange={this.change} type="password" className="mt-3" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn mt-3">Login</button>
                        <div class="alert alert-danger mt-3" role="alert">
                             {this.state.Err}
                        </div>
                        </form>
        </div>
    }
}


export default Logform;