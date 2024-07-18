const bankAccountFactory = (amount = 0) => {
  const bankAccount = {
    checkBalance() {
      return amount;
    },
    add (addingAmt) {
      amount += addingAmt;
      console.log(`$${addingAmt} added.`)
    },
    subtract(subtractingAmt) {
      amount -= subtractingAmt;
      console.log(`$${subtractingAmt} subtracted.`)
    }
  }

  return bankAccount;
};

module.exports = {
  bankAccountFactory,
};
