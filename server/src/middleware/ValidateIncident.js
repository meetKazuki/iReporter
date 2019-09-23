import IncidentModel from '../models/IncidentModel';

class validateIncident {
  static validatePostRequest(req, res, next) {
    const {
      type, location, comment,
    } = req.body;

    if (!type) {
      return res.status(406).json({
        status: 406,
        error: "specify type of complaint ('red-flag' or 'intervention')",
      });
    }
    if (type !== 'red-flag' && type !== 'intervention') {
      return res.status(406).json({
        status: 406,
        error: "complaint type must either be a 'red-flag' or an 'intervention'",
      });
    }

    if (!location) {
      return res.status(406).json({
        status: 406,
        error: 'provide the location of your complaint',
      });
    }

    if (!comment) {
      return res.status(406).json({
        status: 406,
        error: 'describe your situation',
      });
    }
    if (comment.length < 20) {
      return res.status(406).json({
        status: 406,
        error: 'comments must be more than 20 characters',
      });
    }
    return next();
  }

  static validateGetRequest(req, res, next) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({ status: 404, error: 'record not found' });
    }
    return next();
  }

  static valdiateLocation(req, res, next) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({
        status: 404,
        error: 'record not found',
      });
    }
    return next();
  }

  static validateComment(req, res, next) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({
        status: 404,
        error: 'record not found',
      });
    }
    return next();
  }

  static validateDeleteRequest(req, res, next) {
    const incident = IncidentModel.findOne(req.params.id);
    if (!incident) {
      return res.status(404).json({ status: 404, error: 'record not found' });
    }
    return next();
  }
}

export default validateIncident;
