import React,{Component} from "react";
import ItemDataService from "../services/item.service";

export default class AddItems extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.saveItems = this.saveItems.bind(this);
        this.newItems = this.newItems.bind(this);
        this.state = {
            id: null,
            name: "",
            isComplete: false,
            submitted:false,
        }
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    saveItems(){
        var data = {
            name: this.state.name,
            isComplete: this.state.isComplete
        };
        ItemDataService.create(data)
        .then(response =>{
            this.setState({
                id: response.data.id,
                name: response.data.name,
                isComplete: response.data.isComplete,
                submitted:true
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }
    newItems() {
        this.setState({
          id: null,
          name: "",
          isComplete: false
        });
      }
      render(){
          return(
              <div className="submit-form">
                  {this.state.submitted ?(
                    <div>
                        <h4>You have submited</h4>
                        <button className="btn btn-success" onClick={this.newItems}>Add</button>
                    </div>
                  ):(
                    <div>
                        <div className="form-group">
                            
                        <label htmlFor="name">Name</label>
                        <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="title"
              />
                        </div>
                        
                    <button onClick={this.saveItems} className="btn btn-success">
                    Submit
                  </button>
                  </div>
                  )}
              </div>
          );
      }
}