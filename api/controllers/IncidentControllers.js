import IncidentModel from '../models/IncidentModel';

class IncidentController {
  static createIncident(req, res) {
    const incident = IncidentModel.create(req.body);
    return res.status(201).json({
      status: 201,
      data: [{
        id: incident.id,
        message: 'Created red-flag record',
      }],
    });
  }

  static getAllIncidents(req, res) {
    const incidents = IncidentModel.findAll();
    return res.status(200).json({ status: 200, data: [...incidents] });
  }

  static getOneIncident(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    return res.status(200).json({ status: 200, data: [incident] });
  }

  static updateLocation(req, res) {
    const { location } = req.body;

    const updateRecord = IncidentModel.update(req.params.id, { location });
    return res.status(200).json({
      status: 200,
      data: [{
        id: updateRecord.id,
        message: "Updated red-flag record's location",
      }],
    });
  }

  static updateComment(req, res) {
    const { comment } = req.body;

    const updateComment = IncidentModel.update(req.params.id, { comment });
    return res.status(200).json({
      status: 200,
      data: [{
        id: updateComment.id,
        message: "Updated red-flag record's comment",
      }],
    });
  }

  static deleteIncident(req, res) {
    const deletedIncident = IncidentModel.delete(req.params.id);
    return res.status(204).json({
      status: 204,
      data: [{
        id: deletedIncident.id,
        message: 'red-flag record has been deleted',
      }],
    });
  }
}

export default IncidentController;
