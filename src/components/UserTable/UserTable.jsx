import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable(props) {
  return (
    <table class="table">
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
          <UserRow />
      </tbody>
    </table>
  );
}

export default UserTable;
