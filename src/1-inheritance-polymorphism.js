class Phone {
  constructor(phoneNumber){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  addContact(phoneNumber) {
    // name does not appear til we get to this method 
    // if (this.name === undefined || phoneNumber === undefined && phoneNumber.length !== 10) {
    if (this.name === undefined || phoneNumber === undefined) {
      return 'Invalid';
    }
    else { 
      // const newContact = new Phone(phoneNumber);
      this.contacts.push(newContact);
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
