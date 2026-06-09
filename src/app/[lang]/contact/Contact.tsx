'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, ChevronDown } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import { submitContact } from '../../actions';

export default function ContactContent({ dict }: { dict: any }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    phone: '',
    message: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let error = '';
    if (['firstName', 'lastName', 'jobTitle', 'companyName'].includes(name)) {
      if (!/^[a-zA-Z\sÀ-ÿ\u00f1\u00d1]*$/.test(value)) {
        error = dict.validation.onlyLetters;
      }
    } else if (name === 'phone') {
      if (!/^[0-9\s+()-]*$/.test(value)) {
        error = dict.validation.onlyNumbers;
      }
    } else if (name === 'message') {
      if (!/^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1.,!?()'-]*$/.test(value)) {
        // Allowing basic punctuation for a message, but strictly no complex symbols
        // Wait, the user specifically requested no symbols. Let's strictly adhere to letters, numbers, and spaces.
        if (!/^[a-zA-Z0-9\sÀ-ÿ\u00f1\u00d1]*$/.test(value)) {
          error = dict.validation.noSymbols;
        }
      }
    } else if (name === 'email') {
      if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = dict.validation.invalidEmail;
      }
    }
    setValidationErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(validationErrors).some(err => err !== '')) return;
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContact(formData);
      setStatus('success');
      form.reset();
      setValidationErrors({ firstName: '', lastName: '', jobTitle: '', companyName: '', phone: '', message: '', email: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const hasErrors = Object.values(validationErrors).some(err => err !== '');

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden py-12 px-4">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="net" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#d1d5db" />
                <path d="M 50 50 L 150 150 M 50 50 L -50 150 M 50 50 L 150 -50 M 50 50 L -50 -50" stroke="#f3f4f6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#net)" />
          </svg>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 max-w-lg w-full text-center relative z-10">
          <h3 className="text-2xl font-bold text-[#6225E6] mb-4">{dict.successTitle}</h3>
          <p className="text-gray-600 mb-8">{dict.successText}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-[#00c29a] text-white font-bold py-2 px-8 rounded hover:bg-[#00a885] transition-colors"
          >
            {dict.backButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden py-24 px-4 xl:px-8 flex flex-col items-center">
      {/* Network Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full md:h-[70vh] z-0 pointer-events-none">
        <Image
          src="/images/about-background.webp"
          alt="Background Pattern"
          fill
          className="object-cover object-top opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Header section outside card */}
        <div className="flex flex-col md:flex-row mb-8 w-full">
          {/* Title above left column */}
          <div className="w-full md:w-5/12 flex items-center justify-start">
            <h1 className="text-[#6225E6] text-3xl md:text-4xl font-bold">{dict.title}</h1>
          </div>
          {/* Icon above right column */}
          <div className="w-full md:w-7/12 flex items-center justify-center hidden md:flex pb-6">
             <svg width="0" height="0">
               <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#b392f0" />
                 <stop offset="100%" stopColor="#6225E6" />
               </linearGradient>
             </svg>
             <Mail stroke="url(#envelopeGradient)" size={120} strokeWidth={2.5} />
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-[2rem] shadow-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row w-full">
          
          {/* Left Side: Information */}
          <div className="w-full md:w-5/12 p-10 md:p-14 flex flex-col items-center justify-center text-center bg-white relative">
            <div className="mb-6">
              <Image 
                src="/images/corelogo.png" 
                alt="Core Resources" 
                width={150} 
                height={150} 
                className="w-32 h-auto object-contain mx-auto"
              />
            </div>
            
            <h2 className="text-[#6225E6] text-2xl font-bold mb-1">{dict.title}</h2>
            <p className="text-gray-800 text-lg font-semibold mb-1">{dict.helpText1}</p>
            <p className="text-[#7C4EF6] text-lg font-bold mb-1">{dict.helpText2}</p>
            <p className="text-gray-800 text-lg font-semibold mb-6">{dict.helpText3}</p>
            
            <div className="w-full h-px bg-gray-300 my-4"></div>
            
            <p className="text-gray-500 text-sm mb-8">{dict.fillDetails}</p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/core-resources" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#6225E6] transition-colors">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12 p-8 md:p-14 bg-white/70 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {dict.firstName}<span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    required 
                    onChange={handleChange}
                    className={`w-full border ${validationErrors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                    placeholder={dict.firstName}
                  />
                  {validationErrors.firstName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {dict.lastName}<span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    required 
                    onChange={handleChange}
                    className={`w-full border ${validationErrors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                    placeholder={dict.lastName}
                  />
                  {validationErrors.lastName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.jobTitle}<span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="jobTitle"
                  required 
                  onChange={handleChange}
                  className={`w-full border ${validationErrors.jobTitle ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                  placeholder={dict.jobTitle}
                />
                {validationErrors.jobTitle && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.jobTitle}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.company}<span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="companyName"
                  required 
                  onChange={handleChange}
                  className={`w-full border ${validationErrors.companyName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                  placeholder={dict.company}
                />
                {validationErrors.companyName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.email}<span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  onChange={handleChange}
                  className={`w-full border ${validationErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                  placeholder="Email@example.com"
                />
                {validationErrors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.phone}
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  onChange={handleChange}
                  className={`w-full border ${validationErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300`}
                  placeholder="00 0000 0000"
                />
                {validationErrors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.service}<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    required 
                    name="service"
                    className="w-full border border-gray-200 rounded text-sm py-2.5 px-3 appearance-none focus:outline-none focus:border-[#6225E6] focus:ring-1 focus:ring-[#6225E6] transition-all bg-transparent text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled>{dict.select}</option>
                    <option value="Build Your Team" className="font-bold bg-gray-50">{dict.servicesOptions.buildTeam}</option>
                    <option value="Recruitment & Selection">{dict.servicesOptions.recruitment}</option>
                    <option value="Staffing">{dict.servicesOptions.staffing}</option>
                    <option value="Employer of Record">{dict.servicesOptions.eor}</option>
                    <option value="Staff Augmentation">{dict.servicesOptions.staffAugmentation}</option>
                    <option value="Employment Visa Services">{dict.servicesOptions.employmentVisa}</option>
                    <option value="Hiring, onboarding and ongoing support">{dict.servicesOptions.hiringSupport}</option>
                    
                    <option value="Run Your Operations" className="font-bold bg-gray-50 mt-2">{dict.servicesOptions.runOps}</option>
                    <option value="Bookkeeping">{dict.servicesOptions.bookkeeping}</option>
                    <option value="Payroll Services">{dict.servicesOptions.payroll}</option>
                    <option value="Contractor Payments">{dict.servicesOptions.contractor}</option>
                    <option value="BPO / Back-Office Support">{dict.servicesOptions.bpo}</option>
                    <option value="Administrative Support">{dict.servicesOptions.administrative}</option>
                    <option value="Finance Support">{dict.servicesOptions.finance}</option>
                    
                    <option value="Other" className="mt-2">{dict.servicesOptions.other}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {dict.message}
                </label>
                <textarea 
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  className={`w-full border ${validationErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#6225E6] focus:ring-[#6225E6]'} rounded text-sm py-2.5 px-3 focus:outline-none focus:ring-1 transition-all bg-transparent placeholder-gray-300 resize-none`}
                  placeholder={dict.placeholderMessage}
                ></textarea>
                {validationErrors.message && <p className="text-red-500 text-[10px] mt-1 font-semibold">{validationErrors.message}</p>}
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting' || hasErrors}
                  className="bg-[#00c29a] text-white font-bold py-2.5 px-8 rounded text-sm tracking-wide hover:bg-[#00a885] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? '...' : dict.send}
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
