const { Lead } = require('../models'); // Adjust import path as necessary
console.log(Lead); // Check if Lead is imported correctly

exports.createLead = async (req, res) => {
  const { name, email, mobileNumber, noOfProperties, location, agreedToTerms } = req.body;
  try {
    const lead = await Lead.create({
      name,
      email,
      mobileNumber,
      noOfProperties,
      location,
      agreedToTerms,
    });
    res.status(201).send(lead);
  } catch (err) {
    console.error('Error creating lead:', err); // Log the error for debugging
    res.status(400).send(err);
  }
};

//Get all Leads
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.status(200).json(leads);
  } catch (err) {
    console.error('Error fetching leads:', err);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

// Get Lead by ID
exports.getLeadById = async (req, res) => {
  const leadId = req.params.id;
  try {
    const lead = await Lead.findByPk(leadId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.status(200).json(lead);
  } catch (err) {
    console.error('Error fetching Lead:', err);
    res.status(500).json({ error: 'Failed to fetch Lead' });
  }
};


// Update lead by ID
exports.updateLead = async (req, res) => {
  const leadId = req.params.id;
  const { name, email, mobileNumber, numberOfProperties, location } = req.body;
  try {
    const lead = await Lead.findByPk(leadId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    await lead.update({
      name,
      email,
      mobileNumber,
      numberOfProperties,
      location,
    });
    res.status(200).json(lead);
  } catch (err) {
    console.error('Error updating lead:', err);
    res.status(500).json({ error: 'Failed to update lead' });
  }
};

// Delete lead by ID
exports.deleteLead = async (req, res) => {
  const leadId = req.params.id;
  try {
    const lead = await Lead.findByPk(leadId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    await lead.destroy();
    res.status(204).json('Lead deleted successfully!' ); 
  } catch (err) {
    console.error('Error deleting lead:', err);
    res.status(500).json({ error: 'Failed to delete lead' });
  }
};
