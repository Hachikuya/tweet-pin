import axios from 'axios'
import demo_data from '../twitter/tweet-likes-data 2020-05-20 20-56-48 (UTC+8).json'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLikesList() {
    return apiClient.get('/likes_info')
  },
  get_demo_data() {
    return demo_data
  }
}
