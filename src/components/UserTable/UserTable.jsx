import React, { useState } from "react";
import UserRow from "../UserRow/UserRow";
import SortButton from "../SortButton/SortButton";

function UserTable({ users, sort, handleInputChange, handleSearchToggle, searchState }) {
  const [showSearch, setShowSearch] = useState(false);

  function switchVisibility() {
    setShowSearch(!showSearch);
  }

  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th>
            <button
              className="btn fas fa-search"
              value={searchState.display}
              id="searchToggle"
              onClick={handleSearchToggle}
            ></button>
          </th>

          <th>
            <div>
              Name
              <SortButton id="name" value="down" action={sort} />
              <SortButton id="name" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div>
                <input
                  type="text"
                  name="nameSearch"
                  placeholder="Search Name"
                  value={searchState.nameSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>

          <th>
            <div>
              Phone
              <SortButton id="phone" value="down" action={sort} />
              <SortButton id="phone" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div>
                <input
                  type="text"
                  name="phoneSearch"
                  placeholder="Search Phone"
                  value={searchState.phoneSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
          <th>
            <div>
              Email
              <SortButton id="email" value="down" action={sort} />
              <SortButton id="email" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div>
                <input 
                  type="text"
                  name="emailSearch"
                  placeholder="Search Email"
                  value={searchState.emailSearch}
                  onChange={handleInputChange}
                ></input>
              </div>
            )}
          </th>
          <th>
            <div>
              Home Address
              <SortButton id="address" value="down" action={sort} />
              <SortButton id="address" value="up" action={sort} />
            </div>
            {searchState.display && (
              <div>
                <input 
                  type="text"
                  name="addressSearch"
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
      </tbody>
    </table>
  );
}

export default UserTable;
