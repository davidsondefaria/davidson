import { navButtons } from "../lib/constants";

export type SectionName = (typeof navButtons)[number]["title"];

/** Component types */

export interface INavButton {
  title: string;
  redirect: string;
  active?: boolean;
}

export interface INavBar {
  activeSection: string;
}
