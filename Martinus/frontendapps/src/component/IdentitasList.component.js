import React,{Component} from "react";
import IdentitasService from "../services/identitasservice";
import {Link} from "react-router-dom";
export default class IdentitasList extends Component{
    constructor(props){
        super(props);
        this.retrieveData = this.retrieveData.bind(this);
        this.state ={
            identity:[],
            number:1
        }
    }
    componentDidMount(){
        this.retrieveData();
    }
    retrieveData(){
        IdentitasService.getAll()
        .then(response=>{
            this.setState({
                identity:response.data
            });
            console.log(response.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }
    render(){
        const{identity}=this.state;
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Tempat Tinggal</th>
                                <th>Nomor Telepon</th>
                                <th>Pekerjaan</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {identity && identity.map((identityy,index)=>(
                              
                            <tr>
                                  <td>{this.state.number++}</td>
                                  <td>{identityy.nama}</td>
                                  <td>{identityy.tempattinggal}</td>
                                  <td>{identityy.nomor}</td>
                                  <td>{identityy.pekerjaan}</td>
                                  <td><Link to={"/home/"+identityy.id} className="badge badge-warning">Detail</Link></td>
                            </tr>
                            ))}  
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}