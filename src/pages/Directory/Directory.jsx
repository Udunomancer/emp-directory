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
  const [displayState, setDisplayState] = useState(usersState);
  const [searchState, setSearchState] = useState({
    display: false,
    nameSearch: "",
    phoneSearch: "",
    emailSearch: "",
    addressSearch: "",
  });

  useEffect(() => {
    UsersAPI.getRandomUsers(25).then((res) => {
      setUsersState(res);
    });
  }, []);

  useEffect(() => {
    setDisplayState(usersState);
  }, [usersState]);

  useEffect(() => {
    if (searchState.display) {
      const filteredArray = usersState.filter(function (user) {
        return (
          (user.name.first + " " + user.name.last)
            .toUpperCase()
            .includes(searchState.nameSearch.toUpperCase()) &&
          user.phone
            .toUpperCase()
            .includes(searchState.phoneSearch.toUpperCase()) &&
          user.email
            .toUpperCase()
            .includes(searchState.emailSearch.toUpperCase()) &&
          (user.location.street.number + " " + user.location.street.name)
            .toUpperCase()
            .includes(searchState.addressSearch.toUpperCase())
        );
      });
      setDisplayState(filteredArray);
    } else {
      setDisplayState(usersState);
    }
  }, [searchState]);

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setSearchState({ ...searchState, [name]: value });
  }

  function handleSearchToggle(event) {
    const value = !(event.target.value === "true");
    if (value) {
      setSearchState({
        ...searchState,
        display: value,
      });
    } else {
      setSearchState({
        display: value,
        nameSearch: "",
        phoneSearch: "",
        emailSearch: "",
        addressSearch: "",
      });
    }
  }

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
          handleInputChange={handleInputChange}
          handleSearchToggle={handleSearchToggle}
          searchState={searchState}
          sort={sortUsers}
          users={displayState}
        />
      </Container>
    </>
  );
}

export default Directory;
