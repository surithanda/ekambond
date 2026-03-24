/**
 * MatrimonyIcons.tsx
 * Custom illustrated SVG icon components for EkamBond.
 * Each icon tells a small matrimony story.
 * Usage: <ProfileCreationIcon size={40} />
 */

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CRIMSON = "#C8302A";
const GOLD = "#D9A91E";
const NAVY = "#1B3A6E";
const CREAM = "#FDF6EC";
const SKIN = "#F5C9A0";
const DARK_SKIN = "#D4956A";
const BLUSH = "#F2A7A7";
const MAROON = "#8B1A1A";

// ─────────────────────────────────────────────────────────────────────────────
// 1. PROFILE CREATION ICON
// Bride in veil with a mini profile card (Name / Age / City)
// ─────────────────────────────────────────────────────────────────────────────
export function ProfileCreationIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Profile card background */}
      <rect x="2" y="10" width="28" height="36" rx="3" fill={CREAM} stroke={GOLD} strokeWidth="1.2" />

      {/* Card header accent */}
      <rect x="2" y="10" width="28" height="7" rx="3" fill={GOLD} opacity="0.3" />

      {/* Text lines on card */}
      <rect x="7" y="20" width="16" height="2" rx="1" fill={NAVY} opacity="0.5" />
      <rect x="7" y="25" width="11" height="1.5" rx="0.75" fill={NAVY} opacity="0.35" />
      <rect x="7" y="29" width="13" height="1.5" rx="0.75" fill={NAVY} opacity="0.35" />
      <rect x="7" y="33" width="9" height="1.5" rx="0.75" fill={CRIMSON} opacity="0.5" />

      {/* Small heart on card */}
      <path d="M22 34c0 0 2-1.5 2-3a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0-3 0c0 1.5 2 3 2 3" 
        fill={CRIMSON} opacity="0.7" transform="scale(0.6) translate(26 28)" />

      {/* Bride figure (right side, overlapping card) */}
      {/* Head */}
      <circle cx="36" cy="16" r="5.5" fill={SKIN} />
      {/* Hair */}
      <ellipse cx="36" cy="12.5" rx="4.5" ry="3" fill={MAROON} />

      {/* Veil — flowing from head */}
      <path d="M31.5 12 Q28 8 30 24 Q32 30 34 34" stroke={CREAM} strokeWidth="2.5"
        strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M40.5 12 Q44 8 42 24 Q40 30 38 34" stroke={CREAM} strokeWidth="2.5"
        strokeLinecap="round" fill="none" opacity="0.85" />
      {/* Veil fabric */}
      <path d="M31.5 12 Q36 9 40.5 12" stroke={GOLD} strokeWidth="1" fill="none" />

      {/* Bindi */}
      <circle cx="36" cy="14.5" r="0.8" fill={CRIMSON} />

      {/* Earring */}
      <circle cx="30.5" cy="16.5" r="0.7" fill={GOLD} />
      <line x1="30.5" y1="17.2" x2="30.5" y2="19" stroke={GOLD} strokeWidth="0.6" />

      {/* Saree / Body */}
      <path d="M30 21.5 Q29 28 30 36 L42 36 Q43 28 42 21.5" fill={CRIMSON} opacity="0.8" />
      {/* Blouse */}
      <rect x="31" y="21" width="10" height="6" rx="2" fill={MAROON} />
      {/* Saree border detail */}
      <path d="M30 21.5 Q29 28 30 36" stroke={GOLD} strokeWidth="0.8" fill="none" />

      {/* Garland on neck */}
      <path d="M32 22 Q36 25 40 22" stroke={GOLD} strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Hands / arms folded holding flower */}
      <path d="M31 26 Q28 28 29 31" stroke={SKIN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Small flower in hand */}
      <circle cx="28.5" cy="31" r="1.5" fill={BLUSH} stroke={GOLD} strokeWidth="0.5" />
      <circle cx="28.5" cy="31" r="0.6" fill={GOLD} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. ADVANCED FILTER ICON
