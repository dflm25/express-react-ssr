/**
 * Services for size admin
 */
import Http from './Http';

export const getSizeData = (credentials) => {
  return new Promise((resolve, reject) => {
    Http.get('/admin/size/datatable', { params: credentials })
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      console.log('Error rejected', error);
    });
  });
}