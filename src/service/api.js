import axios from 'axios';

// const API_URI = 'http://localhost:8000';
const API_URI = 'https://file-sharing-3ky9.onrender.com/'

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data,
            {                                          
            headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Access-Control-Allow-Origin': '*'
        }
            });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}
