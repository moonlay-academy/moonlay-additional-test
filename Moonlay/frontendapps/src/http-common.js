import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:52506/api",
    headers:{
        "Content-type":"application/json"
    }
});