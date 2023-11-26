import { navButtons } from "../lib/constants";

export interface INavButton {
  title: string;
  redirect: string;
  active?: boolean;
}

export type SectionName = (typeof navButtons)[number]["title"];