// Elderly couple (parents) studying profile cards with a magnifier
// ─────────────────────────────────────────────────────────────────────────────
export function AdvancedFilterIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Profile cards stack (what they're looking at) */}
      <rect x="17" y="8" width="22" height="28" rx="2.5" fill={CREAM} stroke={GOLD} strokeWidth="1"/>
      <rect x="14" y="10" width="22" height="28" rx="2.5" fill="#FFF8ED" stroke={GOLD} strokeWidth="1" opacity="0.7"/>
      {/* Card content lines */}
      <rect x="16" y="13" width="14" height="2" rx="1" fill={NAVY} opacity="0.5" />
      <rect x="16" y="17" width="10" height="1.5" rx="0.75" fill={NAVY} opacity="0.3" />
      <rect x="16" y="20" width="12" height="1.5" rx="0.75" fill={NAVY} opacity="0.3" />
      {/* Small profile silhouette on card */}
      <circle cx="30" cy="14.5" r="3" fill={BLUSH} opacity="0.5" />

      {/* Magnifier */}
      <circle cx="28" cy="28" r="8" fill="none" stroke={CRIMSON} strokeWidth="2" />
      <line x1="33.5" y1="33.5" x2="39" y2="39" stroke={CRIMSON} strokeWidth="2.5" strokeLinecap="round" />
      {/* Magnifier highlight */}
      <circle cx="26" cy="26" r="2" fill="white" opacity="0.4" />

      {/* Father figure (left) */}
      {/* Head */}
      <circle cx="7" cy="26" r="4" fill={DARK_SKIN} />
      {/* Grey hair */}
      <path d="M3.5 24 Q7 21 10.5 24" fill="#A0A0A0" />
      {/* Body / kurta */}
      <rect x="4" y="30" width="6" height="10" rx="2" fill={NAVY} />
      {/* Dhoti / lower */}
      <path d="M4 38 Q5 43 7 44 Q9 43 10 38" fill="#E8E0D0" />
      {/* Arm pointing at cards */}
      <path d="M10 32 Q14 29 15 28" stroke={DARK_SKIN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Spectacles */}
      <circle cx="5.5" cy="26.5" r="1.5" fill="none" stroke="#555" strokeWidth="0.7" />
      <circle cx="8.5" cy="26.5" r="1.5" fill="none" stroke="#555" strokeWidth="0.7" />
      <line x1="7" y1="26.5" x2="7" y2="26.5" stroke="#555" strokeWidth="0.7" />
      <line x1="4" y1="26.5" x2="3.5" y2="26" stroke="#555" strokeWidth="0.7" />
      <line x1="10" y1="26.5" x2="10.5" y2="26" stroke="#555" strokeWidth="0.7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. SUBSCRIPTION & BILLING ICON
// Parents paying — mother hands a card, father approves, heart above
// ─────────────────────────────────────────────────────────────────────────────
export function SubscriptionBillingIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Credit/Membership card */}
      <rect x="12" y="18" width="24" height="16" rx="3" fill={NAVY} />
      <rect x="12" y="23" width="24" height="4" fill={GOLD} opacity="0.7" />
      <rect x="14" y="28" width="6" height="2" rx="0.5" fill="white" opacity="0.5" />
      <circle cx="32" cy="29" r="2.5" fill={GOLD} opacity="0.6" />
      <circle cx="35" cy="29" r="2.5" fill={CRIMSON} opacity="0.4" />

      {/* Mother figure (left, handing card) */}
      {/* Head */}
      <circle cx="7" cy="20" r="4.5" fill={SKIN} />
      {/* Saree colour blob / hair */}
      <path d="M3 18.5 Q7 15 11 18.5" fill={MAROON} />
      <path d="M2.5 17 Q7 22 11.5 17" fill={CRIMSON} opacity="0.3" />
      {/* Bindi */}
      <circle cx="7" cy="19" r="0.7" fill={CRIMSON} />
      {/* Body */}
      <rect x="4" y="24.5" width="6" height="8" rx="2" fill={CRIMSON} opacity="0.7" />
      {/* Arm reaching forward with card */}
      <path d="M10 27 Q15 22 20 21" stroke={SKIN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Mini card in hand */}
      <rect x="18" y="19" width="5" height="3.5" rx="0.8" fill={GOLD} opacity="0.8" />

      {/* Father figure (right, receiving) */}
      {/* Head */}
      <circle cx="41" cy="20" r="4.5" fill={DARK_SKIN} />
      {/* Hair */}
      <path d="M36.5 18.5 Q41 15.5 45.5 18.5" fill="#555" opacity="0.8" />
      {/* Body — kurta */}
      <rect x="38" y="24.5" width="6" height="8" rx="2" fill={NAVY} />
      {/* Arm reaching to receive */}
      <path d="M38 27 Q33 22 28 21" stroke={DARK_SKIN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Check / tick expression */}
      <path d="M39 22 L40.5 23.5 L43.5 20.5" stroke="#2D9E6E" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Floating heart above */}
      <path d="M24 10 C24 10 20 6 20 9 C20 12 24 15 24 15 C24 15 28 12 28 9 C28 6 24 10 24 10Z"
        fill={CRIMSON} opacity="0.9" />
      {/* Stars sparkle around heart */}
      <circle cx="18" cy="7" r="0.8" fill={GOLD} />
      <circle cx="30" cy="7" r="0.8" fill={GOLD} />
      <circle cx="24" cy="4" r="0.6" fill={GOLD} opacity="0.6" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. AI MATCHMAKER SEARCH ICON
