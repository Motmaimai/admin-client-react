import http from "../../http-common";

class AdmTblDatDataService {
  getAll() {
    return http.get("/adm_tbl_dats");
  }

  get(id: string) {
    return http.get(`/adm_tbl_dats/${id}`);
  }

  create(data: any) {
    return http.post("/adm_tbl_dats", data);
  }

  update(id: string, data: any) {
    return http.put(`/adm_tbl_dats/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/adm_tbl_dats/${id}`);
  }

  deleteAll() {
    return http.delete(`/adm_tbl_dats`);
  }

  findByTitle(title: string) {
    return http.get(`/adm_tbl_dats?title=${title}`);
  }
}

export default new AdmTblDatDataService();