/**
 * Services for size admin
 */
import axios from 'axios';

export const getSizeData = () => {
  return new Promise((resolve, reject) => {
    axios.get('/admin/sizes')
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      console.log('Error rejected', error);
    });
  });
}