import { fetchUsers } from './users';

describe('fetchUsers', () => {
  it('returns a list of users', async () => {
    const users = await fetchUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});