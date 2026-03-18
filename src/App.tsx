import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Scissors, 
  Sparkles, 
  Heart, 
  MessageCircle,
  Calendar,
  User,
  Send
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-blush-900">
          BLUSH <span className="text-gold font-light italic">Beauty</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium hover:text-blush-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#appointment" className="btn-primary py-2 px-6 text-sm">Book Now</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blush-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-blush-600 font-medium tracking-[0.3em] uppercase mb-4 block">Welcome to BLUSH</span>
          <h1 className="text-5xl md:text-7xl font-serif text-blush-900 leading-tight mb-6">
            Enhance Your <br />
            <span className="italic text-gold">Natural Beauty</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-lg leading-relaxed">
            Experience premium beauty services in the heart of Anushakti Nagar. 
            Our expert stylists and beauticians are dedicated to making you feel radiant and confident.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#appointment" className="btn-primary flex items-center justify-center gap-2">
              Book Appointment <ChevronRight size={18} />
            </a>
            <a href="tel:+918356896953" className="btn-outline flex items-center justify-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-blush-700 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Client" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm">Trusted by 500+ Happy Clients</p>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block glass p-6 rounded-2xl shadow-xl max-w-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blush-100 p-2 rounded-lg text-blush-600">
            <Sparkles size={20} />
          </div>
          <span className="font-serif font-bold text-blush-900">Special Offer</span>
        </div>
        <p className="text-sm text-gray-600">Get 20% OFF on your first Bridal Makeup booking!</p>
        <p className="text-xs text-blush-500 mt-2 font-bold">Limited Slots Available!</p>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Service" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-gold text-white p-6 rounded-2xl shadow-lg">
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-xs uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-blush-900 mb-8">
              Experience the Art of <br />
              <span className="italic text-gold">Personalized Beauty</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At BLUSH Beauty Parlour, we believe every woman deserves to feel like a queen. 
              Our journey began with a simple mission: to provide high-quality, professional 
              beauty services that enhance your natural features while providing a relaxing escape 
              from the everyday hustle.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Located in the heart of Anushakti Nagar, our salon is a sanctuary of style and hygiene. 
              Our team of experienced professionals stays ahead of the latest trends to ensure 
              you always leave looking and feeling your absolute best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <User className="text-blush-500" />, title: "Expert Staff", desc: "Highly trained professionals" },
                { icon: <Heart className="text-blush-500" />, title: "Hygiene First", desc: "Strict safety protocols" },
                { icon: <Sparkles className="text-blush-500" />, title: "Premium Products", desc: "Only the best for your skin" },
                { icon: <Clock className="text-blush-500" />, title: "Personalized", desc: "Tailored to your needs" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-blush-50 p-3 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-blush-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Facial & Cleanup",
      desc: "Rejuvenate your skin with our signature facials tailored to your skin type.",
      icon: <Sparkles size={32} />,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Bridal Makeup",
      desc: "Look breathtaking on your special day with our professional bridal packages.",
      icon: <Heart size={32} />,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hair Styling & Cutting",
      desc: "From trendy cuts to elegant updos, our stylists transform your look.",
      icon: <Scissors size={32} />,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Waxing & Threading",
      desc: "Smooth, flawless skin with our gentle and precise hair removal services.",
      icon: <CheckCircle2 size={32} />,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Manicure & Pedicure",
      desc: "Pamper your hands and feet with our relaxing spa treatments.",
      icon: <Star size={32} />,
      image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Skin Treatments",
      desc: "Advanced skin care solutions for a healthy, glowing complexion.",
      icon: <Sparkles size={32} />,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="section-padding bg-blush-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blush-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600">
            We offer a wide range of beauty treatments designed to make you look and feel your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-2xl text-blush-500 shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-blush-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <a href="#appointment" className="text-blush-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Book Now <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Skilled Professionals", desc: "Our team consists of certified experts with years of experience." },
    { title: "Affordable Pricing", desc: "Premium beauty services that don't break the bank." },
    { title: "Premium Products", desc: "We use only high-end, skin-friendly international brands." },
    { title: "Hygienic Environment", desc: "Your safety is our priority. We maintain strict sanitization." }
  ];

  return (
    <section className="section-padding bg-blush-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Sparkles size={400} className="text-white" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Why Choose <br />
              <span className="italic text-gold">BLUSH Beauty Parlour?</span>
            </h2>
            <p className="text-blush-100 mb-12 max-w-lg leading-relaxed">
              We are committed to providing an exceptional salon experience. 
              From the moment you walk in, you'll be treated with the utmost care and professionalism.
            </p>
            
            <div className="space-y-8">
              {features.map((f, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center border border-gold/30">
                    <CheckCircle2 className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold mb-2">{f.title}</h4>
                    <p className="text-blush-200 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527799822340-304cf662a3bb?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Experience" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl text-blush-900 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold">4.9/5 Rating</span>
                </div>
                <p className="text-sm italic">"Best salon experience in Mumbai!"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blush-900 mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600">Take a look at our work and our beautiful salon space.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Regular Client", text: "BLUSH is my go-to place for everything beauty! The staff is so polite and the hygiene standards are top-notch. Highly recommend their facials." },
    { name: "Anjali Gupta", role: "Bride", text: "I chose BLUSH for my bridal makeup and it was the best decision. They made me look exactly how I imagined. Thank you for making my day special!" },
    { name: "Sneha Patil", role: "Regular Client", text: "The best hair styling service in Anushakti Nagar. They truly understand what suits your face shape. Very professional and affordable." },
    { name: "Megha Rao", role: "New Client", text: "First time here and I'm impressed! The ambiance is so relaxing and the results are amazing. Will definitely be back." }
  ];

  return (
    <section className="section-padding bg-blush-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-blush-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-blush-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-gold mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center text-blush-600 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-blush-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
    setFormData({ name: '', phone: '', service: '', date: '', time: '' });
  };

  return (
    <section id="appointment" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blush-900 text-white p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-serif mb-6">Book an <br /><span className="text-gold italic">Appointment</span></h2>
            <p className="text-blush-200 mb-10 leading-relaxed">
              Ready for a transformation? Fill out the form and our team will get back to you to confirm your slot.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-blush-300 uppercase tracking-widest">Call Us</p>
                  <p className="font-bold">+91 8356896953</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-blush-300 uppercase tracking-widest">Opening Hours</p>
                  <p className="font-bold">10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm font-bold text-gold mb-2 flex items-center gap-2">
                <Sparkles size={16} /> Limited Slots Available!
              </p>
              <p className="text-xs text-blush-100">Book now to secure your preferred date and time.</p>
            </div>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blush-500 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blush-500 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Service</label>
                <select 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blush-500 transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Choose a service</option>
                  <option value="facial">Facial & Cleanup</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="hair">Hair Styling & Cutting</option>
                  <option value="waxing">Waxing & Threading</option>
                  <option value="mani-pedi">Manicure & Pedicure</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blush-500 transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Time</label>
                  <input 
                    type="time" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blush-500 transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Confirm Booking <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-blush-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-blush-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Have questions or want to book a special package? Reach out to us via phone, 
              WhatsApp, or visit our salon in Anushakti Nagar.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blush-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blush-900 mb-1">Our Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    OLD MANADALA SHOPPING COMPLEX, SHOP NO 12 OLD, <br />
                    behind BEST BUS STOP, DAE COLONY, <br />
                    Anushakti Nagar, Mumbai, Maharashtra 400088
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blush-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blush-900 mb-1">Phone Number</h4>
                  <a href="tel:+918356896953" className="text-gray-600 text-sm hover:text-blush-500 transition-colors">
                    +91 8356896953
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blush-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blush-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm">Mon - Sun: 10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blush-500 shadow-sm hover:bg-blush-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blush-500 shadow-sm hover:bg-blush-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.520443324021!2d72.92344447520447!3d19.04082218215579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sBLUSH%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="text-3xl font-serif font-bold tracking-wider text-blush-900 mb-6 block">
              BLUSH <span className="text-gold font-light italic">Beauty</span>
            </a>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Your premier destination for luxury beauty services in Anushakti Nagar. 
              We believe in enhancing your natural beauty with professional care and premium products.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-blush-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-blush-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blush-900 mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {['Bridal Makeup', 'Facials', 'Hair Styling', 'Waxing', 'Mani-Pedi'].map(link => (
                <li key={link}>
                  <a href="#services" className="text-gray-500 hover:text-blush-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BLUSH Beauty Parlour. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-blush-500 text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blush-500 text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918356896953" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
