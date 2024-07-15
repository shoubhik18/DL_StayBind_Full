// const router = require('express').Router();
// const leadController = require('../controllers/leadController');
// router.post('/', leadController.createLead);
// module.exports = router;

const router = require('express').Router();
const leadController = require('../controllers/leadController');

router.post('/', leadController.createLead);

// GET all leads
router.get('/', leadController.getAllLeads);

// GET lead by ID
router.get('/:id', leadController.getLeadById);

// PUT update lead by ID
router.put('/:id', leadController.updateLead);

// DELETE lead by ID
router.delete('/:id', leadController.deleteLead);

module.exports = router;
