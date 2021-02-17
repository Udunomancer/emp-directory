import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import UserTable from "../../components/UserTable/UserTable";
import UsersAPI from "../../utils/UsersAPI/UsersAPI";

function Directory() {
  const [usersState, setUsersState] = useState([
    {
      id: 1,
      name: {
        first: "First",
        last: "Last",
        title: "Title",
      },
      location: {
        street: {
          name: "Street",
          number: "123",
        },
        city: "City",
        state: "State",
        zipcode: "Zipcode",
      },
      email: "Email",
      phone: "(123)-456-7890",
      picture: "#",
    },
  ]);
  const [displayState, setDisplayState] = useState([
    {
      id: 1,
      name: {
        first: "First",
        last: "Last",
        title: "Title",
      },
      location: {
        street: {
          name: "Street",
          number: "123",
        },
        city: "City",
        state: "State",
        zipcode: "Zipcode",
      },
      email: "Email",
      phone: "(123)-456-7890",
      picture: "#",
    },
  ]);
  const [searchState, setSearchState] = useState({
    display: false
  });

  useEffect(() => {
    UsersAPI.getRandomUsers(25).then((res) => {
      setUsersState(res);
      console.log("Users State:");
      console.log(usersState);
    });
  }, []);

  useEffect(() => {
    setDisplayState(usersState);
  }, [usersState]);

  // function displaySearch() {
  //   let newDisplay = !searchState.display;
  //   console.log(newDisplay);
  //   setSearchState({...searchState}, {display: newDisplay});
  //   console.log(searchState.display);
  // }

  function sortUsers(event) {
    let value = event.target.value;
    let id = event.target.id;
    let sortingArray = displayState;

    sortingArray.sort(function (a, b) {
      let itemA = a.name.first.toUpperCase() + a.name.last.toUpperCase();
      let itemB = b.name.first.toUpperCase() + b.name.last.toUpperCase();
      if (id === "phone") {
        itemA = a.phone.toUpperCase();
        itemB = b.phone.toUpperCase();
      }
      if (id === "email") {
        itemA = a.email.toUpperCase();
        itemB = b.email.toUpperCase();
      }
      if (id === "address") {
        itemA =
          a.location.street.number.toString() +
          a.location.street.name.toUpperCase();
        itemB =
          b.location.street.number.toString() +
          b.location.street.name.toUpperCase();
      }

      if (itemA < itemB) {
        return value === "up" ? 1 : -1;
      }
      if (itemA > itemB) {
        return value === "up" ? -1 : 1;
      }
      return 0;
    });

    setDisplayState([...sortingArray]);
  }

  return (
    <>
      <Navbar />
      <Container>
        <UserTable 
          search={setSearchState}
          searchVals={searchState}
          sort={sortUsers} 
          users={displayState} 
        />
      </Container>
    </>
  );
}

export default Directory;
