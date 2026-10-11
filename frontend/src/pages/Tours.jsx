import React from "react";
import { Link } from "react-router-dom";
import "./Tours.css";

// 1. TOUR PACKAGES DATA
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
  },
  {
    id: 7,
    title: "Wildlife Safari Adventure",
    country: "India",
    rating: "★ 4.9",
    reviews: 132,
    duration: "6 Days / 5 Nights",
    groupSize: "4-12 people",
    tags: ["Tiger Sightings", "Jungle Safari", "Bird Watching"],
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&h=520&q=80",
    featured: true
  }
];

// 2. INCLUSIONS
const inclusions = [
  { icon: "🏨", title: "Accommodation", desc: "Handpicked hotels & lodges" },
  { icon: "🚗", title: "Transportation", desc: "Private vehicles with drivers" },
  { icon: "👨‍🏫", title: "Expert Guides", desc: "Licensed local guides" },
  { icon: "🍽️", title: "Meals", desc: "Breakfast & select meals included" }
];

// 3. MORE WILDLIFE SANCTUARIES (9 CARDS)
const moreSanctuaries = [
  {
    title: "Kanha National Park",
    location: "India (Madhya Pradesh)",
    desc: "The park is characterized by a variety of wildlife, meadows, and forests. Inspiration for Rudyard Kipling's 'The Jungle Book' offering tiger tours, barasingha viewing, and nature tours that are peaceful and worth visiting by wildlife and photography enthusiasts.",
    tags: ["Tigers", "Barasingha"]
  },
  {
    title: "Udawalawe National Park",
    location: "Sri Lanka",
    desc: "Best place in Sri Lanka for elephant sightings with herds of 50+ elephants. Open grasslands provide excellent photography opportunities.",
    tags: ["Elephants", "Water Birds"]
  },
  {
    title: "Bardia National Park",
    location: "Nepal",
    desc: "Nepal's largest protected area with pristine wilderness. Home to wild elephants, greater one-horned rhinos, and endangered Bengal tigers.",
    tags: ["Tigers", "Dolphins"]
  },
  {
    title: "Nagarhole National Park",
    location: "India (Karnataka)",
    desc: "Part of Nilgiri Biosphere Reserve. Rich biodiversity with tigers, leopards, Indian bison (gaur), and over 270 bird species.",
    tags: ["Tigers", "Gaur"]
  },
  {
    title: "Gir National Park",
    location: "India (Gujarat)",
    desc: "The world has no other habitat than Gir National Park that harbours Asiatic lions. It provides special safari, abundance of wildlife and natural beauty with population of 650+ lions.",
    tags: ["Asiatic Lions", "Leopards"]
  },
  {
    title: "Bundala National Park",
    location: "Sri Lanka",
    desc: "Ramsar wetland site famous for migratory water birds. Over 200 bird species including greater flamingos and painted storks.",
    tags: ["Flamingos", "Wetland Birds"]
  },
  {
    title: "Jim Corbett National Park",
    location: "India (Uttarakhand)",
    desc: "India's oldest national park which has tiger safaris and river sceneries. Tourists are able to experience wildlife, birdwatching and adventure in a natural setting.",
    tags: ["Tigers", "Birdwatching"]
  },
  {
    title: "Tadoba National Park",
    location: "India (Maharashtra)",
    desc: "Known to be the home of tigers and thick forests. It has exciting safaris, varieties of wildlife and a tranquil environment which makes it a viable place of wildlife tourism.",
    tags: ["Tigers", "Sloth Bears"]
  },
  {
    title: "Bharatpur (Keoladeo)",
    location: "India (Rajasthan)",
    desc: "Keoladeo National Park is a paradise of birds. The best fit is ideal with nature lovers and wildlife enthusiast seeking migratory bird species.",
    tags: ["Bird Sanctuary", "UNESCO Site"]
  }
];

