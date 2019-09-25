import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setRezults] = useState([]);
  const [errorMassage, setErrorMassage] = useState('');

const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
    const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
        }
    });
    setRezults(response.data.businesses);
} catch (err){
    setErrorMassage('Something went wrong');
}
};

useEffect(() => {
searchApi('pasta');
}, []);

return [searchApi, results, errorMassage];
};
