class Phone {
  constructor(phoneNumber, name){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
    this.name = name;
  }

  addContact(contact) {
    // name does not appear til we get to this method 
    // if (this.name === undefined || phoneNumber === undefined && phoneNumber.length !== 10) {
    if (this.name === undefined || this.phoneNumber === undefined) {
      return 'Invalid';
    }
    else { 
      // const newContact = new Phone(this.name, this.phoneNumber);
      // this.contacts.push(newContact);
      this.contacts.push(contact);
      return `${this.name} added.`;
    }
  }

  removeContact() {
  }

  makeCall() {

  }
}

class AppleIPhone {

}

module.exports = {
  Phone,
  AppleIPhone,
};
