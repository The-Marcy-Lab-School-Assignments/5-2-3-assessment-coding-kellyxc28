class Phone {
  constructor(phoneNumber, name){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
    this.name = name;
  }

  addContact(newContact) {
    if (newContact.name === undefined && newContact.phoneNumber === undefined || newContact.phoneNumber.length !== 10) {
      return 'Invalid';
    }
    else {
      this.contacts.push(newContact);
      return `${newContact.name} added.`;
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
  constructor(phoneNumber, model, message) {
    super(phoneNumber);
    this.model = model;
    this.message = message;
  }

  sendIMessage() {
    // if knockoff or Android => model is not iPhone 
    // but we are told to not check the model?? 
    if (this.model !== 'iPhone') {
      return `Message: ${this.message} - sent from ${this.model}`;
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
