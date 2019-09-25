import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer EdiNMne7Ixz4t0lUWunXrWkewl4x9zoE1oyMebXaO4j3XObGdIlBakHbQEcpL_K_YZ6HsWNsyrMolgFcQ1-iDpMN3gU_pcNdVd5Dzyajg4-JWJbft0x3jMuDEANxXXYx'
   }
});
