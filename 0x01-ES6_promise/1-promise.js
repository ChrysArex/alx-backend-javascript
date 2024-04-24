export default function getFullResponseFromAPI(success) {
  const mypromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  mypromise
    .then((response) => response)
    .catch((error) => error);
  return mypromise;
}
