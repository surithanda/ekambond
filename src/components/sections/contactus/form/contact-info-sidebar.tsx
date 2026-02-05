import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Users, Sparkles, Calendar, Star, ArrowUpRight, Zap } from "lucide-react";

const ContactInfoSidebar = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+(000) 456-7890",
      gradient: "from-accent to-orange",
      bgGlow: "bg-accent/20",
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@d-themes.com",
      gradient: "from-orange to-accent",
      bgGlow: "bg-orange/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Street Name England",
      gradient: "from-surface to-brown",
      bgGlow: "bg-surface/20",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "150+",
      label: "Happy Clients",
      color: "from-accent to-orange",
    },
    {
      icon: Sparkles,
      value: "98%",
      label: "Satisfaction",
      color: "from-orange to-accent",
    },
    {
      icon: Calendar,
      value: "24h",
      label: "Response Time",
      color: "from-surface to-brown",
    },
  ];

  return (
    <motion.div
      className="lg:col-span-1 space-y-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* Contact Cards */}
      <motion.div
        className="bg-primary/40 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-surface/40 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-accent to-orange shadow-lg">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-neue-haas-medium text-secondary">Get in Touch</h3>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/60 backdrop-blur-xl border border-surface/40 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg relative`}
                  >
                    <info.icon className="w-5 h-5 text-primary" />
                    <div
                      className={`absolute inset-0 ${info.bgGlow} blur-xl -z-10`}
                    />
                  </div>

                  <div className="flex-1 relative z-10">
                    <div className="text-xs font-neue-haas-meidum text-muted uppercase tracking-wider mb-1">
                      {info.title}
                    </div>
                    <div className="text-secondary font-neue-haas-bold">{info.value}</div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Card */}
      <StatsCard stats={stats} />
    </motion.div>
  );
};

const StatsCard = ({ stats }: { stats: any[] }) => (
  <motion.div
    className="bg-gradient-to-br from-neutral/95 to-secondary/95 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-surface/30 text-primary relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
    <motion.div
      className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
    />

    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-accent/20 backdrop-blur-xl">
          <Star className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-2xl font-neue-haas-medium">Our Track Record</h3>
      </div>

      <div className="space-y-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 backdrop-blur-xl border border-surface/20 hover:bg-primary/20 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-xl`}
            >
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-3xl font-neue-haas-medium text-accent">{stat.value}</div>
              <div className="text-primary/90 text-sm font-neue-haas-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ContactInfoSidebar;