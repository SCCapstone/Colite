import http from "../http-common";

class PoleDataService {
    getAll() {
        return http.get("/poles");
    }

    get(id) {
        return http.get(`/poles/${id}`);
    }

    create(data) {
        return http.post("/poles", data);
    }

    update(id, data) {
        return http.put(`/poles/${id}`, data);
    }

    delete(id) {
        return http.delete(`/poles/${id}`);
    }

    deleteAll() {
        return http.delete(`/poless`);
    }

    findByTitle(title) {
        return http.get(`/poless?title=${title}`);
    }
}

export default new PoleDataService();