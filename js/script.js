import persons from "../data.json";

document.addEventListener("DOMContentLoaded", () => {
  const commonListContainer = document.querySelector(".common-list_container");
  const personInfoContainer = document.querySelector(".person-info_container");

  const commonList = document.querySelector("#common-list");

  const personInfoClose = document.querySelector("#close-person-info");
  const personInfoTitle = document.querySelector("#info-title");
  const personInfoFriends = document.querySelector("#friends");
  const personInfoNotFriends = document.querySelector("#not-friends");
  const personInfoPopular = document.querySelector("#popular");

  const personsObj = {};
  const personsFriends = {};
  const notFriendsTemplate = [];

  persons.forEach((person) => {
    notFriendsTemplate.push(person.id);
  });

  persons.forEach((person) => {
    const notFriends = new Set(notFriendsTemplate);
    notFriends.delete(person.id);

    person.friends.forEach((friendId) => {
      personsFriends[friendId] ? personsFriends[friendId]++ : (personsFriends[friendId] = 1);
      notFriends.delete(friendId);
    });

    personsObj[person.id] = {
      name: person.name,
      friends: person.friends,
      notFriends: [...notFriends],
    };
  });

  const popularPersons = Object.keys(personsFriends)
    .sort((a, b) => {
      if (personsFriends[a] !== personsFriends[b]) {
        return personsFriends[b] - personsFriends[a];
      } else {
        if (personsObj[a] < personsObj[b]) {
          return 1;
        } else {
          return -1;
        }
      }
    })
    .slice(0, 3);

  function createPerson(personId) {
    const personEl = document.createElement("div");
    personEl.classList.add("person");
    personEl.innerHTML = `
      <i class="fa fa-user person_icon"></i>
      <span class="person_name">${personsObj[personId].name}</span>
    `;
    personEl.addEventListener("click", () => {
      showPersonInfo(personId);
    });
    return personEl;
  }

  function showCommonList() {
    personInfoContainer.classList.add("hidden");
    commonListContainer.classList.remove("hidden");
  }

  function fillContainer(container, idArray) {
    if (idArray.length > 3) {
      idArray = idArray.slice(0, 3);
    }
    container.innerHTML = "";
    idArray.forEach((id) => {
      container.append(createPerson(id));
    });
  }

  function showPersonInfo(personId) {
    commonListContainer.classList.add("hidden");
    personInfoContainer.classList.remove("hidden");
    personInfoTitle.textContent = personsObj[personId].name;
    fillContainer(personInfoFriends, personsObj[personId].friends);
    fillContainer(personInfoNotFriends, personsObj[personId].notFriends);
    fillContainer(personInfoPopular, popularPersons);
  }

  commonList.innerHTML = "";

  Object.keys(personsObj).forEach((personId) => {
    commonList.append(createPerson(personId));
  });

  personInfoClose.addEventListener("click", () => showCommonList());
});
