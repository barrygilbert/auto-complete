import { render, screen } from '@testing-library/react';
import { AmendedUser } from '../types'
import UserInfo from './UserInfo';

const mockUser: AmendedUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  },
  formattedName: 'Graham, Leanne'
};

test('renders User Info', () => {
  render(<UserInfo user={mockUser} />);
  expect(screen.getByText(mockUser.formattedName)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.street)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.suite)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.zipcode)).toBeInTheDocument();
});
