import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable({users, sort}) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th></th>
          <th>Name <i className="fas fa-angle-up" id="name" value="up" onClick={sort}></i></th>
          <th>Phone <i className="fas fa-angle-up" id="phone" value="up" onClick={sort}></i></th>
          <th>Email <i className="fas fa-angle-up" id="email" value="up" onClick={sort}></i></th>
          <th>Home Address <i className="fas fa-angle-up" id="address" value="up" onClick={sort}></i></th>
        </tr>
      </thead>
      <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
      </tbody>
    </table>
  );
}

export default UserTable;
