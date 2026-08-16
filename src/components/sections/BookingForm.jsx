import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'Birthday',
    date: '',
    time: '',
    guests: '2',
    decoration: 'No',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct integration trigger
    const message = `*New Reservation Request - With You Cafe*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Occasion:* ${form.type}%0A*Date:* ${form.date} at ${form.time}%0A*Guests:* ${form.guests}%0A*Decorations:* ${form.decoration}%0A*Note:* ${form.notes || 'None'}`;
    window.open(`https://wa.me/917821824705?text=${message}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-cafe-surface relative text-cafe-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cafe-accent text-xs uppercase tracking-widest mb-2">Reservations & Inquiries</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">Let's Create Your Moment.</h2>
          <p className="text-cafe-muted mt-3">Planning a birthday, anniversary, or special date? Tell us what you have in mind.</p>
        </div>

        <div className="bg-cafe-dark/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Your request has been received ❤️</h3>
              <p className="text-cafe-muted">We will contact you shortly on WhatsApp/Phone to confirm your arrangements.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-name" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Your Name</label>
                <input
                  id="booking-name"
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-accent transition-colors"
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Phone Number</label>
                <input
                  id="booking-phone"
                  required
                  type="tel"
                  placeholder="e.g. 078218 24705"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-accent transition-colors"
                  onChange={e => setForm({...form, phone: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="booking-type" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Celebration Type</label>
                <select
                  id="booking-type"
                  className="w-full bg-cafe-dark border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-accent"
                  onChange={e => setForm({...form, type: e.target.value})}
                >
                  <option>Birthday Celebration 🎂</option>
                  <option>Anniversary Date 💍</option>
                  <option>Couple Date ❤️</option>
                  <option>Casual Hangout ☕</option>
                  <option>Other Special Event ✨</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-guests" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Number of Guests</label>
                <input
                  id="booking-guests"
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cafe-accent"
                  onChange={e => setForm({...form, guests: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Preferred Date</label>
                <input
                  id="booking-date"
                  required
                  type="date"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-cafe-cream focus:outline-none focus:border-cafe-accent"
                  onChange={e => setForm({...form, date: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="booking-time" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Preferred Time</label>
                <input
                  id="booking-time"
                  required
                  type="time"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-cafe-cream focus:outline-none focus:border-cafe-accent"
                  onChange={e => setForm({...form, time: e.target.value})}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="booking-notes" className="block text-xs uppercase tracking-wider text-cafe-muted mb-2">Decoration & Special Requests</label>
                <textarea
                  id="booking-notes"
                  rows="3"
                  placeholder="Need balloons, candle-light setup, customized cake, or flower arrangements?"
                  className="w-full bg-white/5 border border-white/15 rounded-xl p-4 text-sm focus:outline-none focus:border-cafe-accent"
                  onChange={e => setForm({...form, notes: e.target.value})}
                ></textarea>
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cafe-burgundy to-cafe-accent text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(226,149,120,0.4)] transition-all duration-300"
                >
                  <Send className="w-4 h-4" /> Send Booking Request ❤️
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};