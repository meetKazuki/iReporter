import uuid from 'uuid';

class Incident {
  constructor() {
    this.incidents = [];
  }

  create(data) {
    const newIncident = {
      id: uuid.v4(),
      createdOn: Date.now(),
      createdBy: 7,
      type: data.type,
      location: data.location,
      status: 'drafted',
      images: [],
      videos: [],
      comment: data.comment,
    };
    this.incidents.push(newIncident);
    return newIncident;
  }

  findAll() {
    return this.incidents;
  }

  findOne(id) {
    return this.incidents.find(incident => incident.id === id);
  }

  update(id, data) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents[index].type = data.type || incident.type;
    this.incidents[index].location = data.location || incident.location;
    this.incidents[index].comment = data.comment || incident.comment;
    this.incidents[index].status = data.status || incident.status;
    return this.incidents[index];
  }

  delete(id) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents.splice(index, 1);
    return {};
  }
}

export default new Incident();
