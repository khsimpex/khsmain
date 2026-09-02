"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RFQModal from "../components/RFQModal";
import ProductTabs from "../components/ProductTabs";

export default function Home() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenRfq = () => setRfqModalOpen(true);
    window.addEventListener('open-rfq', handleOpenRfq);
    return () => window.removeEventListener('open-rfq', handleOpenRfq);
  }, []);

  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grow">

        {/* HERO SECTION */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-28 border-b border-ink grid-bg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Hero Content */}
            <div className="lg:col-span-8 flex flex-col justify-center gap-6">
              <div data-reveal className="inline-flex items-center gap-2 font-technical text-[11px] sm:text-xs text-ink uppercase tracking-widest font-semibold bg-ink-light px-3 py-1 border border-ink-subtle w-max">
                <span className="w-2 h-2 bg-ink inline-block"></span>
                <span>GLOBAL EXPORT SOLUTIONS // EST. 1999</span>
              </div>
              <h1 data-reveal data-reveal-delay="1" className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ink uppercase leading-[0.95] tracking-tight">
                Manufacturing<br />
                <span className="text-surface-tint">Excellence</span><br />
                From India
              </h1>
              <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl border-l-2 sm:border-l-4 border-ink pl-4 leading-relaxed">
                We specialize in B2B textile manufacturing and export of high-quality wholesale knitted home textiles, knitted apparel, and 3D knit footwear for global markets, delivering consistency, customization, and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="#contact" className="bg-ink text-white font-headline text-sm sm:text-base px-8 py-4 uppercase hover:bg-ink-dark transition-tech flex items-center justify-center gap-3 shadow-sm">
                  <span>Get In Touch</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link href="#products" className="bg-white border-2 border-ink text-ink font-headline text-sm sm:text-base px-8 py-4 uppercase hover:bg-ink-light transition-tech flex items-center justify-center gap-2">
                  <span>Explore Products</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Stats Column */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t-2 lg:border-t-0 lg:border-l-2 border-ink pt-8 lg:pt-0 lg:pl-8 xl:pl-12 gap-6 bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                <div data-reveal className="border-b lg:border-b border-ink-subtle pb-4">
                  <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">25+</span>
                  <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Years of Experience</span>
                  <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Industrial manufacturing expertise based in Noida</p>
                </div>
                <div data-reveal data-reveal-delay="1" className="border-b lg:border-b border-ink-subtle pb-4">
                  <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">100%</span>
                  <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Export Oriented</span>
                  <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Dedicated exclusively to international buyers</p>
                </div>
                <div data-reveal data-reveal-delay="2" className="pb-2">
                  <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">03</span>
                  <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Product Categories</span>
                  <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Home textiles, apparel &amp; shoe uppers</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// COMPANY PROFILE</span>
                <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase text-ink font-bold tracking-tight">
                  Who We Are
                </h2>
                <p data-reveal data-reveal-delay="2" className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">
                  Export-oriented manufacturing excellence based in Noida, India, serving global buyers with commitment to quality and consistency.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
              <p className="font-body text-base sm:text-lg text-slate-800 leading-relaxed">
                <strong>KHS Impex Pvt. Ltd.</strong> is an export-oriented B2B company specializing as a wholesale knitted home furnishing manufacturer, OEM knitted garment exporter, and 3D knit footwear factory. With over 25 years of industry
                experience, we are based in Noida, India, and serve international buyers with a strong commitment to quality
                compliance, consistent production, and long-term partnerships.
              </p>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                With extensive experience handling buyer-specific requirements, we focus on manufacturing products that meet
                global quality standards, offering flexibility in design, materials, and packaging to suit diverse export markets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-ink bg-surface-container-low p-2">
                <div data-reveal className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">verified</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Quality Compliance</h3>
                  <p className="font-body text-sm text-on-surface-variant">AQL standards and buyer-specific quality requirements followed at every production step.</p>
                </div>
                <div data-reveal data-reveal-delay="1" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">public</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Global Standards</h3>
                  <p className="font-body text-sm text-on-surface-variant">Manufacturing high-specification products tailored for North American, European and global export markets.</p>
                </div>
                <div data-reveal data-reveal-delay="2" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">eco</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Sustainable Materials</h3>
                  <p className="font-body text-sm text-on-surface-variant">Extensive options including GRS-certified recycled yarns, bio-based materials, and organic cotton to meet your sustainability goals.</p>
                </div>
                <div data-reveal data-reveal-delay="3" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">handshake</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Long-term Partnership</h3>
                  <p className="font-body text-sm text-on-surface-variant">Committed to building reliable, scalable business relationships with overseas importers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES SECTION */}
        <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="products">
          <div className="border-b border-ink pb-8 mb-8 sm:mb-12">
            <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// WHAT WE MAKE</span>
            <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink font-bold">
              Product Categories
            </h2>
            <p data-reveal data-reveal-delay="2" className="font-body text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
              Comprehensive knitted product solutions manufactured to rigorous global specifications.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-ink">
            <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-ink flex flex-col">
              <div className="group relative overflow-hidden bg-slate-100">
                <img alt="Knitted Home Furnishing"
                  className="img-zoom w-full h-64 sm:h-80 md:h-96 lg:h-115 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UtSNUpEbtqj-yuK5LNz84QcdSEnUFrJ445sJXp0Vb8co1HGpsPvGxm7LgBn5gAEuLNZX_JYuuIfJNsDudN3OWnQca4NQCpJxULc648RngXTMlp84S7JbQhF7QNRxb7nrBCcRSQgi7LgzoMbpmuq2zp-b6aV2qRjtSAG9uJdFKEytdGEHiCMpYzyoUtU00enKtLh0llErIGrWogVc8YyBV7xsqVq76TJmoVeqLdJtVvZFf3fyzAYkLTbw" />
                <div className="p-5 sm:p-6 lg:p-8 bg-white border-t lg:border-t-0 lg:border-r border-ink lg:absolute lg:bottom-0 lg:left-0 lg:max-w-lg shadow-lg">
                  <span className="font-technical text-xs text-ink font-bold uppercase mb-1 block">[ CATEGORY 01 ]</span>
                  <h3 className="font-headline text-xl sm:text-2xl lg:text-3xl xl:text-4xl uppercase leading-tight mb-2 sm:mb-3 text-ink font-bold">
                    Wholesale Knitted Home Textiles
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-3 sm:mb-4">
                    High-quality bulk knitted throws, custom pillow & cushion covers, baby bedding products, and knitted kitchen towels with a premium soft hand feel.
                  </p>
                  <div className="font-technical text-[10px] sm:text-[11px] uppercase tracking-wider border-t border-ink pt-3 text-slate-700 font-semibold">
                    Materials: Cotton Blends, Polyester/Lycra, Organic Cotton
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center p-6 sm:p-8 md:p-12 bg-surface-container-low border-b lg:border-b-0 border-ink">
              <span className="material-symbols-outlined text-4xl text-ink mb-4">format_quote</span>
              <p className="font-body text-base sm:text-lg italic text-ink font-medium leading-relaxed">
                &quot;We offer a wide range of patterns and yarn blends to suit global design trends, ensuring every piece meets international luxury standards.&quot;
              </p>
              <div className="mt-6 pt-4 border-t border-ink-subtle font-technical text-xs text-on-surface-variant uppercase">
                // High Color Fastness &amp; Custom GSM
              </div>
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 border-t border-ink">
              <div className="border-b lg:border-b-0 lg:border-r border-ink flex flex-col justify-between">
                <div className="p-6 sm:p-8 md:p-10 border-b border-ink bg-white">
                  <span className="font-technical text-xs text-ink font-bold uppercase mb-2 block">[ CATEGORY 02 ]</span>
                  <h3 className="font-headline text-2xl sm:text-3xl uppercase mb-3 text-ink font-bold">Knitted Apparel Manufacturing</h3>
                  <p className="font-body text-sm text-on-surface-variant max-w-md">
                    Precision-manufactured garments including round/V-neck t-shirts, polo shirts, pullovers, cardigans, mufflers, and scarves with complex jacquards and fine gauge stitching.
                  </p>
                </div>
                <div className="h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100 group">
                  <img alt="Knitted Apparel"
                    className="img-zoom w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1Xj14l_lxAveSiX9sKAC_VtE1ToSZotVlgXPVkGrNUCh7XWrOzkZrV-6POpHD5nWSnLmnjiPpRSt70f5pqniIDWg6SK_QQMvyx-Kp_lqeC-dcU22n9E0MUUQ8TzV3w6b2W3t7UAj_pI2NdvWtppcKy5qQrac8x1bbSrtT6CwXRhWRrM-M1yW0nkccwCDkS1lUUArAtFkVY4PkujUpA0C17lzqsC4yV5VCMS9uY4dXXr5B1aLsFR-V1L-yk" />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100 group border-b border-ink">
                  <img alt="Knitted Shoe Uppers"
                    className="img-zoom w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WCkHpnlO_9-R9ohxXBrxZld_R_ZbXmEj4MO4UJ4ov_TTIjKEtj6_-W9cDomtwNtJgec5hMrYV326t04FiT4hPv5gnV95B_eIDk-msMNvN26an078LUvcn7Aezki9iKSNcuK7gaJO7cyKGoz-kqf4XzSWVYNCLdXT6m2B6k1kJ0BM3xV1TFEPtnaUGCGM0rh_2_V8_8owseW9I9i_kPtbvp_Hxid_tv8IOY61q9PEt-TthUlMm7WItzBQ" />
                </div>
                <div className="p-6 sm:p-8 md:p-10 bg-ink text-white">
                  <span className="font-technical text-xs text-blue-200 font-bold uppercase mb-2 block">[ CATEGORY 03 ]</span>
                  <h3 className="font-headline text-2xl sm:text-3xl uppercase mb-3 font-bold text-white">3D Knit Footwear Factory</h3>
                  <p className="font-body text-sm text-blue-100 max-w-md mb-6 leading-relaxed">
                    OEM seamless uppers for performance sneakers, casual lifestyle footwear, and work/safety shoes delivering exceptional breathability and zoned tensioning through computerized flat-knitting.
                  </p>
                  <div className="font-technical text-[11px] uppercase tracking-wider border-t border-blue-400/50 pt-3 text-blue-200 font-semibold">
                    Tech: 3D Flat Knit | Yarns: GRS-Certified Recycled & Bio-Based Options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TABBED PRODUCT RANGE SECTION */}
        <ProductTabs />

        {/* MANUFACTURING CAPABILITIES SECTION */}
        <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="capabilities">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// TECHNICAL WORKFLOW</span>
                <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase text-ink font-bold tracking-tight">
                  Manufacturing Capabilities
                </h2>
                <p data-reveal data-reveal-delay="2" className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">
                  Complete in-house and integrated processing facilities engineered for high-volume export fulfillment.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-ink bg-surface-container-low p-2">
                <div data-reveal className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_01</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">In-house Knitting</h3>
                  <p className="font-body text-sm text-on-surface-variant">Equipped with computerized flat knitting and circular machines capable of multi-gauge jacquards and intricate patterns.</p>
                </div>
                <div data-reveal data-reveal-delay="1" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_02</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Dyeing &amp; Processing</h3>
                  <p className="font-body text-sm text-on-surface-variant">Partnered certified dye-houses ensuring color consistency, lab dip accuracy, and eco-friendly standards.</p>
                </div>
                <div data-reveal data-reveal-delay="2" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_03</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Cutting &amp; Stitching</h3>
                  <p className="font-body text-sm text-on-surface-variant">Precision cutting tables and skilled stitching units tailored for both structured home textiles and flexible apparel assembly.</p>
                </div>
                <div data-reveal data-reveal-delay="3" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_04</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Printing Solutions</h3>
                  <p className="font-body text-sm text-on-surface-variant">Screen, puff, and pigment printing through trusted partners for customized designs.</p>
                </div>
                <div data-reveal data-reveal-delay="4" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_05</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Embroidery</h3>
                  <p className="font-body text-sm text-on-surface-variant">Professional embroidery services via partners for enhanced product aesthetics and branding.</p>
                </div>
                <div data-reveal data-reveal-delay="5" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_06</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Quality Assurance</h3>
                  <p className="font-body text-sm text-on-surface-variant">Rigorous inline and final inspections maintaining strict AQL 2.5 / 4.0 standards prior to packing.</p>
                </div>
                <div data-reveal data-reveal-delay="6" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_07</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Finishing &amp; Packing</h3>
                  <p className="font-body text-sm text-on-surface-variant">Automated steam pressing, customized barcode labeling, metal detection, and export-grade master carton packing ensuring container-safe transit.</p>
                </div>
                <div data-reveal data-reveal-delay="7" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
                  <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_08</span>
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">OEM Services</h3>
                  <p className="font-body text-sm text-on-surface-variant">Design &amp; development, private label manufacturing, and bulk order capability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INNOVATION SECTION */}
        <section className="py-16 sm:py-20 md:py-28 bg-[#fcfbf9] border-b border-ink" id="innovation">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 sm:mb-24">
              <span data-reveal className="font-technical text-xs text-surface-tint uppercase tracking-widest font-bold mb-4 block">INNOVATION</span>
              <h2 data-reveal data-reveal-delay="1" className="font-headline text-4xl sm:text-5xl md:text-6xl text-ink font-bold tracking-tight mb-4">
                Advanced Technology
              </h2>
              <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
                Cutting-edge Flyknit technology for superior footwear solutions
              </p>
            </div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {/* Block 1 */}
              <div data-reveal className="bg-white flex flex-col md:flex-row border-l-4 border-surface-tint shadow-sm">
                <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Seamless Construction</h3>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                    Our advanced Flyknit technology eliminates the need for excessive stitching, creating seamless uppers that enhance flexibility, comfort, and overall shoe performance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Enhanced flexibility</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Superior comfort</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Reduced production waste</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Better breathability</div>
                  </div>
                </div>
                <div className="md:w-2/5 p-8 flex items-center justify-center bg-white border-t md:border-t-0 md:border-l border-ink-subtle/30">
                  <div className="w-full aspect-square bg-[#333333] flex items-center justify-center max-w-70">
                    <span className="font-headline text-2xl sm:text-3xl font-bold text-white/20 uppercase tracking-widest">SEAMLESS</span>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div data-reveal className="bg-white flex flex-col-reverse md:flex-row border-l-4 border-surface-tint shadow-sm">
                <div className="md:w-2/5 p-8 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-ink-subtle/30">
                  <div className="w-full aspect-square bg-[#333333] flex items-center justify-center max-w-70">
                    <span className="font-headline text-2xl sm:text-3xl font-bold text-white/20 uppercase tracking-widest">PRECISION</span>
                  </div>
                </div>
                <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Precision Engineering</h3>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                    Different knit zones engineered for specific purposes - breathability where needed, flexibility in movement areas, and reinforcement in high-stress zones.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Zone-specific performance</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Optimized breathability</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Targeted reinforcement</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Custom flexibility</div>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div data-reveal className="bg-white flex flex-col md:flex-row border-l-4 border-surface-tint shadow-sm">
                <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Sustainable Manufacturing</h3>
                  <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                    Committed to environmental responsibility through zero-waste knitting processes and eco-friendly material options including GRS-certified recycled yarns, bio-based fibers, and organic cotton.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">GRS-Certified Recycled Yarns</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Organic Cotton Available</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Zero-waste 3D knitting</div>
                    <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Bio-based performance fibers</div>
                  </div>
                </div>
                <div className="md:w-2/5 p-8 flex items-center justify-center bg-white border-t md:border-t-0 md:border-l border-ink-subtle/30">
                  <div className="w-full aspect-square bg-[#333333] flex items-center justify-center max-w-70">
                    <span className="font-headline text-2xl sm:text-3xl font-bold text-white/20 uppercase tracking-widest">ECO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR COMMITMENT SECTION */}
        <section className="py-16 sm:py-20 md:py-28 border-b border-ink bg-white" id="commitment">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 sm:mb-20">
              <span data-reveal className="font-technical text-[10px] sm:text-xs text-surface-tint uppercase tracking-widest font-bold mb-4 block">
                WHY PARTNER WITH US
              </span>
              <h2 data-reveal data-reveal-delay="1" className="font-headline text-4xl sm:text-5xl md:text-6xl text-ink font-bold tracking-tight mb-4">
                Our Commitment
              </h2>
              <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
                Building long-term partnerships through quality, reliability, and flexibility
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 01 */}
              <div data-reveal className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">01</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Consistent Quality</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Rigorous quality control at every stage ensures products meet international standards and buyer specifications consistently.
                </p>
              </div>

              {/* Card 02 */}
              <div data-reveal data-reveal-delay="1" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">02</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Competitive Pricing</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Efficient manufacturing processes and strategic partnerships enable us to offer competitive pricing without compromising quality.
                </p>
              </div>

              {/* Card 03 */}
              <div data-reveal data-reveal-delay="2" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">03</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Timely Delivery</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Strong production planning and logistics management ensure on-time delivery for all orders, small or large.
                </p>
              </div>

              {/* Card 04 */}
              <div data-reveal data-reveal-delay="3" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">04</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Flexible MOQs</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Understanding diverse buyer needs, we offer flexible minimum order quantities to support businesses of all sizes.
                </p>
              </div>

              {/* Card 05 */}
              <div data-reveal data-reveal-delay="4" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">05</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Customization</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Complete flexibility in design, colors, GSM, sizes, and packaging to match your specific requirements and brand identity.
                </p>
              </div>

              {/* Card 06 */}
              <div data-reveal data-reveal-delay="5" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">06</span>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Long-term Partnership</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  We believe in building lasting relationships, supporting your growth with reliability, transparency, and dedicated service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GET IN TOUCH / CONTACT SECTION */}
        <section className="py-12 sm:py-16 md:py-24" id="contact">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 px-4">
            <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold">// DIRECT EXPORT DESK</span>
            <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-ink font-bold tracking-tight">
              Start a Project
            </h2>
            <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Looking for a reliable manufacturing partner for your knitted products? Contact us today to discuss your
              technical requirements, request physical swatch samples, or schedule a factory visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center mt-2">
              <a href="mailto:info@khsimpex.com" className="btn-shine bg-ink text-white font-headline text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3.5 sm:py-4 lg:py-5 uppercase hover:bg-ink-dark transition-tech flex items-center justify-center gap-2 sm:gap-3 shadow-md">
                <span>Contact Sales Team</span>
                <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
              </a>
              <button
                onClick={() => setRfqModalOpen(true)}
                className="bg-white border-2 border-ink text-ink font-headline text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 uppercase hover:bg-ink-light transition-tech flex items-center justify-center gap-2"
              >
                <span>Send Quick RFQ</span>
                <span className="material-symbols-outlined text-lg sm:text-xl">edit_document</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4 font-technical text-xs sm:text-sm text-surface-tint uppercase font-semibold">
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">location_on</span> Noida, India</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">mail</span> info@khsimpex.com</span>
              <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">public</span> B2B Export Only</span>
            </div>
          </div>
        </section>

      </main>

      <RFQModal isOpen={rfqModalOpen} onClose={() => setRfqModalOpen(false)} />
    </>
  );
}
