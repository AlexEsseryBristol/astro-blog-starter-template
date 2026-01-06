// src/types/schedule.ts
export type ScheduleItemType =
  | "Talk"
  | "Panel"
  | "Break"
  | "Workshop"
  | "Keynote"
  | "Registration"
  | "Other";

export type LogoRef = {
  src: string;
  alt: string;
};

export type ScheduleLink = {
  label: string;
  href: string;
};

export type ScheduleItem = {
  start: string;
  end?: string;
  title: string;
  type?: ScheduleItemType;
  location?: string;
  speakers?: string;
  description?: string;
  links?: ScheduleLink[];
  companyLogo?: LogoRef;
};

export type ScheduleDay = {
  dateLabel: string;
  items: ScheduleItem[];
};
