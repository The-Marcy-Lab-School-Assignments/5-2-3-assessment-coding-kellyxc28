const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.hasStarted = false;  // created myself 
  }

  startedToDoTask() {   // created myself 
    return this.hasStarted = true;
  }
}


class ToDoList {
  #items = [];
  static #allLists = [];

  constructor() {
    this.id = getId();
    this.name = 'This week\'s tasks';
    this.isAllDone = false; // created myself 

    ToDoList.#allLists.push(this);
  }

  createItem(description, priorityLevel) {
    const newItem = new ToDoItem(description, priorityLevel);
    this.#items.push(newItem);
    return newItem;
  }

  getItems(){
    return [...this.#items];
  }

  getCompletedCount(){
    return this.#items.reduce((accum, {isDone}) => accum + isDone, 0);
  }

  static list() {
    return [...ToDoList.#allLists];
  }

  static findBy(id){
    return ToDoList.#allLists.find((item) => item.id === id);
  }

  finishedToDoList() {    // created myself 
    return [...this.#items].length === getCompletedCount();
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};