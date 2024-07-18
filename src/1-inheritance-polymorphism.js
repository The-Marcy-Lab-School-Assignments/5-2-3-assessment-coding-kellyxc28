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

  removeContact(targetContact) {
    const removingThisIdx = this.contacts.indexOf(targetContact);
    
    if (removingThisIdx !== -1) { // if exists 
      this.contacts.splice(removingThisIdx, 1);
      return `${this.name} removed.`;
    } else {
      return 'Contact not found.';
    }
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