// 4. REGIONAL DESTINATIONS DATA
const northIndiaCities = [
  {
    title: "Varanasi",
    desc: "One of the oldest cities is Varanasi, which is related to spiritual practices and ghats. Learn culture, temples and the famous Ganga Aarti ceremony.",
    tags: ["Spiritual", "Ganga Aarti"]
  },
  {
    title: "Haridwar",
    desc: "Haridwar is a holy city characterized by Ganga Aarti and religious ambiance. Temples, river ghats, and serene environment attract religious tourism.",
    tags: ["Holy City", "River Ghats"]
  },
  {
    title: "Amritsar",
    desc: "Known for the Golden Temple, which provides spiritual tranquility and Punjabi hospitality. Local cuisine, Wagah Border ceremony, and vibrant Sikh heritage.",
    tags: ["Golden Temple", "Sikh Heritage"]
  }
];

const rajasthanCities = [
  {
    title: "Jaipur",
    desc: "The Pink City with royal palaces, forts and colored markets. One of the best places of heritage tourism.",
    tags: ["Pink City"]
  },
  {
    title: "Udaipur",
    desc: "The City of Lakes with romantic scenes, palaces and boat tours. Perfect for luxury tourism and exploration.",
    tags: ["Lake City"]
  },
  {
    title: "Jaisalmer",
    desc: "The Golden City has scenic desert views, sand dunes and ancient forts. Camel rides and desert camps.",
    tags: ["Golden City"]
  },
  {
    title: "Jodhpur",
    desc: "The Blue City known for Mehrangarh Fort and colorful streets. Heritage tourism and traditional shopping.",
    tags: ["Blue City"]
  },
  {
    title: "Bikaner",
    desc: "Desert beauty, forts, camel safari and local delicacies. Junagarh fort and rich culture make it special.",
    tags: ["Desert Fort"]
  },
  {
    title: "Pushkar",
    desc: "Spiritual city known by sacred lake and Brahma Temple. Tranquil vibes, markets and cultural festivals.",
    tags: ["Sacred Lake"]
  },
  {
    title: "Nawalgarh",
    desc: "Havelis with beautiful paintings and Shekhawati background. Ideal for cultural tourists with traditional art.",
    tags: ["Havelis"]
  },
  {
    title: "Jawai",
    desc: "Destination of leopard safari and special wildlife. Mixture of nature, adventure, and luxury accommodation.",
    tags: ["Leopard Safari"]
  }
];

const southIndiaCities = [
  {
    title: "Kochi",
    desc: "Colonial attractiveness, beaches, and culture. Visit forts, markets, and local food in this coastal gem.",
    tags: ["Kerala"]
  },
  {
    title: "Alleppey",
    desc: "Houseboats and backwaters are popular in Alleppey. An ideal tourist place to visit and have a pleasant time.",
    tags: ["Backwaters"]
  },
  {
    title: "Munnar",
    desc: "Known by tea plantation and hill view. A serene nature resort with breathtaking landscapes.",
    tags: ["Tea Gardens"]
  },
  {
    title: "Madurai",
    desc: "Meenakshi Temple and colorful culture. Provides local traditions, spirituality and history.",
    tags: ["Tamil Nadu"]
  },
  {
    title: "Pondicherry",
    desc: "French street designs, beaches and serene atmosphere. Best to unwind and cultural discovery.",
    tags: ["French Colony"]
  },
  {
    title: "Mahabalipuram",
    desc: "Rock cut temples and seashores attraction. A UNESCO place ideal for history and architecture enthusiasts.",
    tags: ["UNESCO Site"]
  },
  {
    title: "Mysore",
    desc: "Famous with palaces, heritage and Dasara festival. One of the best cultural places in South India.",
    tags: ["Karnataka"]
  },
  {
    title: "Hampi",
    desc: "Ancient ruins, temples and landscapes. An ideal heritage tourism site in UNESCO World Heritage list.",
    tags: ["Ancient Ruins"]
  },
  {
    title: "Goa",
    desc: "Beaches, night life and Portuguese heritage. Ideal to have a good time with coastal relaxation.",
    tags: ["Beach Paradise"]
  }
];

