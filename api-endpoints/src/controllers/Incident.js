import IncidentModel from '../models/Incident';

const Incident = {
  // GET/red-flags request
  getAll(req, res) {
    const incidents = IncidentModel.findAll();
    return res.status(200).json({ status: 200, incidents });
  },
};

export default Incident;
