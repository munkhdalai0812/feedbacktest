import http from "../http-common";

const getAll = () => {
  return http.get("/reviews");
};

const get = id => {
  return http.get(`/reviews/${id}`);
};

const assignUserCreate = data => {
  return http.post("/assigns", data);
};

const getAssignedUsers = id => {
	return http.get(`/assigns/${id}`)
}

export default {
  getAll,
  get,
  assignUserCreate,
  getAssignedUsers
};