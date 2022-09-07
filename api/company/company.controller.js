const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
} = require('./company.service');

async function getAllCompaniesHandler(req, res) {
  try {
    const companys = await getAllCompanies();
    return res.status(200).json(companys);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getCompanyByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const company = await getCompanyById(id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    return res.json(company);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createCompanyHandler(req, res) {
  const companyData = req.body;
  try {
    const company = await createCompany(companyData);
    return res.status(201).json({ company });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function updateCompanyHandler(req, res) {
  const { id } = req.params;
  const companyData = req.body;
  try {
    const company = await updateCompany(id, companyData);
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

function deleteCompanyHandler(req, res) {}

module.exports = {
  getAllCompaniesHandler,
  getCompanyByIdHandler,
  createCompanyHandler,
  updateCompanyHandler,
  deleteCompanyHandler,
};
