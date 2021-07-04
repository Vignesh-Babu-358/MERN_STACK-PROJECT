import React from 'react';
class Form extends React.Component
{
    constructor()
    {
        super();
        this.state={Name:"",Age:"",Email:"",Phone:"",_id:"",isEdit:false,err:""};
    }

    change = (event) =>
    {
       this.setState({err:""})
       let x = event.target.name;
       let y = event.target.value;

       this.setState({
           [x] : y
       });

    }

    submit = (event) =>
    {
       if((this.state.Name == "" && this.state.Age == "" && this.state.Email == "" && this.state.Phone == "") || (this.state.Name == "" || this.state.Age == "" || this.state.Email == "" || this.state.Phone == ""))
       {
           this.setState({err:"Please enter the required details"});
           event.preventDefault();
       }
        if (!this.state.isEdit)
        {
            
            let data ={
                Name:this.state.Name,
                Age:this.state.Age,
                Email:this.state.Email,
                Phone:this.state.Phone,
                isEdit:this.state.isEdit
            }
          this.props.mydata(data);
        }
        else
        {
           
            let data ={
            _id:this.state._id,
            Name:this.state.Name,
            Age:this.state.Age,
            Email:this.state.Email,
            Phone:this.state.Phone,
            isEdit:this.state.isEdit
           }
           this.props.mydata(data);
        }
    }
    
    componentWillReceiveProps(props)
    { 
        
        if (props.editform._id != null)
        {
            this.setState({
                Name:props.editform.Name,
                Age:props.editform.Age,
                Email:props.editform.Email,
                Phone:props.editform.Phone,
                _id:props.editform._id,
                isEdit:true
            });
        }

    }
    render()
        {
            return(
                    <form  onSubmit={this.submit} autoComplete="off">
                        <div className="mb-3 mt-5">
                            <input onChange={this.change} name="Name" value={this.state.Name} type="text" className=" detform" placeholder="Enter the name"  />
                        </div>
                        <div className="mb-3">
                            <input onChange={this.change} name="Age" value={this.state.Age} type="number" min="18" max="99" className=" detform" placeholder="Enter the age"/>
                        </div>
                        <div className="mb-3">
                             <input onChange={this.change} name="Email" value={this.state.Email} type="email" className=" detform" id="exampleInputEmail1 detid" placeholder="Enter the email"/>
                        </div>
                        <div className="mb-3">
                            <input onChange={this.change} name="Phone" value={this.state.Phone} type="number" className=" detform" placeholder="Enter the phone number"/>
                        </div>
                        <button type="submit" className="btn btn-primary">{this.state.isEdit ? 'Update' : "Create"}</button>
                        <div class="alert alert-danger mt-3" role="alert">
                             {this.state.err}
                        </div>
                    </form>
            )
        }
}

export default Form;