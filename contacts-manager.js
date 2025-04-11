"use strict";

const contacts = [];

// const incrementID = (function () {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// })();

// Unique ID Strategy

const generateID = () => crypto.randomUUID();
// With timestamp + random.
const generateIDPlus = () =>
  `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

const checkPhoneNumbers = function (str) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
};

const checkEmail = function (str) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
};

const contactPhoneExists = function (str) {
  return contacts.find((contact) => contact.contactPhone === str);
};

const contactEmailExists = function (str) {
  return contacts.find((contact) => contact.contactEmail === str);
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

  if (contactPhoneExists(phone)) {
    return "Contact phone already exists, please a new one.";
  }

  if (contactEmailExists(email)) {
    return "Contact email already exists, please a new one.";
  }

  contacts.push({
    id: generateIDPlus(),
    contactName: name,
    contactPhone: phone,
    contactEmail: email,
  });

  return "Contact succesfully added";
};

const removeContact = function (id) {
  const index = contacts.findIndex((contact) => contact.id === id);

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

  // Validate if phone or email are already belonging to another contact.
  if (contactPhoneExists(newPhone) && contact.contactPhone !== newPhone) {
    return "Contact phone already exists";
  }

  if (contactEmailExists(newEmail) && contact.contactEmail !== newEmail) {
    return "Contact email already exists";
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
    return "The contact was not found";
  }

  return contact;
};

const listContacts = function () {
  if (contacts.length === 0) {
    return "No contact available";
  }

  return contacts
    .sort((a, b) => a.contactName.localeCompare(b.contactName))
    .map(
      (contact) =>
        `ID: ${contact.id} | Name: ${contact.contactName} | Phone: ${contact.contactPhone} | Email: ${contact.contactEmail}`
    )
    .join("\n");
};

const groupContactsByFirstLetter = function () {
  return contacts.reduce((acc, contact) => {
    const letter = contact.contactName[0];
    acc[letter] = (acc[letter] || []).concat(contact.contactName);
    return acc;
  }, {});
};

// console.log(checkPhoneNumbers("809-479-9651"));
// console.log(checkEmail("alex@gmail.com"));

addContact("daniel", "809-478-9551", "daniel@gmail.com");
addContact("damon", "123-456-9987", "damon@gmail.com");
addContact("Alexander", "809-479-9651", "alex@gmail.com");
// console.log(listContacts());
// removeContact(1);
// updateContact(2, "Stefan Salvatore", "809-414-9966", "stefan@gmail.com");
// console.log(searchContacts("DA"));
console.log(listContacts());
// console.log(groupContactsByFirstLetter());
// console.log(contacts);
