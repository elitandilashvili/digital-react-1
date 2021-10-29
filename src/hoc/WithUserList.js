import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUserList } from '../services/User.services';

export const withUserList = (Component) => {
  const WithUserList = (props) => {
    const [Users, setUsers] = useState([]);
    const FetchUsers = async () => {
      const data = await getUserList();
      setUsers(data);
    };

    useEffect(() => {
      FetchUsers();
    }, []);

    return <Component {...props} userList={Users} />;
  };

  return WithUserList;
};
