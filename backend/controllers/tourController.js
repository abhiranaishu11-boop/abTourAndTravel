exports.getTours = async (req, res) => {
  res.json({ success: true, tours: [] });
};

exports.getSingleTour = async (req, res) => {
  res.json({ success: true, id: req.params.id });
};

exports.createTour = async (req, res) => {
  res.json({ success: true, message: "Tour Created" });
};

exports.updateTour = async (req, res) => {
  res.json({ success: true, message: "Tour Updated" });
};

exports.deleteTour = async (req, res) => {
  res.json({ success: true, message: "Tour Deleted" });
};