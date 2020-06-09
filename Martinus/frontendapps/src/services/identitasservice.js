import http from "../http-common";
class IdentitasService{
    getAll(){
        return http.get("/Identitas");
    }
    get(id){
        return http.get(`/Identitas/${id}`);
    }
    create(data){
        return http.post("/Identitas",data);
    }
    delete(id){
        return http.delete(`/Identitas/${id}`);
    }
    update(id,data){
        return http.put(`/Identitas/${id}`,data);
    }
}
export default new IdentitasService();