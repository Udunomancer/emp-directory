import React, { useState } from "react";
import UserRow from "../UserRow/UserRow";
import SortButton from "../SortButton/SortButton";

function UserTable({
  users,
  sort,
  handleInputChange,
  handleSearchToggle,
  searchState,
}) {

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th className="align-top" scope="col">
            <button
              className="btn fas fa-search"
              value={searchState.display}
              id="searchToggle"
              onClick={handleSearchToggle}
            ></button>
          </th>
          <th className="align-top" scope="col">
            <div>
              Name
              <SortButton id="name" value="down" action={sort} />
              <SortButton id="name" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div className="input-group">
                <input
                  type="text"
                  name="nameSearch"
                  className="form-control"
                  placeholder="Search Name"
                  value={searchState.nameSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
          <th scope="col">
            <div>
              Phone
              <SortButton id="phone" value="down" action={sort} />
              <SortButton id="phone" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div className="input-group">
                <input
                  type="text"
                  name="phoneSearch"
                  className="form-control"
                  placeholder="Search Phone"
                  value={searchState.phoneSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
          <th scope="col">
            <div>
              Email
              <SortButton id="email" value="down" action={sort} />
              <SortButton id="email" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div className="input-group">
                <input
                  type="text"
                  name="emailSearch"
                  className="form-control"
                  placeholder="Search Email"
                  value={searchState.emailSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
          <th scope="col">
            <div>
              Home Address
              <SortButton id="address" value="down" action={sort} />
              <SortButton id="address" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div className="input-group">
                <input
                  type="text"
                  name="addressSearch"
                  className="form-control"
                  placeholder="Search Street"
                  value={searchState.addressSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
        {users.length < 1 && (
          <tr>
            <td className="text-center" colSpan="5">
              No Employees match the search terms provided
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
