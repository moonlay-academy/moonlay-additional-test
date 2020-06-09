import React,{Component} from "react";
import IdentitasService from "../services/identitasservice";

export default class Identitas extends Component{
    constructor(props){
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeJobs = this.onChangeJobs.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.state={
            identitas:{
                id:null,
                nama:"",
                tempattinggal:"",
                nomor:"",
                pekerjaan:""
            },
            message:""
        };
    }
    // getData(id){
    //     IdentitasService.get(id)
    //     .then(response => {
    //        this.setState({
    //         identitas:response.data
    //        })
    //        console.log(response.data);
    //     })
    //     .catch(e=>{
    //         console.log(e);
    //     })
    // }
    componentDidMount() {
        this.getData(this.props.match.params.id);
      }
    getData(id) {
        IdentitasService.get(id)
          .then(response => {
            this.setState({
              identitas: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    onChangeNama(e){
        const nama = e.target.value;
        this.setState(function(prevState){
            return{
                identitas:{
                    ...prevState.identitas,
                    nama:nama
                }
            };
        });
    }
    onChangePlace(e){
        const tempattinggal = e.target.value;
        this.setState(function(prevState){
            return{
                identitas:{
                    ...prevState.identitas,
                    tempattinggal:tempattinggal
                }
            };
        });
    }
    onChangeNumber(e){
        const nomor = e.target.value;
        this.setState(function(prevState){
            return{
                identitas:{
                    ...prevState.identitas,
                    nomor:nomor
                }
            };
        });
    }
    onChangeJobs(e){
        const pekerjaan = e.target.value;
        this.setState(function(prevState){
            return{
                identitas:{
                    ...prevState.identitas,
                    pekerjaan:pekerjaan
                }
            };
        });
    }
    updateData(){
        IdentitasService.update(
            this.state.identitas.id,
            this.state.identitas
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The data was updated succesfully!"
            });
            this.props.history.push('/home');
        })
        .catch(e=>{
            console.log(e);
        });
    }
    // componentDidMount(){
    //     this.getData(this.props.match.params.id);
    // }
    deleteData(){
        IdentitasService.delete(this.state.identitas.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/home');
        })
    }
    render(){
        const{identitas} = this.state;
        return(
            <div>
                {identitas ? (
                    <div className="edit-form">
                        <h4>Anggota</h4>
                        <form>
                        <div className="form-group">
                            <label htmlFor="nama">Nama</label>
                            <input
                            type="text"
                            className="form-control"
                            id="nama"
                            value={identitas.nama}
                            onChange={this.onChangeNama}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Tempat tinggal">Tempat tinggal</label>
                            <input
                            type="text"
                            className="form-control"
                            id="tempattinggal"
                            value={identitas.tempattinggal}
                            onChange={this.onChangePlace}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Nomor">Nomor</label>
                            <input
                            type="text"
                            className="form-control"
                            id="nomor"
                            value={identitas.nomor}
                            onChange={this.onChangeNumber}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Pekerjaan">Pekerjaan</label>
                            <input
                            type="text"
                            className="form-control"
                            id="pekerjaan"
                            value={identitas.pekerjaan}
                            onChange={this.onChangeJobs}
                            />
                        </div>
                        </form>
                        <button
                        className="badge badge-danger mr-2"
                        onClick={this.deleteData}
                        >
                        Delete
                        </button>

                        <button
                        type="submit"
                        className="badge badge-success"
                        onClick={this.updateData}
                        >
                        Update
                        </button>
                    </div>

                ):(
                    <h1>No Data</h1>
                )}
            </div>
        );
    }
}