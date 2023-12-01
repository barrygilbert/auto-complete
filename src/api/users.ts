import { User } from '../types';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (): Promise<User[]> => {
  return fetch(URL)
    .then(response => response.json())
    .then(users => users as User[]);
};