// Traditional matchmaker (Naayi Thatha / broker figure) with glowing magnifier
// connecting two silhouettes
// ─────────────────────────────────────────────────────────────────────────────
export function AiMatchmakerIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Bride silhouette (left) */}
      <ellipse cx="6" cy="42" rx="4" ry="6" fill={CRIMSON} opacity="0.5" />
      <circle cx="6" cy="33" r="3.5" fill={SKIN} opacity="0.7" />
      {/* Veil */}
      <path d="M3 33 Q6 30 9 33" stroke={GOLD} strokeWidth="1" fill={CREAM} opacity="0.6" />

      {/* Groom silhouette (right) */}
      <ellipse cx="42" cy="42" rx="4" ry="6" fill={NAVY} opacity="0.5" />
      <circle cx="42" cy="33" r="3.5" fill={DARK_SKIN} opacity="0.7" />
      {/* Turban */}
      <path d="M38.5 31 Q42 28 45.5 31" stroke={GOLD} strokeWidth="1.5" fill={CRIMSON} opacity="0.5" />

      {/* Connecting dotted golden line (match) */}
      <path d="M10 37 Q24 30 38 37" stroke={GOLD} strokeWidth="1.2" strokeDasharray="2 2.5" fill="none" />

      {/* Hearts along path */}
      <text x="21" y="31" fontSize="6" fill={CRIMSON} opacity="0.8">♥</text>

      {/* Matchmaker figure (center) */}
      {/* Head */}
      <circle cx="24" cy="14" r="5" fill={DARK_SKIN} />
      {/* Traditional turban */}
      <ellipse cx="24" cy="11" rx="5" ry="3.5" fill={CRIMSON} />
      <path d="M19 11 Q24 8 29 11" fill={GOLD} opacity="0.7" />

      {/* Body — dhoti */}
      <rect x="21" y="19" width="6" height="9" rx="2" fill={NAVY} opacity="0.8" />
      <path d="M21 26 Q22 32 24 33 Q26 32 27 26" fill="#E0D5C0" />

      {/* Magnifier with glow */}
      <circle cx="24" cy="14" r="9" fill={GOLD} opacity="0.06" />
      <circle cx="34" cy="22" r="5.5" fill="none" stroke={GOLD} strokeWidth="2" />
      <circle cx="34" cy="22" r="5.5" fill={GOLD} opacity="0.08" />
      {/* AI sparkle inside magnifier */}
      <text x="31" y="24.5" fontSize="6" fill={CRIMSON} opacity="0.9">✦</text>
      <line x1="38" y1="26.5" x2="42" y2="30.5" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />

      {/* Arm holding magnifier */}
      <path d="M27 22 Q30 20 31.5 18" stroke={DARK_SKIN} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. BACKGROUND VERIFICATION ICON
