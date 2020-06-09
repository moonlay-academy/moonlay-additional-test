import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:63947/api",
    headers:{
        "Content-type":"application/json"
    }
})