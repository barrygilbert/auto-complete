import { render, screen } from '@testing-library/react';
import { AmendedUser } from '../types'
import UserInfo from './UserInfo';
import { mockAmendedUser } from '../api/mock-users';

const mockUser: AmendedUser = mockAmendedUser[0];

test('renders User Info', () => {
  render(<UserInfo user={mockUser} />);
  expect(screen.getByText(mockUser.formattedName)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.street)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.suite)).toBeInTheDocument();
  expect(screen.getByText(mockUser.address.zipcode)).toBeInTheDocument();
});
