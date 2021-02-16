import axios from "axios";

const url = "http://localhost:5000/candidates";

export const fetchCandidates = () => axios.get(url);
