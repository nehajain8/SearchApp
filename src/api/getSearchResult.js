import axios from 'axios';

export default axios.create({
    baseURL: 'https://help-search-api-prod.herokuapp.com/'
})
