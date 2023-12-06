import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export async function find_all_listings() {
  return axios.get(`${API_URL}/listings/`).then(response => response.data);
}

export async function find_listing_by_id(id) {
  return axios.get(`${API_URL}/listings/${id}`).then(response => response.data);
}

export async function find_all_listings_by_geography() {
  const response = await axios.get(`${API_URL}/listings/by_geography`);
  return response.data;
}

export async function find_all_photos() {
  return axios.get(`${API_URL}/photos/`).then(response => response.data);
}

export async function find_all_testimonials() {
  return axios.get(`${API_URL}/testimonials/`).then(response => response.data);
}

export async function find_all_results() {
  return axios.get(`${API_URL}/results/`).then(response => response.data);
}
