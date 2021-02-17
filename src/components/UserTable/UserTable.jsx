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
          <UserRow key={users[0].id} user={users[0]}/>
      </tbody>
    </table>
  );
}

export default UserTable;
