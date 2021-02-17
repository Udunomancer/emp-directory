import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable({users}) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phones</th>
          <th>Email</th>
          <th>Home Address</th>
        </tr>
      </thead>
      <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
      </tbody>
    </table>
  );
}

export default UserTable;