// Shield with a family tree emblem — parents at top, children below
// ─────────────────────────────────────────────────────────────────────────────
export function BackgroundVerificationIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Shield */}
      <path d="M24 3 L42 10 L42 26 Q42 38 24 46 Q6 38 6 26 L6 10 Z"
        fill={CREAM} stroke={GOLD} strokeWidth="1.5" />
      {/* Shield inner shadow */}
      <path d="M24 7 L39 13 L39 26 Q39 36 24 43 Q9 36 9 26 L9 13 Z"
        fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.5" />

      {/* Family tree inside shield */}
      {/* Father head */}
      <circle cx="19" cy="18" r="3.5" fill={DARK_SKIN} />
      <path d="M16 17 Q19 14.5 22 17" fill="#555" opacity="0.7" />
      {/* Mother head */}
      <circle cx="29" cy="18" r="3.5" fill={SKIN} />
      <path d="M25.5 15.5 Q29 13 32.5 15.5" fill={MAROON} opacity="0.7" />
      <circle cx="29" cy="16.5" r="0.6" fill={CRIMSON} />

      {/* Connecting line */}
      <line x1="22.5" y1="18" x2="25.5" y2="18" stroke={GOLD} strokeWidth="1.2" />

      {/* Tree trunk lines down */}
      <line x1="24" y1="21" x2="24" y2="27" stroke={GOLD} strokeWidth="1.2" />
      <line x1="18" y1="27" x2="30" y2="27" stroke={GOLD} strokeWidth="1.2" />
      <line x1="18" y1="27" x2="18" y2="31" stroke={GOLD} strokeWidth="1.2" />
      <line x1="30" y1="27" x2="30" y2="31" stroke={GOLD} strokeWidth="1.2" />
      {/* Vertical drop from parents */}
      <line x1="24" y1="21" x2="24" y2="27" stroke={GOLD} strokeWidth="1.2" />

      {/* Child heads */}
      <circle cx="18" cy="34" r="3" fill={SKIN} opacity="0.8" />
      <circle cx="30" cy="34" r="3" fill={DARK_SKIN} opacity="0.8" />

      {/* Green tick checkmark overlaid */}
      <circle cx="36" cy="36" r="6" fill="#2D9E6E" />
      <path d="M33 36.5 L35.5 39 L39.5 33.5" stroke="white" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. EVENTS & COMMUNITY ICON
// Wedding mandap / ceremony arch with two tiny figures beneath
// ─────────────────────────────────────────────────────────────────────────────
export function EventsIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Mandap arch */}
      <path d="M4 44 L4 22 Q4 6 24 6 Q44 6 44 22 L44 44" 
        fill="none" stroke={CRIMSON} strokeWidth="2.5" />
      {/* Inner arch detail */}
      <path d="M10 44 L10 24 Q10 12 24 12 Q38 12 38 24 L38 44"
        fill="none" stroke={GOLD} strokeWidth="1" opacity="0.6" />

      {/* Mandap pillars decorations */}
      {/* Left pillar chains */}
      {[20, 24, 28, 32, 36, 40].map((y, i) => (
        <circle key={i} cx="4" cy={y} r="1" fill={GOLD} opacity="0.7" />
      ))}
      {/* Right pillar chains */}
      {[20, 24, 28, 32, 36, 40].map((y, i) => (
        <circle key={i} cx="44" cy={y} r="1" fill={GOLD} opacity="0.7" />
      ))}

      {/* Flower garland on top arch */}
      {[0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0].map((t, i) => {
        const angle = Math.PI * i / 10;
        const cx = 24 - 20 * Math.cos(angle);
        const cy = 14 - 8 * Math.sin(angle);
        return (
          <circle key={i} cx={cx} cy={cy} r="1.2"
            fill={i % 2 === 0 ? CRIMSON : GOLD} opacity="0.8" />
        );
      })}

      {/* Floating diyas (lamps) */}
      <ellipse cx="14" cy="44" rx="3" ry="1.2" fill={GOLD} opacity="0.6" />
      <path d="M14 43 Q14 40 15 38" stroke={CRIMSON} strokeWidth="1" opacity="0.7" strokeLinecap="round" />
      <ellipse cx="34" cy="44" rx="3" ry="1.2" fill={GOLD} opacity="0.6" />
      <path d="M34 43 Q34 40 35 38" stroke={CRIMSON} strokeWidth="1" opacity="0.7" strokeLinecap="round" />

      {/* Bride & Groom beneath mandap */}
      {/* Groom */}
      <circle cx="19" cy="32" r="3.5" fill={DARK_SKIN} />
      <path d="M16 31 Q19 28 22 31" fill={NAVY} opacity="0.7" />
      <rect x="16.5" y="35.5" width="5" height="8" rx="2" fill={NAVY} opacity="0.8" />

      {/* Bride */}
      <circle cx="29" cy="32" r="3.5" fill={SKIN} />
      <path d="M25.5 30 Q29 27 32.5 30" fill={MAROON} opacity="0.7" />
      <circle cx="29" cy="30.5" r="0.7" fill={CRIMSON} />
      <rect x="26.5" y="35.5" width="5" height="8" rx="2" fill={CRIMSON} opacity="0.7" />

      {/* Joined hands (garland exchange visual) */}
      <path d="M23 35.5 Q24 34 25 35.5" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="34" r="1" fill={GOLD} opacity="0.9" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. WHITE-LABEL BRANDING ICON
