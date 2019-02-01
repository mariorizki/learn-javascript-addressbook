let contacts = []
let latestIdNumber = 1

const addressBook = {
  displayContacts: () => {
    contacts.forEach(function(contact) {
      console.log(
        `
        ID : ${contact.id}
        Name : ${contact.name}, 
        Address: ${contact.address}, 
        Profession: ${contact.profession}
        `
      )
    })
  },

  addNewContact: (name, address, profession) => {
    contacts.push({
      id: latestIdNumber,
      name,
      address,
      profession
    })

    latestIdNumber++
  },

  deleteContact: id => {
    const deleted = contacts.filter(contact => {
      return contact.id !== id
    })
    contacts = deleted
  },

  editContactProperty: (id, propertyName) => {
    // ...
  },

  editContactName: (id, newName) => {
    const edited = contacts.map(contact => {
      if (contact.id === id) {
        return {
          ...contact,
          name: newName
        }
      } else {
        return contact
      }
    })
    contacts = edited
  },

  editContactAddress: (id, newAddress) => {
    const edited = contacts.map(contact => {
      if (contact.id === id) {
        return {
          ...contact,
          address: newAddress
        }
      } else {
        return contact
      }
    })
    contacts = edited
  },

  editContactProfession: (id, newProfession) => {
    const edited = contacts.map(contact => {
      if (contact.id === id) {
        return {
          ...contact,
          profession: newProfession
        }
      } else {
        return contact
      }
    })
    contacts = edited
  }
}

addressBook.addNewContact('Gon', 'Middle of Nowhere', 'Software Engineer')
addressBook.addNewContact('Impact', 'Middle of Nowhere', 'UI Designer')
addressBook.addNewContact('Sonic', 'SEGA', 'Runner')
addressBook.addNewContact('Mario', 'Nintendo', 'Fighter')

addressBook.displayContacts()
