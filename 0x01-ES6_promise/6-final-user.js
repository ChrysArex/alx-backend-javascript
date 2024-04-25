import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),uploadPhoto(fileName)])
  .then((results) => {
    for (let result of results) {
      result = {status: result.status, value: result};
    }
  });
}