const Job = require('./job.model');

function getAllJob() {
  return Job.find({});
}

function getSingleJob(id) {
  return Job.findById(id)
    .populate({
      path: 'company',
      select: 'name description',
    })
    .populate({ path: 'candidates', select: 'firstName email' });

  //return Job.findById(id).populate('company', 'name description');
  //return Job.findById(id).populate('company','name');
  //return Job.findById(id).populate('company');
}

function findJob(query) {
  return Job.findOne(query);
}

function createJob(job) {
  return Job.create(job);
}
function updateJob(id, job) {
  return Job.findByIdAndUpdate(id, job, { new: true });
}

function addCandidate(id, candidateId) {
  return Job.findByIdAndUpdate(
    id,
    {
      $push: {
        candidates: candidateId,
      },
    },
    { new: true }
  );
}

function deleteJob(id) {
  return Job.findByIdAndRemove(id);
}
module.exports = {
  getAllJob,
  getSingleJob,
  findJob,
  createJob,
  updateJob,
  deleteJob,
  addCandidate,
};
