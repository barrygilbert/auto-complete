import React from 'react';
import { AmendedUser } from '../types';

export interface UserInfoProps {
  user: AmendedUser;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <div className="user-info" data-testid="user-info">
    <div>{user.formattedName}</div>
    <div>{user.address.street}</div>
    <div>{user.address.suite}</div>
    <div>{user.address.zipcode}</div>
  </div>
);

export default UserInfo;
