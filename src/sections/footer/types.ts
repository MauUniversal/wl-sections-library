export type FooterSocialId =
  | "facebook"
  | "twitter"
  | "instagram"
  | "youtube"
  | "email";

export interface FooterSocialItem {
  id: FooterSocialId;
  label: string;
  href: string;
}

export interface FooterNavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterNavSection {
  id: string;
  title: string;
  collapsible?: boolean;
  links: FooterNavLink[];
}
