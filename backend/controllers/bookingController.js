const Booking = require("../models/Booking");
const sendMail = require("../utils/mailSender");

exports.createBooking = async (req, res) => {
	try {
		const booking = await Booking.create(req.body);
		const emailSent = await sendMail(
			process.env.EMAIL,
			`New tour booking: ${booking.name}`,
			`
				<div style="font-family:Arial,sans-serif;line-height:1.6">
					<h2>New booking received</h2>
					<p><strong>Name:</strong> ${booking.name}</p>
					<p><strong>Contact:</strong> ${booking.contactNumber}</p>
					<p><strong>Destination:</strong> ${booking.destination}</p>
					<p><strong>Travel dates:</strong> ${booking.startDate} to ${booking.endDate}</p>
					<p><strong>Guests:</strong> ${booking.adults} adults, ${booking.children} children</p>
					<p><strong>Hotel:</strong> ${booking.hotelCategory}</p>
					<p><strong>Vehicle:</strong> ${booking.vehicleType}</p>
					<p><strong>Guide:</strong> ${booking.guideDuration || "Not requested"} (${booking.guideLanguage})</p>
				</div>
			`,
		);

		res.status(201).json({
			success: true,
			message: "Booking submitted successfully",
			emailSent,
			booking,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Unable to submit booking",
			error: error.message,
		});
	}
};

exports.getBookings = async (req, res) => {
	try {
		const bookings = await Booking.find().sort({ createdAt: -1 });
		res.json({ success: true, bookings });
	} catch (error) {
		res.status(500).json({ success: false, message: "Unable to load bookings" });
	}
};