import axios from "axios"

export default class GitHubService {
    constructor() {
        axios.defaults.baseURL = 'https://api.github.com/'
    }

    getRepos (username) {
        let accessToken = 'b462e9597c395a21a191046ab7bea2d6d92233d4'
        return axios.get(`users/${username}/repos`, { headers: {"Authorization" : `Bearer ${accessToken}`} })
    }
}

export const gitHub = new GitHubService();