const himalayanCities = [
  {
    title: "Darjeeling",
    desc: "Tea gardens and mountain sceneries. Perfect place for hill station lovers.",
    tags: ["West Bengal"]
  },
  {
    title: "Gangtok",
    desc: "Adventure, culture and mountains. Best in nature tourism with stunning Himalayan views.",
    tags: ["Sikkim"]
  },
  {
    title: "Pelling",
    desc: "Himalayan views and monasteries. An idyllic and picturesque location.",
    tags: ["Sikkim"]
  },
  {
    title: "Kalimpong",
    desc: "Monasteries and scenic beauty. A serene mountain resort in the Eastern Himalayas.",
    tags: ["West Bengal"]
  }
];

const historicTreasures = [
  {
    title: "Khajuraho",
    desc: "UNESCO-protected temples with detailed carvings. An exclusive place of ancient Indian art.",
    tags: ["UNESCO Site"]
  },
  {
    title: "Ajanta Ellora Caves",
    desc: "Ancient rock-cut architecture. One of the UNESCO heritage sites with stunning Buddhist art.",
    tags: ["Aurangabad"]
  },
  {
    title: "Orchha",
    desc: "Old temples and palaces along river Betwa. A serene cultural and sightseeing resort.",
    tags: ["Madhya Pradesh"]
  },
  {
    title: "Abhaneri",
    desc: "Recognized for Chand Baori stepwell, representing ancient architecture. Excellent historical destination.",
    tags: ["Rajasthan"]
  },
  {
    title: "Badami",
    desc: "Famous for cave temples and rock-cut architecture. An excellent historical attraction.",
    tags: ["Karnataka"]
  },
  {
    title: "Thanjavur",
    desc: "Brihadeeswarar Temple and classical art. A place for heritage and culture lovers.",
    tags: ["Tamil Nadu"]
  }
];

