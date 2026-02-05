"use client";
export default function Testimonials() {
  const testimonials = [
    {
      text: "EkamBond helped us expand across communities while keeping verification airtight. Families trust the process, and matchmakers work faster.",
      author: "Prathima",
      location: "India",
      badge: "Verified Matchmaker",
      initial: "P",
    },
    {
      text: "Cross-community search brought diaspora families together without losing our traditions.",
      author: "NAPA Global",
      location: "Global Diaspora Community",
      badge: "Community Partner",
      initial: "N",
    },
  ];

  return (
    <section className="py-5 bg-primary">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10 animate-fadeInDown">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Real Experiences. Real Impact.
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-light">
            Trusted by families and communities worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F4F2EE] rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-600"></div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-6 text-7xl text-amber-600 opacity-10 font-serif leading-none">
                "
              </div>

              {/* Testimonial Text */}
    <p className="text-base md:text-md font-neue-haas-regular text-secondary/60 ">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {testimonial.initial}
                </div>
                <div className="flex-1">
                  <div className="text-base font-bold text-gray-800">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-3">
                <span className="inline-block bg-gradient-to-r from-amber-600 to-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  {testimonial.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
