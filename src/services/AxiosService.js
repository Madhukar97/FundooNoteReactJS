import axios from "axios";

class AxiosService {
	constructor() { }

	get(url, headers, data) {
		return axios({
			headers: headers,
			method: 'get',
			url: url,
			data: data
		})
	}

	post(url, headers, data) {
		return axios({
			headers: headers,
			method: 'post',
			url: url,
			data: data
		})
	}

	put(url, headers, data) {
		return axios({
			headers: headers,
			method: 'put',
			url: url,
			data: data
		})
	}

	delete(url, headers, data) {
		return axios({
			headers: headers,
			method: 'delete',
			url: url,
			data: data
		})
	}


}

export default AxiosService;