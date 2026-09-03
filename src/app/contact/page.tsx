"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulation
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Thank you! Your inquiry has been submitted.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Lead Generation
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Contact & RFQ
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Ready to scale your production? Request a quote, schedule a factory visit, or order material samples today.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
         <div>
            <h2 className="font-headline text-2xl font-bold uppercase text-ink mb-8">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="font-technical text-xs font-bold text-ink uppercase">Name</label>
                   <input required type="text" className="border border-slate-300 p-3 font-body outline-none focus:border-ink transition-colors" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="font-technical text-xs font-bold text-ink uppercase">Company</label>
                   <input required type="text" className="border border-slate-300 p-3 font-body outline-none focus:border-ink transition-colors" />
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                   <label className="font-technical text-xs font-bold text-ink uppercase">Email</label>
                   <input required type="email" className="border border-slate-300 p-3 font-body outline-none focus:border-ink transition-colors" />
               </div>
               <div className="flex flex-col gap-2">
                   <label className="font-technical text-xs font-bold text-ink uppercase">Product Category</label>
                   <select className="border border-slate-300 p-3 font-body outline-none focus:border-ink transition-colors bg-white">
                     <option>Knitted Shoe Uppers</option>
                     <option>Knitwear Manufacturing</option>
                     <option>Home Textiles</option>
                     <option>OEM / ODM Services</option>
                     <option>Other Inquiry</option>
                   </select>
               </div>
               <div className="flex flex-col gap-2">
                   <label className="font-technical text-xs font-bold text-ink uppercase">Project Details</label>
                   <textarea required rows={4} className="border border-slate-300 p-3 font-body outline-none focus:border-ink transition-colors"></textarea>
               </div>
               <button disabled={loading} type="submit" className="bg-ink text-white font-technical uppercase text-sm px-8 py-4 font-bold hover:bg-ink-dark transition-tech w-full disabled:opacity-50">
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
               </button>
            </form>
         </div>
         
         <div className="bg-ink text-white p-8 sm:p-12 h-fit">
            <h3 className="font-headline text-2xl font-bold uppercase mb-8">Contact Information</h3>
            <div className="space-y-6 font-body">
               <div className="flex gap-4">
                 <span className="material-symbols-outlined text-surface-tint">location_on</span>
                 <div>
                   <p className="font-technical text-xs uppercase text-white/50 mb-1">Factory Address</p>
                   <p>A-4/E, Sector-80, Phase-2<br/>Noida, UP, India - 201305</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <span className="material-symbols-outlined text-surface-tint">mail</span>
                 <div>
                   <p className="font-technical text-xs uppercase text-white/50 mb-1">Email</p>
                   <p>info@khsimpex.com</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <span className="material-symbols-outlined text-surface-tint">phone</span>
                 <div>
                   <p className="font-technical text-xs uppercase text-white/50 mb-1">Phone</p>
                   <p>+91 (0) 120-4100000</p>
                 </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
