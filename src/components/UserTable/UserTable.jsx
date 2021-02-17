import React from "react";
import UserRow from "../UserRow/UserRow";
import SortButton from "../SortButton/SortButton";

function UserTable({users, sort}) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th></th>
          <th>
              Name
              <SortButton id="name" value="down" action={sort} />
              <SortButton id="name" value="up" action={sort} />
          </th>
          <th>
              Phone
              <SortButton id="phone" value="down" action={sort} />
              <SortButton id="phone" value="up" action={sort} />
          </th>
          <th>
              Email
              <SortButton id="email" value="down" action={sort} />
              <SortButton id="email" value="up" action={sort} />
          </th>
          <th>
              Home Address
              <SortButton id="name" value="down" action={sort} />
              <SortButton id="name" value="up" action={sort} />
          </th>
        </tr>
      </thead>
      <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
      </tbody>
    </table>
  );
}

export default UserTable;
