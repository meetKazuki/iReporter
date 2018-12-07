import IncidentModel from '../models/IncidentModel';
// import db from '../../db/db';

const Incident = {
  create(req, res) {
    if (!req.body.type || !req.body.location || !req.body.status
      || !req.body.comment) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }
    const incident = IncidentModel.create(req.body);
    return res.status(201).json({
      status: 200,
      message: 'Created red-flag record',
      data: incident,
    });
  },

  getAll(req, res) {
    const incidents = IncidentModel.findAll();
    return res.status(200).json({
      status: 200,
      data: incidents,
    });
  },

  getOne(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({
        status: 404,
        message: 'record not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: incident,
    });
  },

  update(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({
        status: 404,
        error: 'record not found',
      });
    }
    const updatedIncident = IncidentModel.update(req.params.id, req.body);
    return res.status(200).json({
      status: 200,
      data: updatedIncident,
    });
  },

  delete(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({
        status: 404,
        message: 'record not found',
      });
    }
    const delUser = IncidentModel.delete(req.params.id);
    return res.status(204).json({
      status: 204,
      delUser,
    });
  },
};

export default Incident;
