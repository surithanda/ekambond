import React from "react";
import { Building2 } from "lucide-react"; // Assuming Building2 is from Lucide React

interface SectionHeaderProps {
  title: string;
  highlightedText?: string;
  subtitle: string;
  badgeText?: string;
  titleClass?: string;
  subtitleClass?: string;
  badgeClass?: string;
  containerClass?: string;
  addLineBreak?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlightedText,
  subtitle,
  badgeText = "Section Highlight",
  titleClass = "text-4xl sm:text-5xl md:text-6xl font-neue-haas-medium text-secondary mb-4 md:mb-6 leading-tight",
  subtitleClass = "text-lg sm:text-xl md:text-2xl text-muted max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-canela px-4 sm:px-0",
  badgeClass = 'inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white bg-opacity-40 backdrop-blur-xl rounded-full shadow-lg sm:shadow-2xl mb-4 sm:mb-6 border border-white border-opacity-60 hover:bg-opacity-60 transition-all duration-500 cursor-pointer group/header text-sm',
containerClass = 'text-center mb-12 md:mb-16 px-4 sm:px-6',
  addLineBreak = false,
}) => {
  return (
    <div className={containerClass}>
      <div className={badgeClass}>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <Building2 className="w-5 h-5 text-accent group-hover/header:scale-110 transition-transform duration-500" />
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
          {badgeText}
        </span>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      </div>

      <h2 className={titleClass}>
        {title}
        {addLineBreak && <br />}
        {highlightedText && (
          <span
            className={
              addLineBreak
                ? "block bg-accent bg-clip-text text-transparent animate-gradient"
                : "bg-accent bg-clip-text text-transparent animate-gradient"
            }
          >
            {highlightedText}
          </span>
        )}
      </h2>
      <p className={subtitleClass}>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
