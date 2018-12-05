import IncidentModel from '../models/Incident';
// import db from '../../db/db';

const Incident = {
  // create a POST/red-flag request
  create(req, res) {
    if (!req.body.type && !req.body.location && !req.body.status
      && !req.body.comment) {
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

  // create a GET/red-flag request
  getAll(req, res) {
    const incidents = IncidentModel.findAll();
    return res.status(200).json({
      status: 200,
      data: incidents,
    });
  },

  // create a GET/red-flag/:id request
  getOne(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).send({
        status: 404,
        message: 'record not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: incident,
    });
  },

  // create a DELETE/red-flag/:id request
  delete(req, res) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).send({
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
