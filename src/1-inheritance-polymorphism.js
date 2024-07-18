class Phone {
  constructor(phoneNumber){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  addContact() {
    // name does not appear til we get to this method 
    // if (this.name === undefined || phoneNumber === undefined && phoneNumber.length !== 10) {
    if (this.name === undefined || phoneNumber === undefined) {
      return 'Invalid';
    }
    else { 
      const newContact = new Phone(this.name, phoneNumber);
      contacts.push(newContact);
      // contacts.push(phoneNumber);
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
