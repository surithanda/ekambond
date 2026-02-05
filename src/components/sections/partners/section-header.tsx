import React from "react";
import { LucideIcon, Handshake } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon?: LucideIcon;
  badgeText?: string;
  title?: string;
  highlightText?: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeIcon: BadgeIcon = Handshake,
  badgeText = "Trusted Collaborations",
  title = "Non Profitable & Organization",
  highlightText = "Organization",
  description = "Empowering social connections through meaningful partnerships and community.",
}) => {
  const mainTitle = title.replace(highlightText, "");

  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 xs:px-6 sm:px-8">
      {/* ====== Badge ====== */}
      <div className="inline-flex items-center gap-2 xs:gap-3 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-white bg-opacity-40 backdrop-blur-xl rounded-full shadow-lg sm:shadow-xl md:shadow-2xl mb-4 sm:mb-5 md:mb-6 border border-white border-opacity-60 hover:bg-opacity-60 transition-all duration-500 cursor-pointer group/header">
        <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-accent rounded-full animate-pulse" />

        {BadgeIcon && (
          <BadgeIcon className="w-4 xs:w-5 h-4 xs:h-5 text-accent group-hover/header:scale-110 transition-transform duration-500" />
        )}

        <span className="text-xs xs:text-sm font-neue-haas-medium text-secondary uppercase tracking-wider whitespace-nowrap">
          {badgeText}
        </span>

        <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-accent rounded-full animate-pulse" />
      </div>

      {/* ====== Title ====== */}
      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-neue-haas-medium text-secondary mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight">
        {mainTitle}
        <span className="block bg-accent bg-clip-text text-transparent animate-gradient mt-1 xs:mt-2">
          {highlightText}
        </span>
      </h2>

      {/* ====== Description ====== */}
      <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-neue-haas-regular px-2 xs:px-0">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;