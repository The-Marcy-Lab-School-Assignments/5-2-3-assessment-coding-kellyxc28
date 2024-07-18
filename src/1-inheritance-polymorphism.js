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

  makeCall(callingPerson) {
    const callingThisIdx = this.contacts.indexOf(callingPerson);
    
    if (callingThisIdx !== -1) { // if exists 
      return `Calling ${this.name}...`;
    } else {
      if (typeof this.phoneNumber === isNaN && this.phoneNumber.length === 10) {
        return `Calling ${this.phoneNumber}...`;
      }
    }

    return 'Invalid';
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage() {
    // if knockoff or Android => model is not iPhone 
    // but we are told to not check the model?? 
    if (this.model !== 'iPhone') {
      return 'Message could not be sent.';
    }
    else {
      return `Message: ${this.message} - sent from ${this.model}`;
    }
    
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
