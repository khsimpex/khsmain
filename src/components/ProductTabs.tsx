"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "home", label: "Knitted Home Furnishing" },
  { id: "apparel", label: "Knitted Apparel" },
  { id: "shoes", label: "Knitted Shoe Uppers" },
  { id: "materials", label: "Raw Materials & Yarns" },
];

type TabItem = {
  title: string;
  desc: string;
  image?: string;
  alt?: string;
};

const tabData: Record<string, TabItem[]> = {
  home: [
    { title: "Decorative Cushion Covers", desc: "Custom designs with intricate knitted patterns", image: "./cushion-covers.jpg", alt: "Custom patterned decorative knitted cushion covers for wholesale home decor" },
    { title: "Knitted Throws", desc: "Soft, cozy blankets for comfort", image: '/Knitted Throws.png', alt: "Premium soft knitted throw blankets stacked in neutral colors" },
    { title: "Premium Fabrics", desc: "High-quality knitted textiles", image: "./Custom Designs.png", alt: "Close-up detail of high-quality complex knitted fabric textures" },
    { title: "Ribbed Knit Blankets", desc: "Durable construction with excellent finish", image: './Ribbed Blanket.png', alt: "Durable ribbed knit blankets showing thick gauge stitching" },
  ],
  apparel: [
    { title: "Knitted Pullovers", desc: "Premium quality sweaters with intricate patterns", image: "/kitted pullovers.png", alt: "Premium quality knitted pullovers with intricate jacquard patterns" },
    { title: "Knitted Polo Shirts", desc: "Classic designs with modern knitting", image: "/Polo Shrits.png", alt: "Classic men's knitted polo shirts featuring breathable mesh structures" },
    { title: "Knitted Polo", desc: "Stylish and comfortable everyday wear", image: "/Cadigans.png", alt: "Stylish knitted cardigans for everyday comfort and layering" },
  ],
  shoes: [
    { title: "Seamless Construction", desc: "Advanced flyknit technology for footwear", image: "/Seamless.png", alt: "Close-up of seamless 3D knitted shoe upper highlighting breathable mesh zones" },
    { title: "Color Variations", desc: "Available in multiple colors and patterns", image: "/Color varient.png", alt: "Multiple color variations of 3D knitted shoe uppers for performance footwear" },
    { title: "Precision Engineering", desc: "Different knit zones for performance", image: "/Precision.png", alt: "Precision engineered shoe upper with targeted stretch and rigid support zones" },
  ],
  materials: [
    { title: "Acrylic Yarn", desc: "Lightweight, soft, and warm synthetic yarn" },
    { title: "Chenille Yarn", desc: "Luxuriously soft yarn with a fuzzy, velvety texture" },
    { title: "Cotton Yarn", desc: "Breathable and durable natural fiber for everyday comfort" },
    { title: "Mohair Blend", desc: "Premium blend offering exceptional warmth and luster" },
    { title: "Nylon & Viscose Blends", desc: "Engineered for stretch, shape retention, and softness" },
    { title: "Polyester (High Bulk)", desc: "Voluminous, lightweight yarn with excellent durability" },
    { title: "Recycled Yarns", desc: "Eco-friendly options including GRS-certified materials" },
    { title: "Wool", desc: "Classic natural fiber providing superior insulation and quality" }
  ]
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-ink bg-white" id="product-range">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Banner Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-12 bg-ink overflow-hidden border-2 border-ink">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida/AEtjO1UtSNUpEbtqj-yuK5LNz84QcdSEnUFrJ445sJXp0Vb8co1HGpsPvGxm7LgBn5gAEuLNZX_JYuuIfJNsDudN3OWnQca4NQCpJxULc648RngXTMlp84S7JbQhF7QNRxb7nrBCcRSQgi7LgzoMbpmuq2zp-b6aV2qRjtSAG9uJdFKEytdGEHiCMpYzyoUtU00enKtLh0llErIGrWogVc8YyBV7xsqVq76TJmoVeqLdJtVvZFf3fyzAYkLTbw')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
          <div className="absolute inset-0 p-8 sm:p-12 md:p-16 flex flex-col justify-center max-w-3xl z-10">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase font-bold tracking-tight mb-4">
              Our Product Range
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-white/90 leading-relaxed border-l-4 border-white pl-4">
              From decorative cushions and cozy blankets to precision-knitted textiles - showcasing the quality and variety of our knitted home furnishing collection.
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-2 border-b-2 border-ink pb-4 mb-10 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-headline uppercase font-bold text-sm sm:text-base transition-all border-2 border-ink ${activeTab === tab.id
                ? "bg-ink text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-0.5 translate-x-0.5"
                : "bg-white text-ink hover:bg-surface-container-low hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:translate-x-px"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-100">
          <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-ink mb-8 text-center md:text-left">
            {tabs.find(t => t.id === activeTab)?.label}
          </h3>

          {activeTab === 'materials' ? (
            <div className="max-w-5xl mx-auto bg-slate-50 border-2 border-ink p-8 sm:p-12">
              {/* Scrollable Container for Infinite Items */}
              <div className="max-h-[400px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {tabData.materials.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-surface-tint shrink-0">verified</span>
                      <h4 className="font-headline text-sm sm:text-base uppercase font-bold text-ink">{item.title}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {tabData[activeTab as keyof typeof tabData].map((item, index) => (
                <div key={index} className="card-lift bg-white border-2 border-ink shadow-sm flex flex-col h-full overflow-hidden group max-w-sm mx-auto w-full">
                  <div className="h-64 sm:h-72 w-full bg-slate-100 border-b-2 border-ink overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-surface-tint group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-slate-300">
                      {item.image ? (
                        <Image src={item.image} alt={item.alt || item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                      ) : (
                        <span className="material-symbols-outlined text-5xl opacity-50">photo_library</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col grow text-center bg-white">
                    <h4 className="font-headline text-lg uppercase font-bold text-ink mb-2">{item.title}</h4>
                    <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