// Bride + groom stamp with a palette / brand frame around them
// ─────────────────────────────────────────────────────────────────────────────
export function WhiteLabelIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Outer brand frame */}
      <rect x="2" y="2" width="44" height="44" rx="6" fill="none" stroke={NAVY} strokeWidth="1.5" strokeDasharray="3 2" />

      {/* "YOUR BRAND" text placeholder bar */}
      <rect x="6" y="4" width="36" height="6" rx="2" fill={NAVY} opacity="0.15" />
      <rect x="10" y="5.5" width="20" height="3" rx="1" fill={NAVY} opacity="0.4" />

      {/* Colour palette dots (bottom) */}
      {[CRIMSON, GOLD, NAVY, "#2D9E6E", "#9B59B6"].map((c, i) => (
        <circle key={c} cx={9 + i * 7} cy={43} r="2.5" fill={c} opacity="0.8" />
      ))}

      {/* Couple silhouettes inside frame */}
      {/* Groom */}
      <circle cx="18" cy="20" r="5" fill={DARK_SKIN} />
      <path d="M13.5 18.5 Q18 15 22.5 18.5" fill={NAVY} />
      <rect x="14.5" y="25" width="7" height="11" rx="2.5" fill={NAVY} />
      {/* Sherwani collar detail */}
      <path d="M16 25 Q18 27 20 25" stroke={GOLD} strokeWidth="0.8" fill="none" />

      {/* Bride */}
      <circle cx="30" cy="20" r="5" fill={SKIN} />
      <path d="M25.5 17 Q30 14 34.5 17" fill={MAROON} />
      {/* Veil */}
      <path d="M25.5 17 Q23 22 25 30" stroke={CREAM} strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M34.5 17 Q37 22 35 30" stroke={CREAM} strokeWidth="2" fill="none" opacity="0.8" />
      <circle cx="30" cy="18.5" r="0.8" fill={CRIMSON} />
      <rect x="26.5" y="25" width="7" height="11" rx="2.5" fill={CRIMSON} opacity="0.8" />

      {/* Ring / stamp approval in corner */}
      <circle cx="40" cy="8" r="5" fill={GOLD} opacity="0.15" stroke={GOLD} strokeWidth="1" />
      <text x="37.5" y="10.5" fontSize="6" fill={GOLD}>✓</text>

      {/* Joined hands at bottom */}
      <path d="M22 34 Q24 32 26 34" stroke={GOLD} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. HOROSCOPE / KUNDALI ICON
