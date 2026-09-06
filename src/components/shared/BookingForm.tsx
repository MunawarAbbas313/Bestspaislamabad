"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Clock, User, MessageSquare, Check } from "lucide-react";

interface BookingFormData {
  name: string;
  phone: string;
  massageType: string;
  time: string;
  date: string;
}

const massageTypes = [
  "Full Body Massage - PKR 5,000",
  "Deep Tissue Massage - PKR 6,000", 
  "Thai Massage - PKR 5,500",
  "Aromatherapy Massage - PKR 6,500",
  "Hot Stone Therapy - PKR 7,000",
  "Couples Spa - PKR 12,000",
  "Swedish Massage - PKR 5,000",
  "Sports Massage - PKR 6,500"
];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", 
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
];

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    massageType: "",
    time: "",
    date: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    const message = `
🧘‍♀️ *New Spa Booking Request* 🧘‍♀️

📝 *Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Date: ${formData.date}
• Time: ${formData.time}

💆‍♀️ *Service Requested:*
${formData.massageType}

📍 *Location:* Best Spa Islamabad, Bahria Town Phase 7, Near Nando's & Wallayat Complex

📞 *Contact:* 0370 0802980

---
*Please confirm this booking and reply with availability.*
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.massageType || !formData.time || !formData.date) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    const whatsappNumber = "923700802980"; // Pakistan country code + number without 0
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      massageType: "",
      time: "",
      date: ""
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-orange-50 p-8 rounded-3xl border border-emerald-100 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold font-playfair text-emerald-700 mb-4">
          Booking Request Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Your booking request has been sent to our WhatsApp. We'll confirm your appointment shortly.
        </p>
        <div className="bg-white p-4 rounded-xl border border-emerald-200 mb-6">
          <p className="text-sm text-emerald-700">
            <strong>Next Steps:</strong><br />
            1. Check WhatsApp for confirmation<br />
            2. We'll reply within 30 minutes<br />
            3. Confirm your appointment time
          </p>
        </div>
        <Button 
          onClick={resetForm}
          className="bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-orange-50 p-8 rounded-3xl border border-emerald-100">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold font-playfair text-emerald-700 mb-4">
          Book Your Spa Appointment
        </h3>
        <p className="text-muted-foreground">
          Fill in your details and we'll send your booking request via WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <User className="w-4 h-4 text-emerald-600" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            placeholder="03XX XXXXXXX"
            pattern="[0-9]{11}"
            required
          />
        </div>

        {/* Date Field */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Preferred Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            required
          />
        </div>

        {/* Time Field */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            Preferred Time *
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            required
          >
            <option value="">Select a time slot</option>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {/* Massage Type Field */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Massage Type *
          </label>
          <select
            name="massageType"
            value={formData.massageType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
            required
          >
            <option value="">Select massage type</option>
            {massageTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <MessageSquare className="w-5 h-5" />
              Send Booking via WhatsApp
            </>
          )}
        </Button>

        {/* Info Note */}
        <div className="bg-white p-4 rounded-xl border border-emerald-200">
          <p className="text-sm text-emerald-700 text-center">
            <strong>📱 WhatsApp Booking:</strong> Your request will be sent directly to our WhatsApp number for instant confirmation.
          </p>
        </div>
      </form>
    </div>
  );
}
