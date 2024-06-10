import React from "react";
import { getAllUsersDetails } from "../../api";
import UserManagement from "../../components/UserManagement/UserManagement";

const UserManagementPage = () => {
  return (
    <div>
      <UserManagement />
    </div>
  );
};

export default UserManagementPage;