// Rotating zodiac wheel with a kundali chart grid in centre
// ─────────────────────────────────────────────────────────────────────────────
export function HoroscopeIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Outer zodiac ring */}
      <circle cx="24" cy="24" r="22" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.4" />
      <circle cx="24" cy="24" r="18" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />

      {/* Zodiac symbols evenly placed */}
      {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((symbol, i) => {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const r = 19.5;
        const x = 24 + r * Math.cos(angle);
        const y = 24 + r * Math.sin(angle);
        return (
          <text key={symbol} x={x - 2.5} y={y + 3} fontSize="5.5"
            fill={GOLD} opacity={0.75} textAnchor="middle">{symbol}</text>
        );
      })}

      {/* Kundali grid (4×4 diamond grid) */}
      <rect x="10" y="10" width="28" height="28" fill={CREAM} stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="10" y1="10" x2="24" y2="24" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="38" y1="10" x2="24" y2="24" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="10" y1="38" x2="24" y2="24" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="38" y1="38" x2="24" y2="24" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="10" y1="10" x2="38" y2="10" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="38" y1="10" x2="38" y2="38" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="38" y1="38" x2="10" y2="38" stroke={CRIMSON} strokeWidth="0.8" />
      <line x1="10" y1="38" x2="10" y2="10" stroke={CRIMSON} strokeWidth="0.8" />

      {/* Nakshatra numbers in cells */}
      {["1","2","3","4"].map((n, i) => {
        const positions = [{x:13,y:15},{x:33,y:15},{x:33,y:35},{x:13,y:35}];
        return <text key={n} x={positions[i].x} y={positions[i].y} fontSize="4.5" fill={NAVY} opacity="0.6">{n}</text>;
      })}

      {/* Heart of compatibility in center */}
      <text x="21.5" y="26.5" fontSize="7" fill={CRIMSON} opacity="0.85">♥</text>

      {/* Stars */}
      <circle cx="4" cy="4" r="1.2" fill={GOLD} />
      <circle cx="44" cy="4" r="1.2" fill={GOLD} />
      <circle cx="4" cy="44" r="1.2" fill={GOLD} />
      <circle cx="44" cy="44" r="1.2" fill={GOLD} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. MESSAGING ICON
