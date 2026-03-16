"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "EkamBond’s verification gave me full confidence. Found my soulmate in just 3 months!",
    name: "Meera Patel",
    role: "Data Scientist",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
  },
  {
    text: "EkamBond’s white-label solution grew my matchmaking business by 300%. Truly game-changing!",
    name: "Ramesh Iyer",
    role: "Senior Matchmaker",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    text: "Loved how the AI considered lifestyle, values, and compatibility. Even included horoscope matching!",
    name: "Kavya Reddy",
    role: "Marketing Director",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    text: "EkamBond helped us connect diaspora families worldwide while staying true to traditions.",
    name: "Arjun Malhotra",
    role: "Community Director",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&h=100&fit=crop",
  },
  {
    text: "Their background checks gave me complete peace of mind for my daughter’s matches.",
    name: "Shalini Desai",
    role: "Business Owner",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
  {
    text: "Attended an event, met verified matches, and the follow-up process was seamless!",
    name: "Vikram Singh",
    role: "Entrepreneur",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const TestimonialsSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const initialValues = { email: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log("Form Data Submitted:", values);
    toast.success('Email Request Successfully')
    resetForm();
  };

  const handleSlideChange = (swiper: any) => setActiveIndex(swiper.realIndex);
  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95" />
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl">
        {/* Users Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                className="w-8 h-8 rounded-full border-2 border-slate-900"
                alt="User"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                className="w-8 h-8 rounded-full border-2 border-slate-900"
                alt="User"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop"
                className="w-8 h-8 rounded-full border-2 border-slate-900"
                alt="User"
              />
            </div>
            <span className="text-sm text-gray-300 font-medium ml-2">7k are already with us</span>
          </div>
        </motion.div>

        {/* Title + Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight tracking-tight">
            Discover The Future
            <br />
            <span className="font-light">Of Matrimony SaaS Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Designed to bring clarity, balance, and quiet focus to your everyday life.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
                <div className="relative w-full sm:w-auto flex-1">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-xs text-red-400 mt-1 text-left ml-3"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white font-normal px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Try for free"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What They Say About Us</h2>
          <div className="flex gap-2">
            <motion.button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={1200}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="w-full pb-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/8 transition-all duration-500 min-h-[320px] group hover:shadow-2xl hover:shadow-blue-500/10">
                  <p className="text-md text-gray-300 mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={t.image}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="text-white text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm font-semibold">{t.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, star) => (
                          <motion.svg
                            key={star}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: star * 0.1 }}
                            className={`w-3.5 h-3.5 ${star < Math.floor(t.rating) ? "text-yellow-400" : "text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
                animate={{ width: activeIndex === i ? 32 : 12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {activeIndex === i && (
                <motion.div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-white/20"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
