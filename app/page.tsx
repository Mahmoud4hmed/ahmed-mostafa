'use client';

import Image from "next/image";
import { Mail, Phone, MessageCircle, Linkedin, Facebook, Instagram, FileText, ShoppingBag, Stethoscope, Beef, Smartphone, Pill, Shirt, SprayCan, CigaretteOff, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/images/1.webp", alt: "Moment 1" },
    { src: "/images/fb_img_1728407861209.webp", alt: "Professional Moment" },
    { src: "/images/noon_event.webp", alt: "Noon Event" },
    { src: "/images/Image.jpg", alt: "Special Moment" },
    { src: "/images/samiramies_event.webp", alt: "Samiramies Event" },
    { src: "/images/samiramies_event2.webp", alt: "Samiramies Event 2" },
    { src: "/images/img_20220317_161253.webp", alt: "Event Moment" },
    { src: "/images/img_20230411_100655.webp", alt: "Professional Setting" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      {/* Hero Section with Gradient Card */}
      <section className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-3xl shadow-2xl">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                {/* Profile Picture with Gradient Glow */}
                <div className="mb-8 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                    <Image
                      src="/images/pfp2.png"
                      alt="Profile Picture"
                      fill
                      className="object-cover object-[50%_10%]"
                      priority
                    />
                  </div>
                </div>

                {/* Name with Gradient Text */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ahmed Mostafa
                </h1>
                <div className="inline-block mb-8">
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                    E-commerce Manager at <span className="font-bold text-blue-600 dark:text-blue-400">BEYMEN GROUP</span>
                  </p>
                </div>

                {/* Contact Buttons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                  <a
                    href="mailto:ahmed.elhussieny95@gmail.com"
                    className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <Mail size={20} className="group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-sm">Email</span>
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </a>
                  <a
                    href="tel:+201068418714"
                    className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <Phone size={20} className="group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-sm">Phone</span>
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </a>
                  <a
                    href="https://wa.me/201068418714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <svg className="group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-sm">WhatsApp</span>
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </a>
                  <a
                    href="wechat://Elhussieny95"
                    className="group relative overflow-hidden bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <svg className="group-hover:scale-110 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-sm">WeChat</span>
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section with Unique Card */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
                  Ecommerce Manager with a proven record in driving online sales, enhancing customer experience, and optimizing digital performance. Skilled in Shopify management, digital marketing, and data-driven growth strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
              Websites I&rsquo;ve Created
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Beymen */}
              <a
                href="https://beymen.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Shirt size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Beymen Egypt</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Luxury Fashion</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Fix and Klint */}
              <a
                href="https://fixandklint.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <CigaretteOff size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Fix and Klint</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">White Nicotine Pouches</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Pharma Image */}
              <a
                href="https://pharmaimage.com.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Image src="/images/skincare.png" alt="Skincare" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Pharma Image</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Skincare & Cosmetics</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Cairo Medical */}
              <a
                href="https://cairomedical.com.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Stethoscope size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Cairo Medical</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Medical Devices</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Meats */}
              <a
                href="https://meats.com.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Beef size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Meat & More</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Your Meat Destination</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* oraimo */}
              <a
                href="https://eg.oraimo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Smartphone size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Oraimo</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Smart Accessories</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Rashed Pharmacy */}
              {/* <a
                href="https://rashedpharmacy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Pill size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Rashed Pharmacy</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Pharmacy & Beauty Store</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links with Modern Cards */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect With Me
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="https://www.linkedin.com/in/ahmed-mostafa-elhussieny/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Linkedin size={32} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">LinkedIn</span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/Ahmed.M.ElHussieny"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Facebook size={32} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">Facebook</span>
                </div>
              </a>
              <a
                href="https://instagram.com/ahmed.mostafa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Instagram size={32} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">Instagram</span>
                </div>
              </a>
              <a
                href="https://ahmed-elhussieny.github.io/Ahmed-Mostafa-CV/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <FileText size={32} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery with Modern Layout */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Some Moments
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-white/50 dark:group-hover:ring-white/30 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected moment"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 rounded-full p-3 transition-all duration-300 shadow-xl hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Modern Footer */}
      <footer className="relative py-12 mt-16 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              &copy; 2025 Ahmed Mostafa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