// Two heart-shaped speech bubbles floating toward each other
// ─────────────────────────────────────────────────────────────────────────────
export function MessagingIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Left chat bubble (bride's) — crimson */}
      <path d="M2 8 Q2 4 6 4 L22 4 Q26 4 26 8 L26 20 Q26 24 22 24 L12 24 L6 30 L8 24 Q2 24 2 20 Z"
        fill={CRIMSON} opacity="0.15" stroke={CRIMSON} strokeWidth="1.5" />
      {/* Bride silhouette inside left bubble */}
      <circle cx="9" cy="13" r="3" fill={SKIN} opacity="0.7" />
      <path d="M6.5 12 Q9 9.5 11.5 12" fill={MAROON} opacity="0.6" />
      <circle cx="9" cy="11.5" r="0.6" fill={CRIMSON} />
      {/* Text dots */}
      <circle cx="16" cy="13" r="1" fill={CRIMSON} opacity="0.5" />
      <circle cx="19" cy="13" r="1" fill={CRIMSON} opacity="0.5" />
      <circle cx="22" cy="13" r="1" fill={CRIMSON} opacity="0.5" />

      {/* Right chat bubble (groom's) — navy */}
      <path d="M46 18 Q46 14 42 14 L26 14 Q22 14 22 18 L22 30 Q22 34 26 34 L36 34 L42 40 L40 34 Q46 34 46 30 Z"
        fill={NAVY} opacity="0.12" stroke={NAVY} strokeWidth="1.5" />
      {/* Groom silhouette inside right bubble */}
      <circle cx="39" cy="23" r="3" fill={DARK_SKIN} opacity="0.7" />
      <path d="M36.5 22 Q39 19.5 41.5 22" fill="#555" opacity="0.6" />
      {/* Text dots */}
      <circle cx="26" cy="23" r="1" fill={NAVY} opacity="0.5" />
      <circle cx="29" cy="23" r="1" fill={NAVY} opacity="0.5" />
      <circle cx="32" cy="23" r="1" fill={NAVY} opacity="0.5" />

      {/* Central floating heart (the message between them) */}
      <path d="M24 36 C24 36 20 32 20 35 C20 38 24 41 24 41 C24 41 28 38 28 35 C28 32 24 36 24 36Z"
        fill={CRIMSON} />
      {/* Shimmer dots */}
      <circle cx="20" cy="43" r="1" fill={GOLD} opacity="0.6" />
      <circle cx="24" cy="45" r="0.8" fill={GOLD} opacity="0.5" />
      <circle cx="28" cy="43" r="1" fill={GOLD} opacity="0.6" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. VIDEO CALLING ICON
// Couple on screen — bride (left screen) + groom (right screen) waving,
// connected by a floating heart
// ─────────────────────────────────────────────────────────────────────────────
export function VideoCallingIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Bride screen (left) */}
      <rect x="1" y="10" width="20" height="28" rx="3" fill={CREAM} stroke={CRIMSON} strokeWidth="1.5" />
      {/* Screen content — crimson tint */}
      <rect x="2" y="11" width="18" height="26" rx="2" fill={CRIMSON} opacity="0.07" />
      {/* Camera dot */}
      <circle cx="11" cy="12.5" r="0.8" fill={CRIMSON} opacity="0.5" />

      {/* Bride inside screen */}
      <circle cx="11" cy="23" r="5" fill={SKIN} />
      <path d="M6.5 21 Q11 18 15.5 21" fill={MAROON} opacity="0.7" />
      <circle cx="11" cy="21.5" r="0.8" fill={CRIMSON} />
      {/* Veil on screen */}
      <path d="M6.5 21 Q5 25 6 33" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M15.5 21 Q17 25 16 33" stroke={CREAM} strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Body in screen */}
      <rect x="7" y="28" width="8" height="9" rx="2" fill={CRIMSON} opacity="0.6" />
      {/* Wave hand */}
      <path d="M15 27 Q18 24 19 21" stroke={SKIN} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="20" r="1.5" fill={SKIN} />

      {/* Groom screen (right) */}
      <rect x="27" y="10" width="20" height="28" rx="3" fill={CREAM} stroke={NAVY} strokeWidth="1.5" />
      <rect x="28" y="11" width="18" height="26" rx="2" fill={NAVY} opacity="0.06" />
      <circle cx="37" cy="12.5" r="0.8" fill={NAVY} opacity="0.5" />

      {/* Groom inside screen */}
      <circle cx="37" cy="23" r="5" fill={DARK_SKIN} />
      <path d="M32.5 21 Q37 18 41.5 21" fill="#555" opacity="0.7" />
      {/* Sherwani collar */}
      <rect x="33" y="28" width="8" height="9" rx="2" fill={NAVY} opacity="0.7" />
      <path d="M35 28 Q37 30 39 28" stroke={GOLD} strokeWidth="0.7" fill="none" />
      {/* Wave hand */}
      <path d="M33 27 Q30 24 29 21" stroke={DARK_SKIN} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="29" cy="20" r="1.5" fill={DARK_SKIN} />

      {/* Floating heart between screens */}
      <path d="M24 20 C24 20 21 17 21 20 C21 23 24 26 24 26 C24 26 27 23 27 20 C27 17 24 20 24 20Z"
        fill={CRIMSON} />

      {/* Wi-fi / connection arcs above heart */}
      <path d="M20 16 Q24 12 28 16" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round" />
      <path d="M22 18 Q24 16 26 18" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.8" strokeLinecap="round" />

      {/* Bottom bar — both screens */}
      <rect x="1" y="36" width="20" height="2" rx="1" fill={CRIMSON} opacity="0.3" />
      <rect x="27" y="36" width="20" height="2" rx="1" fill={NAVY} opacity="0.3" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. MEMBER MANAGEMENT ICON
