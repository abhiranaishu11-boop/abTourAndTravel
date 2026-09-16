exports.getDestinations = async (req, res) => {
  res.json({ success: true, destinations: [] });
};

exports.getSingleDestination = async (req, res) => {
  res.json({ success: true, id: req.params.id });
};

exports.createDestination = async (req, res) => {
  res.json({ success: true, message: "Destination Created" });
};

exports.updateDestination = async (req, res) => {
  res.json({ success: true, message: "Destination Updated" });
};

exports.deleteDestination = async (req, res) => {
  res.json({ success: true, message: "Destination Deleted" });
};