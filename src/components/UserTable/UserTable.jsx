import React, {useState} from "react";
import UserRow from "../UserRow/UserRow";
import SortButton from "../SortButton/SortButton";

function UserTable({ users, sort }) {
  
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
              value={false} 
              id="searchToggle"
              onClick={switchVisibility}
            ></button>
          </th>
          
          <th>
            <div>
              Name
              <SortButton id="name" value="down" action={sort} />
              <SortButton id="name" value="up" action={sort} />
            </div>
          {showSearch &&
            <div>
              <input type="text"></input>
            </div>
          }
          </th>
          
          <th>
            <div>
              Phone
              <SortButton id="phone" value="down" action={sort} />
              <SortButton id="phone" value="up" action={sort} />
            </div>
            {showSearch &&
            <div>
              <input type="text"></input>
            </div>
}
          </th>
          <th>
            <div>
              Email
              <SortButton id="email" value="down" action={sort} />
              <SortButton id="email" value="up" action={sort} />
            </div>
            {showSearch &&
            <div>
              <input type="text"></input>
            </div>
}
          </th>
          <th>
            <div>
              Home Address
              <SortButton id="address" value="down" action={sort} />
              <SortButton id="address" value="up" action={sort} />
            </div>
            {showSearch &&
            <div>
              <input type="text"></input>
            </div>
}
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
