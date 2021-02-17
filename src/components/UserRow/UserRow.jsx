import React from "react";

function UserRow({ user }) {
  return (
    <tr>
      <td>
        <img src={user.picture} className="img-thumbnail" />
      </td>
      <td className="align-middle">{`${user.name.first} ${user.name.last}`}</td>
      <td className="align-middle">
        {user.phone}
      </td>
      <td className="align-middle">
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </td>
      <td className="align-middle">
        <span>{`${user.location.street.number} ${user.location.street.name},`}</span>
        <br></br>
        <span>{`${user.location.city}, ${user.location.state} ${user.location.zipcode}`}</span>
      </td>
    </tr>
  );
}

export default UserRow;
