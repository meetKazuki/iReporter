import uuid from 'uuid';
import moment from 'moment';
<<<<<<< HEAD
=======
import User from './User';
>>>>>>> develop

class Incident {
  // class ctor
  constructor() {
<<<<<<< HEAD
    this.incidents = [];
  }

  // create 'new incident' method
=======
    // this.incidents = [new UserID()];
    this.incidents = [];
  }

  // create new incident method
>>>>>>> develop
  create(data) {
    const newIncident = {
      id: uuid.v4(),
      createdOn: moment.now(),
<<<<<<< HEAD
=======
      createdBy: User.id,
>>>>>>> develop
      type: data.type,
      location: data.location,
      status: data.status,
      images: [],
      videos: [],
      comment: data.comment,
    };
    this.incidents.push(newIncident);
    return newIncident;
  }

<<<<<<< HEAD
  // findAll 'incidents' method
=======
  // findAll incidents method
>>>>>>> develop
  findAll() {
    return this.incidents;
  }

<<<<<<< HEAD
  // findOne 'incident' method
=======
  // findOne incident method
>>>>>>> develop
  findOne(id) {
    return this.incidents.find(incident => incident.id === id);
  }

<<<<<<< HEAD
  // update 'incident' method
=======
  // update incident method
>>>>>>> develop
  update(id, data) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents[index].type = data.type || incident.type;
    this.incidents[index].location = data.location || incident.location;
    this.incidents[index].status = data.status || incident.status;
    this.incidents[index].location = data.location || incident.location;
    return this.incidents[index];
  }

<<<<<<< HEAD
  // delete 'incident' method
=======
  // delete incident method
>>>>>>> develop
  delete(id) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents.slice(index, 1);
    return {};
  }
}

export default new Incident();
