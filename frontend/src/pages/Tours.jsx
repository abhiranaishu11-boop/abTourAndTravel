import React from 'react';

const tourPackages = [
  {
    id: 1,
    title: "Golden Triangle Classic",
    country: "India",
    rating: "★ 4.9",
    reviews: 245,
    duration: "7 Days / 6 Nights",
    groupSize: "2-15 people",
    tags: ["Taj Mahal", "Amber Fort", "Qutub Minar"],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Everest Base Camp Trek",
    country: "Nepal",
    rating: "★ 5.0",
    reviews: 189,
    duration: "14 Days / 13 Nights",
    groupSize: "6-12 people",
    tags: ["Everest Base Camp", "Sherpa Villages", "Himalayan Views"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Bhutan Cultural Discovery",
    country: "Bhutan",
    rating: "★ 4.8",
    reviews: 156,
    duration: "8 Days / 7 Nights",
    groupSize: "4-10 people",
    tags: ["Tiger's Nest", "Dzongs", "Buddhist Festivals"],
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Sri Lanka Highlights",
    country: "Sri Lanka",
    rating: "★ 4.9",
    reviews: 203,
    duration: "10 Days / 9 Nights",
    groupSize: "2-12 people",
    tags: ["Sigiriya", "Yala Safari", "Beach Relaxation"],
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Rajasthan Royal Heritage",
    country: "India",
    rating: "★ 4.7",
    reviews: 178,
    duration: "12 Days / 11 Nights",
    groupSize: "4-16 people",
    tags: ["Palace Hotels", "Desert Safari", "Local Markets"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Kerala Backwaters & Beaches",
    country: "India",
    rating: "★ 4.8",
    reviews: 167,
    duration: "9 Days / 8 Nights",
    groupSize: "2-10 people",
    tags: ["Houseboat Stay", "Ayurvedic Spa", "Tea Plantations"],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

const inclusions = [
  { icon: "🏨", title: "Accommodation", desc: "Handpicked hotels & lodges" },
  { icon: "🚗", title: "Transportation", desc: "Private vehicles with drivers" },
  { icon: "🧭", title: "Expert Guides", desc: "Licensed local guides" },
  { icon: "🍽️", title: "Meals", desc: "Breakfast & select meals included" }
];

const moreSanctuaries = [
  {
    title: "Kanha National Park",
    location: "India (Madhya Pradesh)",
    desc: "Inspiration for Rudyard Kipling's 'The Jungle Book' offering tiger tours, barasingha viewing, and nature trails.",
    tags: ["Tigers", "Barasingha"]
  },
  {
    title: "Udawalawe National Park",
    location: "Sri Lanka",
    desc: "Best place in Sri Lanka for elephant sightings with herds of 50+ elephants in open grasslands.",
    tags: ["Elephants", "Water Birds"]
  },
  {
    title: "Bardia National Park",
    location: "Nepal",
    desc: "Nepal's largest protected area with pristine wilderness. Home to wild elephants, rhinos, and Bengal tigers.",
    tags: ["Tigers", "Dolphins"]
  },
  {
    title: "Nagarhole National Park",
    location: "India (Karnataka)",
    desc: "Part of Nilgiri Biosphere Reserve. Rich biodiversity with tigers, leopards, Indian bison (gaur), and birds.",
    tags: ["Tigers", "Gaur"]
  },
  {
    title: "Gir National Park",
    location: "India (Gujarat)",
    desc: "The only habitat in the world that harbours Asiatic lions. Provides special safari trails and wildlife viewing.",
    tags: ["Asiatic Lions", "Leopards"]
  },
  {
    title: "Bundala National Park",
    location: "Sri Lanka",
    desc: "Ramsar wetland site famous for migratory water birds, including greater flamingos and painted storks.",
    tags: ["Flamingos", "Wetland Birds"]
  }
];

export default function TourPage() {
  return (
    <div className="bg-light">
      {/* 1. HERO BANNER */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container py-4">
          <h1 className="fw-bold display-5">Our Tour Packages</h1>
          <p className="lead fs-6 text-white-50 mx-auto" style={{ maxWidth: "600px" }}>
            Carefully curated experiences designed for European travelers seeking authentic adventures.
          </p>
        </div>
      </header>

      {/* 2. TOUR CARDS GRID */}
      <section className="container py-5">
        <div className="row g-4">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="position-relative" style={{ height: "220px" }}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
                    {tour.country}
                  </span>
                  {tour.featured && (
                    <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark px-3 py-2 rounded-pill">
                      Featured
                    </span>
                  )}
                </div>

                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="card-title fw-bold text-dark">{tour.title}</h5>
                    <p className="text-warning small mb-3">
                      {tour.rating} <span className="text-muted">({tour.reviews} reviews)</span>
                    </p>

                    <ul className="list-unstyled small text-secondary mb-3">
                      <li className="mb-1">📅 {tour.duration}</li>
                      <li>👥 {tour.groupSize}</li>
                    </ul>

                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {tour.tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-light text-secondary border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <span className="text-muted small">Pricing available on request</span>
                    <button className="btn btn-primary btn-sm rounded-3 px-3">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">What's Included in Our Tours</h2>
          <p className="text-muted small mb-5">We take care of every detail so you can focus on enjoying your journey</p>

          <div className="row g-4">
            {inclusions.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="p-4 rounded-4 bg-light border border-0 h-100">
                  <div className="fs-1 mb-2">{item.icon}</div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MORE WILDLIFE SANCTUARIES */}
      <section className="container py-5">
        <h3 className="fw-bold text-center mb-4">More Wildlife Sanctuaries</h3>
        <div className="row g-4">
          {moreSanctuaries.map((sanc, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border rounded-4 p-4 shadow-sm">
                <div>
                  <h5 className="fw-bold mb-1">{sanc.title}</h5>
                  <p className="text-primary small fw-semibold mb-2">{sanc.location}</p>
                  <p className="text-secondary small">{sanc.desc}</p>
                </div>
                <div className="d-flex flex-wrap gap-1 mt-auto pt-2">
                  {sanc.tags.map((t, idx) => (
                    <span key={idx} className="badge bg-light text-dark border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}