export default function TourPage() {
  return (
    <div className="tours-page bg-light">
      {/* 1. HERO BANNER */}
      <header className="tours-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Our Tour Packages</h1>
          <p className="lead mx-auto">
            Carefully curated experiences designed for travelers seeking authentic adventures.
          </p>
        </div>
      </header>

      {/* 2. TOUR CARDS GRID */}
      <section className="container py-5">
        <div className="row g-4">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="col-12 col-md-6 col-lg-4">
              <div className="card tour-card h-100 shadow-sm border-0">
                <div className="tour-card-image position-relative">
                  <img src={tour.image} alt={tour.title} loading="lazy" decoding="async" />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
                    {tour.country}
                  </span>
                  {tour.featured && (
                    <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold">
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

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                    <span className="text-muted small">On Request</span>
                    <Link to="/contact" className="btn btn-primary btn-sm rounded-3 px-3">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED SECTION */}
      <section className="inclusions-section border-top border-bottom py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">What's Included in Our Tours</h2>
          <p className="text-muted small mb-5">
            We take care of every detail so you can focus on enjoying your journey
          </p>

          <div className="row g-4">
            {inclusions.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="inclusion-box p-4 rounded-4 bg-white shadow-sm h-100">
                  <div className="fs-1 mb-2">{item.icon}</div>
                  <h6 className="fw-bold mb-1 text-dark">{item.title}</h6>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WILDLIFE SANCTUARIES & NATIONAL PARKS SECTION */}
      <section className="wildlife-overview-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 mb-2">Wildlife Sanctuaries & National Parks</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
              Experience the incredible biodiversity of the Indian subcontinent in world-renowned wildlife reserves
            </p>
          </div>

          {/* Top Wildlife Split: Tiger Left + Leopard/Elephant Right */}
          <div className="row g-4 mb-4">
            {/* Left Big Card: Tiger Reserves */}
            <div className="col-12 col-lg-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
                <div className="wildlife-card-img-wrap" style={{ height: "300px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80"
                    alt="Tiger Reserve"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="fw-bold mb-2">Tiger Reserves</h3>
                  <p className="text-secondary small mb-4">
                    India is home to over 70% of the world's wild tigers. Visit renowned reserves like
                    Ranthambore, Bandhavgarh, and Jim Corbett for your best chance to see these magnificent big cats in their natural habitat.
                  </p>

                  <div className="feature-item-border ps-3 mb-3">
                    <h6 className="fw-bold mb-1 fs-6">Ranthambore National Park, Rajasthan</h6>
                    <p className="text-muted small mb-0">
                      Famous for its diurnal tigers, ancient ruins, and the iconic Ranthambore Fort. Home to around 70+ tigers with excellent sighting opportunities.
                    </p>
                  </div>

                  <div className="feature-item-border ps-3 mb-3">
                    <h6 className="fw-bold mb-1 fs-6">Bandhavgarh National Park, Madhya Pradesh</h6>
                    <p className="text-muted small mb-0">
                      Highest tiger density in India with over 100 tigers. Ancient caves with Brahmi inscriptions and stunning sal forests.
                    </p>
                  </div>

                  <div className="feature-item-border ps-3 mb-4">
                    <h6 className="fw-bold mb-1 fs-6">Jim Corbett National Park, Uttarakhand</h6>
                    <p className="text-muted small mb-0">
                      India's oldest national park (est. 1936). Diverse landscapes from riverine grasslands to sal forests. Home to 200+ bird species.
                    </p>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge tag-badge">Royal Bengal Tiger</span>
                    <span className="badge tag-badge">Guided Safaris</span>
                    <span className="badge tag-badge">Photography Tours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stacked Horizontal Cards */}
            <div className="col-12 col-lg-6 d-flex flex-column gap-4">
              {/* Leopard Spotting */}
              <div className="card border-0 rounded-4 shadow-sm overflow-hidden bg-white flex-grow-1">
                <div className="row g-0 h-100">
                  <div className="col-12 col-sm-5">
                    <img
                      src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=600&q=80"
                      alt="Leopard Spotting"
                      className="w-100 h-100 object-fit-cover"
                      style={{ minHeight: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-7 p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="fw-bold mb-2">Leopard Spotting</h4>
                      <p className="text-secondary small mb-3">
                        Explore parks like Yala (Sri Lanka) and Wilpattu for exceptional leopard sightings, along with diverse wildlife including elephants and sloth bears.
                      </p>
                      <p className="small text-muted mb-2">
                        <strong>Yala National Park:</strong> Highest leopard density in the world. 47 species of reptiles and over 215 bird species.
                      </p>
                      <p className="small text-muted mb-3">
                        <strong>Wilpattu National Park:</strong> Largest park in Sri Lanka with unique 'villus' (natural lakes). Pristine wilderness experience.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge tag-badge">Sri Lankan Leopard</span>
                      <span className="badge tag-badge">Sloth Bears</span>
                      <span className="badge tag-badge">Water Buffalo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elephant & Rhino Reserves */}
              <div className="card border-0 rounded-4 shadow-sm overflow-hidden bg-white flex-grow-1">
                <div className="row g-0 h-100">
                  <div className="col-12 col-sm-5">
                    <img
                      src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80"
                      alt="Elephant and Rhino Reserves"
                      className="w-100 h-100 object-fit-cover"
                      style={{ minHeight: "220px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-7 p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="fw-bold mb-2">Elephant & Rhino Reserves</h4>
                      <p className="text-secondary small mb-3">
                        Witness majestic Asian elephants at Kaziranga and Periyar. These UNESCO World Heritage sites also protect one-horned rhinos and diverse bird species.
                      </p>
                      <p className="small text-muted mb-2">
                        <strong>Kaziranga National Park, Assam:</strong> UNESCO site with 2,400+ one-horned rhinos (2/3 of world population). Swamp deer, wild buffalo.
                      </p>
                      <p className="small text-muted mb-3">
                        <strong>Periyar Wildlife Sanctuary, Kerala:</strong> Scenic boat safaris on Periyar Lake. 40+ species of mammals including gaur and sambar deer.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge tag-badge">Asian Elephants</span>
                      <span className="badge tag-badge">One-horned Rhino</span>
                      <span className="badge tag-badge">Wild Buffalo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Feature Banner (Best Season, Safari Options, Accommodation) */}
          <div className="safari-feature-banner rounded-4 p-4 mb-4">
            <div className="row g-4 text-start">
              <div className="col-12 col-md-4">
                <h6 className="fw-bold text-primary mb-1">Best Season</h6>
                <p className="small text-secondary mb-0">
                  October to April offers the best wildlife viewing with pleasant weather and active animals
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h6 className="fw-bold text-primary mb-1">Safari Options</h6>
                <p className="small text-secondary mb-0">
                  Morning and evening game drives in open jeeps with expert naturalists and trackers
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h6 className="fw-bold text-primary mb-1">Accommodation</h6>
                <p className="small text-secondary mb-0">
                  Eco-lodges and luxury tented camps offering comfort while respecting nature
                </p>
              </div>
            </div>
          </div>

          {/* Chitwan & Royal Manas Cards */}
          <div className="row g-4">
            {/* Chitwan Card */}
            <div className="col-12 col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
                <div style={{ height: "240px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80"
                    alt="Chitwan National Park"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="p-4 d-flex flex-column h-100">
                  <span className="badge bg-dark rounded-pill px-3 py-1 align-self-start mb-2">Nepal</span>
                  <h4 className="fw-bold mb-2">Chitwan National Park</h4>
                  <p className="text-secondary small mb-3">
                    Nepal's first national park and UNESCO World Heritage Site in the subtropical Terai lowlands.
                  </p>
                  <ul className="list-unstyled small text-secondary mb-4">
                    <li className="mb-1">
                      <span className="bullet-point"></span>
                      <strong>Wildlife:</strong> 700+ one-horned rhinos, Bengal tigers, gharial crocodiles, 500+ bird species
                    </li>
                    <li className="mb-1">
                      <span className="bullet-point"></span>
                      <strong>Activities:</strong> Elephant safaris, canoe rides on Rapti River, jungle walks with naturalists
                    </li>
                    <li>
                      <span className="bullet-point"></span>
                      <strong>Unique:</strong> Tharu cultural experiences, elephant breeding center visits
                    </li>
                  </ul>
                  <div className="d-flex flex-wrap gap-1 mt-auto">
                    <span className="badge tag-badge">One-horned Rhino</span>
                    <span className="badge tag-badge">Bengal Tiger</span>
                    <span className="badge tag-badge">Gharial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bhutan Card */}
            <div className="col-12 col-md-6">
              <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
                <div style={{ height: "240px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Royal Manas & Jigme Dorji"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="p-4 d-flex flex-column h-100">
                  <span className="badge bg-dark rounded-pill px-3 py-1 align-self-start mb-2">Bhutan</span>
                  <h4 className="fw-bold mb-2">Royal Manas & Jigme Dorji National Parks</h4>
                  <p className="text-secondary small mb-3">
                    Bhutan's pristine protected areas covering over 51% of the country with unique Himalayan biodiversity.
                  </p>
                  <ul className="list-unstyled small text-secondary mb-4">
                    <li className="mb-1">
                      <span className="bullet-point"></span>
                      <strong>Wildlife:</strong> Golden langur, red panda, snow leopard, black-necked crane, takin (national animal)
                    </li>
                    <li className="mb-1">
                      <span className="bullet-point"></span>
                      <strong>Altitude:</strong> From subtropical forests (200m) to alpine meadows (7,000m)
                    </li>
                    <li>
                      <span className="bullet-point"></span>
                      <strong>Conservation:</strong> Carbon-negative country with strict environmental protection laws
                    </li>
                  </ul>
                  <div className="d-flex flex-wrap gap-1 mt-auto">
                    <span className="badge tag-badge">Snow Leopard</span>
                    <span className="badge tag-badge">Red Panda</span>
                    <span className="badge tag-badge">Takin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORE WILDLIFE SANCTUARIES (GRID OF 9 CARDS) */}
      <section className="container py-5">
        <h3 className="fw-bold text-center mb-4 fs-2">More Wildlife Sanctuaries</h3>
        <div className="row g-4">
          {moreSanctuaries.map((sanc, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                <div>
                  <h5 className="fw-bold mb-1 text-dark">{sanc.title}</h5>
                  <p className="text-secondary small fw-medium mb-2">{sanc.location}</p>
                  <p className="text-secondary small">{sanc.desc}</p>
                </div>
                <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                  {sanc.tags.map((t, idx) => (
                    <span key={idx} className="badge tag-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. EXPLORE INDIAN DESTINATIONS (HERO BANNER CARDS) */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-2">Explore Indian Destinations</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "680px" }}>
            From spiritual cities to royal palaces, from Himalayan hill stations to tropical beaches - discover the incredible diversity of India
          </p>
        </div>

        <div className="row g-4 mb-5">
          {/* Agra Card */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
              <div style={{ height: "280px" }}>
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
                  alt="Taj Mahal Agra"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="p-4">
                <span className="badge bg-dark rounded-pill px-3 py-1 mb-2">UNESCO World Heritage</span>
                <h4 className="fw-bold mb-2">Agra - The Taj Mahal</h4>
                <p className="text-secondary small mb-0">
                  Agra boasts of the Taj Mahal, which is among the wonders of the world. It has Mughal architecture, heritage, and culture that captures the hearts of millions of visitors annually.
                </p>
              </div>
            </div>
          </div>

          {/* Delhi Card */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white">
              <div style={{ height: "280px" }}>
                <img
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
                  alt="Qutub Minar Delhi"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="p-4">
                <span className="badge bg-dark rounded-pill px-3 py-1 mb-2">Capital City</span>
                <h4 className="fw-bold mb-2">Delhi - Past Meets Present</h4>
                <p className="text-secondary small mb-0">
                  Delhi is a mixture of the past and the present with landmarks, colorful markets, and culture. Visit heritage sites, street food and shopping experiences - an ideal destination for any traveler.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. REGION WISE CATEGORY SECTIONS */}
        {/* 7.1 North India */}
        <div className="destination-block mb-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 region-title-blue">
            <span className="region-icon">📍</span> North India - Spiritual & Heritage Cities
          </h4>
          <div className="row g-4">
            {northIndiaCities.map((item, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((t, i) => (
                      <span key={i} className="badge tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7.2 Rajasthan */}
        <div className="destination-block mb-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 region-title-orange">
            <span className="region-icon">📍</span> Rajasthan - Royal Palaces & Desert Cities
          </h4>
          <div className="row g-4">
            {rajasthanCities.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((t, i) => (
                      <span key={i} className="badge tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7.3 South India */}
        <div className="destination-block mb-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 region-title-green">
            <span className="region-icon">📍</span> South India - Temples, Beaches & Backwaters
          </h4>
          <div className="row g-4">
            {southIndiaCities.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((t, i) => (
                      <span key={i} className="badge tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7.4 Himalayan Region */}
        <div className="destination-block mb-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 region-title-purple">
            <span className="region-icon">📍</span> Himalayan Region - Hill Stations & Mountain Beauty
          </h4>
          <div className="row g-4">
            {himalayanCities.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((t, i) => (
                      <span key={i} className="badge tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7.5 Historic & Cultural Treasures */}
        <div className="destination-block mb-5">
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 region-title-brown">
            <span className="region-icon">📍</span> Historic & Cultural Treasures
          </h4>
          <div className="row g-4">
            {historicTreasures.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4">
                <div className="card h-100 border-0 rounded-4 p-4 shadow-sm bg-white info-hover-card">
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((t, i) => (
                      <span key={i} className="badge tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEED A CUSTOM TOUR? CTA BANNER */}
      <section className="container py-4 mb-5">
        <div className="custom-tour-cta text-white text-center rounded-4 p-5 shadow">
          <h2 className="fw-bold mb-3 fs-1">Need a Custom Tour?</h2>
          <p className="lead mx-auto mb-4 text-white-50" style={{ maxWidth: "600px" }}>
            We specialize in creating tailor-made itineraries based on your preferences, interests, and budget
          </p>
          <Link to="/contact" className="btn btn-light fw-semibold text-primary px-4 py-2 rounded-3 shadow-sm">
            Request Custom Itinerary
          </Link>
        </div>
      </section>
    </div>
  );
}