// Multiple profile cards with a hand sorting/organizing them
// ─────────────────────────────────────────────────────────────────────────────
export function MemberManagementIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Stack of profile cards */}
      <rect x="6" y="14" width="22" height="30" rx="3" fill={CREAM} stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <rect x="10" y="10" width="22" height="30" rx="3" fill={CREAM} stroke={GOLD} strokeWidth="1" opacity="0.7" />
      <rect x="14" y="6" width="22" height="30" rx="3" fill={CREAM} stroke={NAVY} strokeWidth="1.2" />

      {/* Top card content */}
      {/* Profile face on card */}
      <circle cx="22" cy="16" r="5" fill={SKIN} />
      <path d="M17.5 14.5 Q22 11 26.5 14.5" fill={MAROON} opacity="0.6" />
      <circle cx="22" cy="14.5" r="0.7" fill={CRIMSON} />

      {/* Card details */}
      <rect x="17" y="23" width="14" height="1.5" rx="0.75" fill={NAVY} opacity="0.5" />
      <rect x="17" y="26.5" width="10" height="1.2" rx="0.6" fill={NAVY} opacity="0.3" />
      <rect x="17" y="29.5" width="12" height="1.2" rx="0.6" fill={NAVY} opacity="0.3" />

      {/* Verified badge on card */}
      <circle cx="33" cy="10" r="5" fill="#2D9E6E" />
      <path d="M30 10 L32.5 12.5 L36.5 7.5" stroke="white" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Organizing hand from right */}
      <path d="M42 22 Q44 20 44 24 Q44 28 42 28 L38 30 Q36 31 36 28 L36 20 Q36 18 38 19 Z"
        fill={DARK_SKIN} opacity="0.85" />
      {/* Fingers */}
      <path d="M36 20 Q35 17 37 17" stroke={DARK_SKIN} strokeWidth="2" strokeLinecap="round" />
      <path d="M36 20 Q35 15 37.5 15" stroke={DARK_SKIN} strokeWidth="2" strokeLinecap="round" />
      <path d="M36 20 Q36 14 38 14" stroke={DARK_SKIN} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. GLOBAL REACH ICON
// Earth globe with hearts pinned across continents
// ─────────────────────────────────────────────────────────────────────────────
export function GlobalReachIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} style={style}>

      {/* Globe */}
      <circle cx="24" cy="24" r="21" fill={CREAM} stroke={NAVY} strokeWidth="1.5" />

      {/* Globe meridians */}
      <ellipse cx="24" cy="24" rx="11" ry="21" fill="none" stroke={NAVY} strokeWidth="0.8" opacity="0.35" />
      <ellipse cx="24" cy="24" rx="18" ry="21" fill="none" stroke={NAVY} strokeWidth="0.8" opacity="0.2" />
      {/* Latitude lines */}
      <line x1="3" y1="18" x2="45" y2="18" stroke={NAVY} strokeWidth="0.8" opacity="0.2" />
      <line x1="3" y1="24" x2="45" y2="24" stroke={NAVY} strokeWidth="0.8" opacity="0.2" />
      <line x1="3" y1="30" x2="45" y2="30" stroke={NAVY} strokeWidth="0.8" opacity="0.2" />

      {/* Continents (simplified blobs) */}
      <path d="M14 18 Q18 16 20 20 Q18 24 14 22 Z" fill={GOLD} opacity="0.45" />
      <path d="M24 14 Q30 11 33 16 Q32 22 27 21 Q23 19 24 14Z" fill={GOLD} opacity="0.45" />
      <path d="M26 24 Q31 22 34 27 Q31 31 27 30 Q24 27 26 24Z" fill={GOLD} opacity="0.45" />
      <path d="M14 26 Q17 24 19 28 Q17 32 14 30Z" fill={GOLD} opacity="0.35" />

      {/* Heart pins on globe */}
      <text x="13" y="20" fontSize="6" fill={CRIMSON} opacity="0.9">♥</text>
      <text x="27" y="16" fontSize="6" fill={CRIMSON} opacity="0.9">♥</text>
      <text x="27" y="29" fontSize="5" fill={CRIMSON} opacity="0.7">♥</text>
      <text x="14" y="30" fontSize="4" fill={CRIMSON} opacity="0.6">♥</text>
    </svg>
  );
}
