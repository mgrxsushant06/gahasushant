import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Clock,
  Instagram,
  Facebook,
  Copy,
  Check,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { ContactFormData } from '../types';
import { GeneralMicroWebBg } from './MicroWebBackground';

interface ContactSectionProps {
  initialService?: string;
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialPackage }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    websiteType: 'Business Website',
    budget: 'NPR 10,000–20,000',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [sendMethod, setSendMethod] = useState<'email' | 'whatsapp'>('email');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        websiteType: initialService.includes('News') ? 'News Portal' 
          : initialService.includes('E-Commerce') ? 'E-Commerce'
          : initialService.includes('Redesign') ? 'Website Redesign'
          : 'Business Website',
        projectDetails: `Inquiring about: ${initialService}.`
      }));
    }
    if (initialPackage) {
      setFormData(prev => ({
        ...prev,
        budget: initialPackage.includes('Starter') ? 'NPR 10,000–20,000' : 'NPR 20,000+',
        projectDetails: `Interested in the ${initialPackage} package.`
      }));
    }
  }, [initialService, initialPackage]);

  const websiteTypes = [
    'Business Website',
    'News Portal',
    'E-Commerce',
    'Portfolio',
    'Corporate',
    'Landing Page',
    'Website Redesign',
    'Other'
  ];

  const budgetOptions = [
    'NPR 10,000–20,000',
    'NPR 20,000+',
    "Let's Discuss"
  ];

  const getFormattedMessage = () => {
    return `New Web Project Inquiry for WebSathi (Sushant Gaha Magar)
==============================================
• Client Name: ${formData.name}
• Client Email: ${formData.email}
• Phone / WhatsApp: ${formData.phone}
• Business / Company: ${formData.company || 'N/A'}
• Website Type: ${formData.websiteType}
• Estimated Budget: ${formData.budget}
==============================================
Project Details & Goals:
${formData.projectDetails}`;
  };

  const handleCopyMessage = () => {
    const text = getFormattedMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openGmailCompose = () => {
    const subject = `Website Inquiry - ${formData.name || 'Client'} (${formData.websiteType})`;
    const body = getFormattedMessage();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=websushant07@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const openWhatsAppDirect = () => {
    const formattedWa = `*New Web Project Inquiry for WebSathi*
• *Name*: ${formData.name}
• *Email*: ${formData.email}
• *Phone*: ${formData.phone}
• *Business*: ${formData.company || 'N/A'}
• *Website Type*: ${formData.websiteType}
• *Budget*: ${formData.budget}
• *Project Details*: ${formData.projectDetails}`;

    const waUrl = `https://wa.me/9779769316767?text=${encodeURIComponent(formattedWa)}`;
    window.open(waUrl, '_blank');
  };

  const openDefaultMailClient = () => {
    const subject = `Website Inquiry - ${formData.name} (${formData.websiteType})`;
    const body = getFormattedMessage();
    const mailtoUrl = `mailto:websushant07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sendMethod === 'whatsapp') {
      openWhatsAppDirect();
      setSubmitted(true);
      return;
    }

    // Email Submission Flow
    setIsSubmitting(true);
    setSubmissionFeedback(null);

    try {
      // 1. Submit via direct reliable form endpoint to websushant07@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/websushant07@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🌐 WebSathi Inquiry: ${formData.name} (${formData.websiteType})`,
          _replyto: formData.email,
          _template: 'table',
          'Client Name': formData.name,
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone,
          'Company / Business': formData.company || 'Not Specified',
          'Website Type': formData.websiteType,
          'Estimated Budget': formData.budget,
          'Project Scope & Details': formData.projectDetails,
          'Submitted At': new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }) + ' (Nepal Time)'
        })
      });

      if (res.ok) {
        setSubmissionFeedback('Your inquiry was directly sent to websushant07@gmail.com!');
      } else {
        setSubmissionFeedback('Inquiry captured. You can also send via Gmail or WhatsApp below.');
      }
    } catch {
      // Fallback message
      setSubmissionFeedback('Inquiry captured. You can also open in Gmail or WhatsApp below.');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <GeneralMicroWebBg variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
            <span>LET'S WORK TOGETHER</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight max-w-3xl leading-tight">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-2xl mt-3">
            Fill out the form below for a fast quote, or reach out directly on WhatsApp for an immediate consultation.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F7F8FA] p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xs">
            
            {submitted ? (
              <div className="py-6 text-left space-y-6 animate-in fade-in zoom-in-95">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#111111]">
                      Inquiry Processed Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                      {submissionFeedback || 'Your message has been routed to websushant07@gmail.com.'}
                    </p>
                  </div>
                </div>

                {/* Instant Transmission Action Center */}
                <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Direct Email & Chat Transmission
                    </div>
                    <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      websushant07@gmail.com
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    To ensure instant delivery, you can also launch your preferred email client or chat directly with Sushant:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Open in Gmail Web */}
                    <button
                      type="button"
                      onClick={openGmailCompose}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EA4335] hover:bg-[#D93025] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Gmail Web</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </button>

                    {/* Open in WhatsApp */}
                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </button>

                    {/* Copy to Clipboard */}
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:bg-gray-50 text-[#111111] text-xs font-bold transition-all shadow-2xs cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-600">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-gray-500" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>

                    {/* Default Mail App */}
                    <button
                      type="button"
                      onClick={openDefaultMailClient}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] hover:bg-gray-50 text-[#111111] text-xs font-bold transition-all shadow-2xs cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-gray-500" />
                      <span>Default Mail App</span>
                    </button>
                  </div>
                </div>

                {/* Submitted Details Summary */}
                <div className="p-4 rounded-2xl bg-[#F0F4FF] border border-blue-100 text-xs text-gray-700 space-y-1.5 font-mono">
                  <div className="font-bold text-[#111111] font-sans text-xs uppercase tracking-wider mb-2">
                    Captured Inquiry Summary:
                  </div>
                  <div>• <strong className="text-gray-900">Name:</strong> {formData.name}</div>
                  <div>• <strong className="text-gray-900">Email:</strong> {formData.email}</div>
                  <div>• <strong className="text-gray-900">Phone:</strong> {formData.phone}</div>
                  <div>• <strong className="text-gray-900">Type:</strong> {formData.websiteType}</div>
                  <div>• <strong className="text-gray-900">Budget:</strong> {formData.budget}</div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmissionFeedback(null);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#2563EB] transition-colors shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  
                  <span className="text-[11px] text-gray-500 font-medium">
                    Response time: 2–4 hours
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Method selector tab */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-[#E5E7EB] w-fit text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setSendMethod('email')}
                      className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        sendMethod === 'email' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#6B7280] hover:text-[#111111]'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                        sendMethod === 'whatsapp' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#6B7280] hover:text-[#111111]'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-gray-500">
                    To: <strong className="text-[#2563EB]">websushant07@gmail.com</strong>
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shrestha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98XXXXXXXX / 9769316767"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                      Business / Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Himalayan Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Website Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Website Type *
                  </label>
                  <select
                    value={formData.websiteType}
                    onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                  >
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Estimated Budget *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {budgetOptions.map((b) => (
                      <label
                        key={b}
                        className={`p-3 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all ${
                          formData.budget === b
                            ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                            : 'bg-white text-[#111111] border-[#E5E7EB] hover:bg-[#F7F8FA]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          checked={formData.budget === b}
                          onChange={() => setFormData({ ...formData, budget: b })}
                          className="sr-only"
                        />
                        <span>{b}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                    Project Details &amp; Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, the features you need, sample websites you like, and your target launch date..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111111] focus:outline-hidden focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#111111] hover:bg-[#2563EB] disabled:bg-gray-400 text-white font-bold text-sm shadow-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  id="btn-send-inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to websushant07@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>
                        {sendMethod === 'email' ? 'Send Project Inquiry to Email' : 'Send Inquiry via WhatsApp'}
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-3xl bg-[#111111] text-white shadow-lg relative overflow-hidden">
              <div className="text-xs font-bold tracking-widest text-[#2563EB] uppercase mb-2">
                DIRECT CONTACT
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                Let's Talk Directly
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Location</div>
                    <div className="text-white font-semibold">Butwal, Lumbini Province, Nepal</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Phone / WhatsApp</div>
                    <a href="tel:+9779769316767" className="text-white font-semibold hover:text-blue-400 transition-colors block">
                      +977 9769316767
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Email Address</div>
                    <a href="mailto:websushant07@gmail.com" className="text-white font-semibold hover:text-blue-400 transition-colors block">
                      websushant07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Working Hours</div>
                    <div className="text-white font-semibold">Sunday – Saturday (9:00 AM – 8:00 PM NPT)</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media Channels */}
            <div className="p-6 rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB]">
              <div className="text-xs font-bold uppercase text-[#6B7280] tracking-wider mb-4">
                Connect on Social Media
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.facebook.com/websathi01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-xs transition-all flex items-center justify-between text-xs font-bold text-[#111111]"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>WebSathi Official Page</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>

                <a
                  href="https://www.facebook.com/sushant.gaha.magar1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-xs transition-all flex items-center justify-between text-xs font-bold text-[#111111]"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Sushant Gaha Magar (Personal)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>

                <a
                  href="https://www.instagram.com/mgr_sushant1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-xs transition-all flex items-center justify-between text-xs font-bold text-[#111111]"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram @mgr_sushant1</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
