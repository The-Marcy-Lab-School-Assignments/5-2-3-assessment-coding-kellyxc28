class Phone {
  constructor(phoneNumber, name){
    this.phoneNumber = phoneNumber;
    this.contacts = [];
    this.name = name;
  }

  // asked for assistance 
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
    // asked for assistance 
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

    // asked for assistance 
    const callingThisNumIdx = this.contacts.findIndex((person) => person.phoneNumber === input, 1);
    
    // asked for assistance 
    if (callingThisNumIdx !== -1) { // if exists 
      return `Calling ${this.contacts[callingThisNumIdx].name}...`;
    } 

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
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(phoneNum, phoneMsg) {
    // asked for assistance 
    if (!(phoneNum instanceof AppleIPhone)) {
      return `Message could not be sent.`;
    }
    else {
      return `Message: ${phoneMsg} - sent from ${this.model}`;
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
