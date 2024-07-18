class Phone {
  constructor(phoneNumber, name){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
    this.name = name;
  }

  addContact(newContact) {
    if (newContact.name === undefined || newContact.phoneNumber === undefined) {
      return 'Invalid';
    }
    else if (newContact.phoneNumber.length !== 10) {
      return 'Invalid';  
    }
    else {
      this.contacts.push(newContact);
      return `${newContact.name} added.`;
    }
  }

  removeContact(targetContact) {
    const removingThisIdx = this.contacts.findIndex((person) => person.name === targetContact, 1);
    
    if (removingThisIdx !== -1) { // if exists 
      this.contacts.splice(removingThisIdx, 1);
      return `${targetContact} removed.`;
    } 
    else {
      return 'Contact not found.';
    }
  }

  makeCall(input) {
    // input can be a person's name or a number
    const callingThisIdx = this.contacts.findIndex((person) => person.name === input, 1);
    
    if (callingThisIdx !== -1) { // if exists 
      return `Calling ${input}...`;
    } 
    else {
      
      if (input.length === 10) {
        return `Calling ${input}...`;
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
