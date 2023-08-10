import axios from "axios";

class TourModel {
    constructor() {
        this.api_url = 'https://64d19875f8d60b174360bda7.mockapi.io/dulich2/';
    }
    getAll() {
        return new Promise((resolve,reject) => {
            axios.get(this.api_url)
            .then((res) => {
                resolve(res.data)
                // console.log(res.data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    async find(id) {
        const data = await axios.get(this.api_url  +  id);
        return data.data;
    }
    async store(data){
        const res = await axios.post(this.api_url,data)
        return res;
    }

    async update(id,data){
        const res = await axios.put(this.api_url  + id,data)
        return res;
    }

    async delete(id){
        const data = await axios.delete(this.api_url + id)
        return data;
    }
}
export default new TourModel();