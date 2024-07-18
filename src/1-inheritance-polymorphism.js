class Phone {
  constructor(phoneNumber, name){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
    this.name = name;
  }

  addContact(newContact) {
    //   // if (this.name === undefined || phoneNumber === undefined && phoneNumber.length !== 10) {
    if (this.name === undefined || this.phoneNumber === undefined) {
      return 'Invalid';
    }
    else {
      this.contacts.push(newContact);
      return `${this.name} added`;
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
