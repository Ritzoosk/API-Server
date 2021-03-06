'use strict';

class ThingsModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    //sv new obj
    console.log(obj);
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  read(id) {
    //get item from db via its id\
    if (id) {
      return this.db.find(record => record.id === id);
    }else{
      return this.db;
    }
  }


  update(id, obj) {
    if (id) {
      let selected = this.db.find(record => record.id === id);
      const indexId = this.db.indexOf(selected);
      this.db[indexId] = {
        id: id,
        record: obj
      };
      //return selected;
    }
  }

  delete(id) {
    if (id) {
      return null;
    }
  }
}

module.exports = ThingsModel;