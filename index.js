let contacts = [];
let idNumber = 1000;

const addressBook = {
  displayContacts: () => {
    contacts.forEach(function(contact) {
      console.log(
        `
        Name : ${contact.name}, 
        Address: ${contact.address}, 
        Profession: ${contact.profession}
        `
      );
    });
  },

  addNewContact: (name, address, profession) => {
    contacts.push({
      id: idNumber,
      name,
      address,
      profession
    });

    idNumber++;
  },

  deleteContact: id => {
    const deleted = contacts.filter(contact => {
      return contact.id !== id;
    });
    contacts = deleted;
  },

  editContactName: (id, name) => {
    contacts.forEach(contact => {
      if (contact.id === id) {
        return (contact.name = name);
      }
    });
  },

  editContactAddress: (id, address) => {
    contacts.forEach(contact => {
      if (contact.id === id) {
        return (contact.address = address);
      }
    });
  },

  editContactProfession: (id, profession) => {
    contacts.forEach(contact => {
      if (contact.id === id) {
        return (contact.profession = profession);
      }
    });
  }
};

addressBook.addNewContact('Gon', 'Middle of Nowhere', 'Software Engineer');
addressBook.addNewContact('Impact', 'Middle of Nowhere', 'UI Designer');
