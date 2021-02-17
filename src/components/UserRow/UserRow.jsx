import React from "react";

function UserRow({ user }) {
  return (
    <tr>
      <td>
        <img src={user.picture} className="img-thumbnail" />
      </td>
      <td>{`${user.name.first} ${user.name.last}`}</td>
      <td>
        {user.phone}
      </td>
      <td>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </td>
      <td>
        <span>{`${user.location.street.number} ${user.location.street.name},`}</span>
        <br></br>
        <span>{`${user.location.city}, ${user.location.state} ${user.location.zipcode}`}</span>
      </td>
    </tr>
  );
}

export default UserRow;
