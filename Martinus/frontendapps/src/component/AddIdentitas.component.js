import React,{Component} from "react";
import IdentitasService from "../services/identitasservice";
export default class AddIdentitas extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangePlace =this.onChangePlace.bind(this);
        this.saveData = this.saveData.bind(this);
        this.newData = this.newData.bind(this);
        this.state={
            id:null,
            nama:"",
            tempattinggal:"",
            nomor:"",
            pekerjaan:"",

            submitted:false
        }
    }
    onChangeName(e){
        this.setState({
            nama: e.target.value
        });
    }
    onChangePlace(e){
        this.setState({
            tempattinggal:e.target.value
        });
    }
    onChangeNumber(e){
        this.setState({
            nomor: e.target.value
        });
    }
    onChangeJob(e){
        this.setState({
            pekerjaan:e.target.value
        });
    }
    saveData(){
        var data={
            nama:this.state.nama,
            tempattinggal:this.state.tempattinggal,
            nomor:this.state.nomor,
            pekerjaan:this.state.pekerjaan
        };
        IdentitasService.create(data)
        .then(response =>{
            this.setState({
                id:response.data.id,
                nama:response.data.nama,
                tempattinggal:response.data.tempattinggal,
                nomor:this.state.nomor,
                pekerjaan:this.state.pekerjaan,
                submitted : true
            });
            console.log(response.data);
        })
        .catch(e=>{
            console.log(e);
        });
    }
    newData(){
        this.setState({
            id:null,
            nama:"",
            tempattinggal:"",
            nomor:"",
            pekerjaan:"",
            submitted:false
        })
    }
    render(){
        return(
            <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newData}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Nama">Nama</label>
              <input
                type="text"
                className="form-control"
                id="nama"
                required
                value={this.state.nama}
                onChange={this.onChangeName}
                name="nama"
              />
            </div>

            <div className="form-group">
              <label htmlFor="TempatTinggal">TempatTinggal</label>
              <input
                type="text"
                className="form-control"
                id="TempatTinggal"
                required
                value={this.state.tempattinggal}
                onChange={this.onChangePlace}
                name="tempattinggal"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Nomor Telepon">Nomor Telepon</label>
              <input
                type="text"
                className="form-control"
                id="nomor"
                required
                value={this.state.nomor}
                onChange={this.onChangeNumber}
                name="nomor"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Pekerjaan">Pekerjaan</label>
              <input
                type="text"
                className="form-control"
                id="pekerjaan"
                required
                value={this.state.pekerjaan}
                onChange={this.onChangeJob}
                name="pekerjaan"
              />
            </div>
            <button onClick={this.saveData} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
        )
    }
}