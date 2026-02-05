"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Users, Building, Plus, Check, Zap, Sparkles, TrendingUp, Shield } from "lucide-react";

export default function CustomPlan() {
  const [employees, setEmployees] = useState(300);
  const [offices, setOffices] = useState(10);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["api"]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const options = [
    { id: "crm", name: "CRM Integration", icon: Users, price: 15, color: "#D9A91E" },
    { id: "api", name: "API Access", icon: Settings, price: 20, color: "#C84B31" },
    { id: "support", name: "Extended Support", icon: Shield, price: 25, color: "#D9A91E" },
    { id: "custom", name: "System Customization", icon: Zap, price: 30, color: "#C84B31" },
    { id: "sla", name: "SLA Metric", icon: TrendingUp, price: 20, color: "#D9A91E" },
    { id: "extra", name: "Extra Services", icon: Plus, price: 15, color: "#C84B31" },
  ];

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const basePrice = 30;
  const optionsPrice = selectedOptions.reduce((total, optionId) => {
    const option = options.find((opt) => opt.id === optionId);
    return total + (option?.price || 0);
  }, 0);
  const scalePrice = Math.floor((employees / 100) * 5 + offices * 2);
  const totalPrice = basePrice + optionsPrice + scalePrice;

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D9A91E 0%, transparent 70%)',
            left: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: mousePos.x * 0.02,
            y: mousePos.y * 0.02,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #C84B31 0%, transparent 70%)',
            right: '-10%',
            bottom: '10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: -mousePos.x * 0.02,
            y: -mousePos.y * 0.02,
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#D9A91E' : '#C84B31',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 relative"
          style={{ 
            background: 'linear-gradient(135deg, #D9A91E 0%, #C84B31 100%)',
            boxShadow: '0 10px 40px rgba(217, 169, 30, 0.4)'
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ background: 'linear-gradient(135deg, #D9A91E, #C84B31)' }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-white relative z-10" />
          </motion.div>
          <span className="text-white font-bold text-sm tracking-wide relative z-10">CUSTOM SOLUTION</span>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#1A1A1A' }}>
          Build Your
          <span className="block mt-2 bg-gradient-to-r from-[#D9A91E] via-[#C84B31] to-[#D9A91E] bg-clip-text text-transparent">
            Perfect Plan
          </span>
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#5A5A5A' }}>
          Tailor-made solution designed exactly for your unique needs
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="relative"
      >
        {/* Extreme Glow Effect */}
        <motion.div 
          className="absolute inset-0 rounded-[2rem] blur-3xl opacity-30"
          style={{
            background: 'linear-gradient(135deg, #D9A91E, #C84B31)',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Card Container */}
        <div 
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #242424 100%)',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Animated Border Gradient */}
          <motion.div
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
            style={{
              padding: '2px',
              background: 'linear-gradient(135deg, #D9A91E, #C84B31, #D9A91E)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            animate={{
              background: [
                'linear-gradient(135deg, #D9A91E, #C84B31, #D9A91E)',
                'linear-gradient(225deg, #C84B31, #D9A91E, #C84B31)',
                'linear-gradient(135deg, #D9A91E, #C84B31, #D9A91E)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)',
            }}
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />

          <div className="relative p-8 md:p-12" style={{ color: '#EFECE6' }}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Features */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                    style={{ background: 'linear-gradient(135deg, #D9A91E, #C84B31)' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-lg opacity-50"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ background: 'linear-gradient(135deg, #D9A91E, #C84B31)' }}
                    />
                    <Settings className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                  <h3 className="text-3xl font-black">Add Features</h3>
                </motion.div>

                <div className="space-y-4">
                  {options.map((option, index) => {
                    const Icon = option.icon;
                    const isSelected = selectedOptions.includes(option.id);

                    return (
                      <motion.div
                        key={option.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group cursor-pointer"
                        onClick={() => toggleOption(option.id)}
                      >
                        {/* Glow on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                          style={{ backgroundColor: option.color }}
                        />

                        <div
                          className="relative p-5 rounded-2xl border-2 transition-all duration-300"
                          style={{
                            borderColor: isSelected ? option.color : 'rgba(239, 236, 230, 0.1)',
                            backgroundColor: isSelected ? `${option.color}15` : 'rgba(239, 236, 230, 0.05)',
                            boxShadow: isSelected ? `0 8px 25px ${option.color}25` : 'none',
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <motion.div
                                className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                                style={{
                                  background: isSelected 
                                    ? `linear-gradient(135deg, ${option.color}, ${option.color}dd)`
                                    : 'rgba(239, 236, 230, 0.1)',
                                }}
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                              >
                                {isSelected && (
                                  <motion.div
                                    className="absolute inset-0 rounded-xl blur-md"
                                    style={{ backgroundColor: option.color, opacity: 0.4 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  />
                                )}
                                <Icon 
                                  className="w-6 h-6 relative z-10" 
                                  style={{ color: isSelected ? '#EFECE6' : option.color }}
                                />
                              </motion.div>
                              <span className="font-bold text-lg">{option.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span 
                                className="text-xl font-black"
                                style={{ color: option.color }}
                              >
                                +${option.price}
                              </span>
                              <motion.div
                                className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                                style={{
                                  borderColor: isSelected ? option.color : 'rgba(239, 236, 230, 0.3)',
                                  backgroundColor: isSelected ? option.color : 'transparent',
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <AnimatePresence>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0, rotate: -180 }}
                                      animate={{ scale: 1, rotate: 0 }}
                                      exit={{ scale: 0, rotate: 180 }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                    >
                                      <Check className="w-5 h-5" style={{ color: '#1A1A1A' }} strokeWidth={3} />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Configuration & Pricing */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                    style={{ background: 'linear-gradient(135deg, #C84B31, #D9A91E)' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl blur-lg opacity-50"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ background: 'linear-gradient(135deg, #C84B31, #D9A91E)' }}
                    />
                    <Users className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                  <h3 className="text-3xl font-black">Scale & Pricing</h3>
                </motion.div>

                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Employees Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <label className="font-bold text-xl block mb-1">
                          Employees
                        </label>
                        <motion.span 
                          key={employees}
                          initial={{ scale: 1.2, color: '#D9A91E' }}
                          animate={{ scale: 1, color: '#EFECE6' }}
                          className="text-4xl font-black"
                        >
                          {employees}
                        </motion.span>
                      </div>
                      <motion.div
                        key={`emp-${employees}`}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-black"
                        style={{ color: '#D9A91E' }}
                      >
                        +${Math.floor((employees / 100) * 5)}
                      </motion.div>
                    </div>
                    <div className="relative">
                      <motion.div
                        className="absolute h-3 rounded-full"
                        style={{
                          left: 0,
                          top: 0,
                          width: `${(employees / 1000) * 100}%`,
                          background: 'linear-gradient(90deg, #D9A91E, #C84B31)',
                          boxShadow: '0 0 20px rgba(217, 169, 30, 0.5)',
                        }}
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(217, 169, 30, 0.5)',
                            '0 0 30px rgba(217, 169, 30, 0.8)',
                            '0 0 20px rgba(217, 169, 30, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <input
                        type="range"
                        min="1"
                        max="1000"
                        value={employees}
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="w-full h-3 bg-white/10 rounded-full appearance-none relative z-10 cursor-pointer
                          [&::-webkit-slider-thumb]:appearance-none 
                          [&::-webkit-slider-thumb]:h-7 
                          [&::-webkit-slider-thumb]:w-7 
                          [&::-webkit-slider-thumb]:rounded-full 
                          [&::-webkit-slider-thumb]:cursor-pointer 
                          [&::-webkit-slider-thumb]:shadow-lg
                          [&::-webkit-slider-thumb]:shadow-[#D9A91E]/50
                          [&::-webkit-slider-thumb]:border-4
                          [&::-webkit-slider-thumb]:border-[#1A1A1A]
                          hover:[&::-webkit-slider-thumb]:scale-110
                          [&::-webkit-slider-thumb]:transition-transform"
                        style={{
                          background: 'rgba(239, 236, 230, 0.1)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Offices Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <label className="font-bold text-xl block mb-1">
                          Offices
                        </label>
                        <motion.span 
                          key={offices}
                          initial={{ scale: 1.2, color: '#C84B31' }}
                          animate={{ scale: 1, color: '#EFECE6' }}
                          className="text-4xl font-black"
                        >
                          {offices}
                        </motion.span>
                      </div>
                      <motion.div
                        key={`off-${offices}`}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-black"
                        style={{ color: '#C84B31' }}
                      >
                        +${offices * 2}
                      </motion.div>
                    </div>
                    <div className="relative">
                      <motion.div
                        className="absolute h-3 rounded-full"
                        style={{
                          left: 0,
                          top: 0,
                          width: `${(offices / 50) * 100}%`,
                          background: 'linear-gradient(90deg, #C84B31, #D9A91E)',
                          boxShadow: '0 0 20px rgba(200, 75, 49, 0.5)',
                        }}
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(200, 75, 49, 0.5)',
                            '0 0 30px rgba(200, 75, 49, 0.8)',
                            '0 0 20px rgba(200, 75, 49, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={offices}
                        onChange={(e) => setOffices(Number(e.target.value))}
                        className="w-full h-3 bg-white/10 rounded-full appearance-none relative z-10 cursor-pointer
                          [&::-webkit-slider-thumb]:appearance-none 
                          [&::-webkit-slider-thumb]:h-7 
                          [&::-webkit-slider-thumb]:w-7 
                          [&::-webkit-slider-thumb]:rounded-full 
                          [&::-webkit-slider-thumb]:cursor-pointer 
                          [&::-webkit-slider-thumb]:shadow-lg
                          [&::-webkit-slider-thumb]:shadow-[#C84B31]/50
                          [&::-webkit-slider-thumb]:border-4
                          [&::-webkit-slider-thumb]:border-[#1A1A1A]
                          hover:[&::-webkit-slider-thumb]:scale-110
                          [&::-webkit-slider-thumb]:transition-transform"
                        style={{
                          background: 'rgba(239, 236, 230, 0.1)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <motion.div
                    layout
                    className="rounded-2xl p-6 space-y-4"
                    style={{
                      background: 'rgba(239, 236, 230, 0.05)',
                      border: '2px solid rgba(239, 236, 230, 0.1)',
                    }}
                  >
                    <div className="flex justify-between items-center text-base">
                      <span className="opacity-80">Base Plan</span>
                      <span className="font-bold">${basePrice}</span>
                    </div>

                    <AnimatePresence>
                      {selectedOptions.map((optionId) => {
                        const option = options.find((opt) => opt.id === optionId);
                        if (!option) return null;

                        return (
                          <motion.div
                            key={optionId}
                            initial={{ opacity: 0, height: 0, x: -20 }}
                            animate={{ opacity: 1, height: "auto", x: 0 }}
                            exit={{ opacity: 0, height: 0, x: 20 }}
                            className="flex justify-between items-center text-base"
                          >
                            <span className="opacity-80">{option.name}</span>
                            <span className="font-bold" style={{ color: option.color }}>
                              +${option.price}
                            </span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    <div className="flex justify-between items-center text-base">
                      <span className="opacity-80">
                        Scale ({employees} emp, {offices} off)
                      </span>
                      <span className="font-bold">+${scalePrice}</span>
                    </div>

                    {/* Divider */}
                    <motion.div
                      className="h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #D9A91E, #C84B31, #D9A91E)',
                      }}
                      animate={{
                        background: [
                          'linear-gradient(90deg, #D9A91E, #C84B31, #D9A91E)',
                          'linear-gradient(90deg, #C84B31, #D9A91E, #C84B31)',
                          'linear-gradient(90deg, #D9A91E, #C84B31, #D9A91E)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Total Price */}
                    <motion.div
                      className="flex justify-between items-center pt-2"
                      key={totalPrice}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-xl font-bold">Total Monthly</span>
                      <motion.span 
                        className="text-5xl font-black bg-gradient-to-r from-[#D9A91E] to-[#C84B31] bg-clip-text text-transparent"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ${totalPrice}
                      </motion.span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(217, 169, 30, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-6 rounded-2xl font-black text-xl relative overflow-hidden group mt-4"
                      style={{
                        background: 'linear-gradient(135deg, #D9A91E, #C84B31)',
                        color: '#1A1A1A',
                        boxShadow: '0 15px 35px rgba(217, 169, 30, 0.3)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      />
                      <span className="relative flex items-center justify-center gap-3">
                        Start Custom Plan
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Zap className="w-6 h-6" fill="currentColor" />
                        </motion.div>
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}