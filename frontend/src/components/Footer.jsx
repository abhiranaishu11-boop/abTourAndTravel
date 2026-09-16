import React from "react";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "../config/contact";
import "./Footer.css";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<h2>AB Tour Travel</h2>
					<p>Thoughtful journeys, trusted guidance, and memorable experiences across incredible destinations.</p>
					<div className="footer-socials" aria-label="Social links">
						<a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
						<a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
						<a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
					</div>
				</div>

				<div className="footer-column">
					<h3>Explore</h3>
					<Link to="/">Home</Link>
					<Link to="/tours">Tour Packages</Link>
					<Link to="/destinations">Destinations</Link>
					<Link to="/about">About Us</Link>
				</div>

				<div className="footer-column">
					<h3>Support</h3>
					<Link to="/contact">Plan a Trip</Link>
					<Link to="/contact">Contact Us</Link>
					<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
					<a href={`tel:${CONTACT_PHONE_DISPLAY}`}>{CONTACT_PHONE_DISPLAY}</a>
				</div>
			</div>

			<div className="footer-bottom">
				<span>© 2026 AB Tour Travel. All Rights Reserved.</span>
				<span>Travel better. Travel with confidence.</span>
			</div>
		</footer>
	);
}

export default Footer;
