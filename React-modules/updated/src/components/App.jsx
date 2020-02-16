import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/83870349_10221325235348845_2655491112755527680_n.jpg?_nc_cat=100&_nc_oc=AQl0nO0c89IyktnzZMt3uvcmt0y4ZZgPE0xkd6T3MjG1f9w8iVL7z0UmaLt2sY7YyOQ&_nc_ht=scontent-mia3-1.xx&oh=6368f5827781e2fc9057ed11cdee8d22&oe=5EC0689E" />
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
