'use strict';

class Interface {
  constructor(model) {
    this.model = model;
  }

  read(_id) {
    if (_id) {
      return this.model.find({ _id }, (data) => {
        return data;
      });
    } else {
      return this.model.find({}, (data) => {
        return data;
      });
    }
  }

  create(obj) {
    let record = new this.model(obj);
    record.save();
    return record;
  }

  update(_id, obj) {
    return this.model.findByIdAndUpdate(_id, obj, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = Interface;
