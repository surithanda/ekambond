export interface PlanCardsProps {
  selectedPlan: string;
  onPlanSelect: (plan: string) => void;
}

export type BillingCycle = 'monthly' | 'annual';

export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Package',
    badge: 'Budget',
    badgeColor: '#2A2A2A',
    tagline: 'for small agencies or startups looking to establish their presence',
    pricing: {
      monthly: 3999,
      annual: 3250
    },
    features: [
      { name: 'Custom Website Design', included: true },
      { name: 'Profile management', included: true },
      { name: 'Global search', included: true },
      { name: 'AI powered match', included: false },
      { name: 'Partners onboarding', included: false },
      { name: 'Background verification', included: false },
      { name: 'Horoscope integration', included: false },
      { name: 'Event invites', included: false },
      { name: 'Event management', included: false }
    ],
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Package',
    badge: 'Popular',
    badgeColor: 'gradient',
    tagline: 'for growing platforms that need advanced features + credibility',
    pricing: {
      monthly: 7999,
      annual: 4999
    },
    features: [
      { name: 'White labelling', included: true },
      { name: 'Profile management', included: true },
      { name: 'Global search', included: true },
      { name: 'AI powered match', included: true },
      { name: 'Partners Dashboard', included: true },
      { name: 'Payment Integration', included: true },
      { name: 'Background verification', included: true },
      { name: 'Horoscope integration', included: false },
      { name: 'Event invites', included: false },
      { name: 'Event management', included: false },
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    subtitle: 'Package',
    badge: 'Solid',
    badgeColor: '#2A2A2A',
    tagline: 'for leading matrimonial brands that want a complete grade solution',
    pricing: {
      monthly: 15999,
      annual: 7500
    },
    features: [
      { name: 'White labelling', included: true },
      { name: 'Profile management', included: true },
      { name: 'Global search', included: true },
      { name: 'AI powered match', included: true },
      { name: 'Partners dashboard', included: true },
      { name: 'Customized Reports', included: true },
      { name: 'Background verification', included: true },
      { name: 'Horoscope integration', included: true },
      { name: 'Event invites', included: true },
      { name: 'Event management', included: true },
      { name: 'Dedicated Suppport', included: true }
    ],
    highlighted: false,
  }
];