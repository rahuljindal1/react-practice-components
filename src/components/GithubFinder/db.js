import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export async function searchUser(username) {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
  return response.data;
}

export async function searchUserPublicRepos(username) {
  const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
  return response.data;
}
