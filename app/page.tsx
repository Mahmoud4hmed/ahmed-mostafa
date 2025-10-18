'use client';

import Image from "next/image";
import { Mail, Phone, MessageCircle, Linkedin, Facebook, Instagram, FileText, ShoppingBag, Stethoscope, Beef, Smartphone, Pill, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/images/1.webp", alt: "Moment 1" },
    { src: "/images/coolef_event.webp", alt: "Coolef Event" },
    { src: "/images/fb_img_1728407861209.webp", alt: "Professional Moment" },
    { src: "/images/img_20220317_161253.webp", alt: "Event Moment" },
    { src: "/images/img_20230411_100655.webp", alt: "Professional Setting" },
    { src: "/images/noon_event.webp", alt: "Noon Event" },
    { src: "/images/samiramies_event.webp", alt: "Samiramies Event" },
    { src: "/images/samiramies_event2.webp", alt: "Samiramies Event 2" },
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
                      src="/images/pfp.jpg"
                      alt="Profile Picture"
                      fill
                      className="object-cover"
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
                    E-commerce Marketing Manager at <span className="font-bold text-blue-600 dark:text-blue-400">BEYMEN GROUP</span>
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
                        <MessageCircle size={20} className="group-hover:scale-110 transition-transform" strokeWidth={2.5} />
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
                        <MessageCircle size={20} className="group-hover:scale-110 transition-transform" strokeWidth={2.5} />
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
                  A successful marketing leader with proven accomplishments in driving growth and increasing profits. Articulate and driven leader with high energy and engaging personality. Hardworking team builder motivational in maximizing personnel performance and surpassing business objectives.
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
              E-commerce Websites I&rsquo;ve Created
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <ShoppingBag size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Pharma Image</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Skincare & Beauty Products</p>
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
                    <Stethoscope size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Cairo Medical</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Medical Products & Equipment</p>
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
                    <Beef size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Meat & More</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Premium Meat Delivery</p>
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
                    <Smartphone size={36} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">oraimo</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Smart Devices & Electronics</p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>Visit Website</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>

              {/* Rashed Pharmacy */}
              <a
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
              </a>
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
