import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import './App.css';
import { AmendedUser } from './types';
import { fetchUsers } from './api';
import { formatName } from './utils';
import { Autocomplete, AutocompleteRenderInputParams, TextField } from '@mui/material';
import { UserInfo } from './components';

const App: React.FC = () => {
  const [users, setUsers] = React.useState<AmendedUser[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<AmendedUser | null>(null);

  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      const amendedUsers = fetchedUsers.map((user) => ({
        ...user,
        formattedName: formatName(user.name),
      }));
      amendedUsers.sort((a, b) => a.formattedName.localeCompare(b.formattedName));
      setUsers(amendedUsers);
    });
  }, []);

  const onChange = useCallback((_: SyntheticEvent, value: AmendedUser | null) => {
    setSelectedUser(value);
  }, []);

  const renderInput = useCallback((params: AutocompleteRenderInputParams) => (
    <TextField {...params} label="Name" />
  ), []);

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Autocomplete
        disablePortal
        data-testid="user-autocomplete"
        options={users}
        getOptionLabel={(user) => user.formattedName}
        onChange={onChange}
        renderInput={renderInput}
      />
      {selectedUser && (
        <UserInfo user={selectedUser} />
      )}
    </div>
  );
}

export default App;
