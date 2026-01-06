// src/types/sponsorship.ts
export type Tier = {
  name: string;
  highlight?: boolean;
};

export type Benefit = {
  label: string;
  tiers: (boolean | string)[];
};
