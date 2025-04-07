"use strict";

const contacts = [];

const incrementID = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

const checkPhoneNumbers = function (str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
};

const checkEmail = function (str) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
};

const addContact = function (name, phone, email) {
  if (name === "") {
    return "Empty description, please provide one.";
  }

  if (!checkPhoneNumbers(phone)) {
    return "Invalid phone number, please provide one.";
  }

  if (!checkEmail(email)) {
    return "Invalid email, please provide one.";
  }

  contacts.push({
    id: incrementID(),
    contactName: name,
    contactPhone: phone,
    contactEmail: email,
  });
};

const removeContact = function (id) {
  const index = contacts.findIndex((contact) => (contact.id = id));

  if (index === -1) {
    return "The contact doesn't exist";
  }

  contacts.splice(index, 1);
  return "Contact succesfully removed";
};

const updateContact = function (id, newName, newPhone, newEmail) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return "The contact does not exist";
  }

  contact.contactName = newName;
  contact.contactPhone = newPhone;
  contact.contactEmail = newEmail;
  return "Contact successfully updated";
};

const searchContacts = function (query) {
  const contact = contacts.filter((filter) =>
    JSON.stringify(filter).toLowerCase().includes(query.toLowerCase())
  );

  if (contact.length === 0) {
    return "The contact does not found";
  }

  return contact;
};

// console.log(checkPhoneNumbers("809-479-9651"));
// console.log(checkEmail("alex@gmail.com"));

addContact("Alexander", "809-479-9651", "alex@gmail.com");
addContact("Daniel", "829-489-9782", "daniel@gmail.com");
addContact("Damon", "123-456-9987", "damon@gmail.com");
// removeContact(1);
// updateContact(2, "Stefan Salvatore", "809-414-9966", "stefan@gmail.com");
// console.log(searchContacts("da"));
// console.log(contacts);
