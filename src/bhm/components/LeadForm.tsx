/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Phone, MapPin, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Lead } from '../types';

interface LeadFormProps {
  onLeadAdded?: () => void;
  compact?: boolean;
}

export default function LeadForm({ onLeadAdded, compact = false }: LeadFormProps) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [courseInterest, setCourseInterest] = useState('BHM');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    if (!phoneNumber.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,13}$/.test(phoneNumber.trim())) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!city.trim()) tempErrors.city = 'City is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard server/DB delay beautifully
    setTimeout(() => {
      const newLead: Lead = {
        id: 'lead_' + Math.random().toString(36).substring(2, 9),
        name: name.trim(),
        phone: phoneNumber.trim(),
        courseInterest: courseInterest,
        city: city.trim(),
        timestamp: new Date().toISOString(),
        status: 'New',
        notes: 'Submitted via Landing Page Main Form'
      };

      // Retrieve existing leads
      const existingLeadsStr = localStorage.getItem('amc_bhm_leads');
      const existingLeads: Lead[] = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      existingLeads.unshift(newLead);
      localStorage.setItem('amc_bhm_leads', JSON.stringify(existingLeads));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      if (onLeadAdded) {
        onLeadAdded();
      }

      // Reset form fields
      setName('');
      setPhoneNumber('');
      setCity('');
    }, 1200);
  };

  const citiesInIndia = [
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Mumbai',
    'Delhi NCR',
    'Kolkata',
    'Pune',
    'Kochi',
    'Coimbatore',
    'Mangalore',
    'Mysore',
    'Other'
  ];

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-lightblue/30 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-bounce text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-3">Submission Successful!</h3>
        <p className="text-gray-600 mb-6 text-sm max-w-sm">
          Thank you for applying. A Senior Hospitality Career Counselor from AMC Degree College will contact you within the next 24 hours to schedule your counseling session.
        </p>
        <div className="bg-brand-lightblue/10 p-4 rounded-xl border border-brand-lightblue/30 mb-8 max-w-sm">
          <span className="text-xs uppercase tracking-wider font-bold text-brand-navy block mb-1">
            Free Hospitality Career Counseling Session
          </span>
          <span className="text-xs text-gray-500">
            Exclusive entry ticket generated for: <strong className="text-gray-900 block mt-1">Pending Callback Verification</strong>
          </span>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2.5 bg-brand-navy text-white font-medium rounded-lg text-sm hover:bg-brand-navy/90 transition-all duration-300 shadow-md hover:shadow-brand-navy/20 cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white text-gray-800 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${compact ? 'max-w-md w-full' : ''}`}>
      {/* Form Header */}
      <div className="bg-brand-navy text-white px-8 py-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-lightblue/10 rounded-full blur-xl -ml-6 -mb-6 pointer-events-none"></div>
        
        <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-navy text-xs font-extrabold uppercase rounded-full tracking-wider mb-2">
          Admissions Open
        </span>
        <h3 className="text-xl font-bold tracking-tight">Apply Now for BHM 2026</h3>
        <p className="text-brand-lightblue text-xs mt-1">Fill the form to secure standard application fee waiver & benefits</p>
      </div>

      <div className="p-8">
        {/* Counselling Session Ticket Display */}
        <div className="mb-6 p-4 bg-yellow-50/70 border border-brand-yellow/30 rounded-2xl flex items-start gap-3">
          <div className="h-10 w-10 shrink-0 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-navy font-bold shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
              Free Hospitality Career Counseling Session
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
              Included with every application today. Plan your hospitality future in culinary, management, or luxury cruise liner roles.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name-input" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 pl-1">
              Name
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-gray-400">
                <User className="w-4 h-4" />
              </span>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className={`w-full bg-gray-50/50 border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-navy focus:ring-brand-lightblue/40'} rounded-xl pl-10 pr-4 py-3 text-sm transition-all focus:outline-none focus:ring-4`}
              />
            </div>
            {errors.name && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.name}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone-input" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 pl-1">
              Phone
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-gray-400">
                <Phone className="w-4 h-4" />
              </span>
              <input
                id="phone-input"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="10-digit mobile number"
                className={`w-full bg-gray-50/50 border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-navy focus:ring-brand-lightblue/40'} rounded-xl pl-10 pr-4 py-3 text-sm transition-all focus:outline-none focus:ring-4`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.phone}</p>}
          </div>

          {/* Course (Selected/Disabled to stick to request) */}
          <div>
            <label htmlFor="course-input" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 pl-1">
              Course Interest
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-gray-400">
                <BookOpen className="w-4 h-4" />
              </span>
              <select
                id="course-input"
                disabled
                className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-600 appearance-none pointer-events-none"
              >
                <option value="BHM">Bachelor of Hotel Management (BHM)</option>
              </select>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 pl-1">This specific program is hosted at Bangalore Campus.</p>
          </div>

          {/* City Selector */}
          <div>
            <label htmlFor="city-input" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 pl-1">
              City
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-gray-400">
                <MapPin className="w-4 h-4" />
              </span>
              <select
                id="city-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`w-full bg-gray-50/50 border ${errors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-brand-navy focus:ring-brand-lightblue/40'} rounded-xl pl-10 pr-8 py-3 text-sm transition-all focus:outline-none focus:ring-4 appearance-none`}
              >
                <option value="">Select your city</option>
                {citiesInIndia.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="absolute right-3.5 top-4.5 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500"></span>
            </div>
            {errors.city && <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.city}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-brand-yellow hover:bg-brand-yellow/98 text-brand-navy font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-yellow/10 active:scale-[0.99] flex items-center justify-center gap-2 text-xs cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin"></span>
                Processing Profile...
              </>
            ) : (
              'Apply Now'
            )}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <span className="text-[10px] text-gray-400 block">
            🔒 Your private details are secure with AMC Admissions.
          </span>
        </div>
      </div>
    </div>
  );
}
