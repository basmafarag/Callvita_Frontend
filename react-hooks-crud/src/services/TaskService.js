import http from "../http-common";

const getAll = () => {
  return http.get("/get");
};

//get specific task
const get = id => {
  return http.get(`/getTask?id=${id}`);
};

const create = data => {
  return http.post("/create", data);
};

const update = (id, data) => {
  return http.put(`/update?id=${id}`, data);
};

const remove = id => {
  return http.delete(`/delete?id=${id}`);
};



const findByTitle = title => {
  return http.get(`/search?title=${title}`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};
 