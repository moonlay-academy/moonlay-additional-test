import http from "../http-common";
class ItemDataService{
    getAll(){
        return http.get("/TodoItems");
    }
    get(id){
        return http.get(`/TodoItems/${id}`);
    }
    create(data){
        return http.post("/TodoItems",data);
    }
    update(id,data){
        return http.put(`/TodoItems/${id}`,data);
    }
    delete(id){
        return http.delete(`/TodoItems/${id}`);
    }
    deleteAll(){
        return http.delete('/TodoItems');
    }

}
export default new ItemDataService();