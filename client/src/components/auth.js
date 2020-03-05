import axios from 'axios';


function axiosWithAuth() {
    const token = localStorage.getItem('key');
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    })
}


export default axiosWithAuth; 