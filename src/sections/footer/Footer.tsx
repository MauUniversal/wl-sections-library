import { useState, type ReactNode } from "react";
import logoUniversal from "@assets/logoUniversal.png";
import {
  ChevronDownIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@assets/icons";
import {
  footerBadges as defaultBadges,
  footerCopyright as defaultCopyright,
  footerLogoAlt as defaultLogoAlt,
  footerNavSections as defaultNavSections,
  footerPaymentMethods as defaultPaymentMethods,
  footerPaymentsTitle as defaultPaymentsTitle,
  footerPoweredByBrand as defaultPoweredByBrand,
  footerPoweredByLabel as defaultPoweredByLabel,
  footerSocialItems as defaultSocialItems,
  footerTagline as defaultTagline,
} from "./data";
import type { FooterNavSection, FooterSocialId, FooterSocialItem } from "./types";
import {
  FooterBlockElement,
  FooterBlockTitleElement,
  FooterBrandElement,
  FooterCopyrightElement,
  FooterDividerElement,
  FooterElement,
  FooterLegalElement,
  FooterLogoElement,
  FooterNavElement,
  FooterNavLinkElement,
  FooterNavListElement,
  FooterNavSectionElement,
  FooterNavTitleElement,
  FooterNavToggleElement,
  FooterNavToggleIconElement,
  FooterPillElement,
  FooterPillsElement,
  FooterPoweredBrandElement,
  FooterPoweredByElement,
  FooterSocialLinkElement,
  FooterSocialsElement,
  FooterTaglineElement,
} from "./Footer.elements";

const socialIcons: Record<FooterSocialId, ReactNode> = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  youtube: <YoutubeIcon />,
  email: <MailIcon />,
};

const FooterNavSectionBlock = ({ section }: { section: FooterNavSection }) => {
  const [open, setOpen] = useState(false);

  if (section.collapsible) {
    return (
      <FooterNavSectionElement>
        <FooterNavToggleElement
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {section.title}
          <FooterNavToggleIconElement $open={open} aria-hidden>
            <ChevronDownIcon />
          </FooterNavToggleIconElement>
        </FooterNavToggleElement>

        {open && (
          <FooterNavListElement>
            {section.links.map((link) => (
              <li key={link.id}>
                <FooterNavLinkElement href={link.href}>{link.label}</FooterNavLinkElement>
              </li>
            ))}
          </FooterNavListElement>
        )}
      </FooterNavSectionElement>
    );
  }

  return (
    <FooterNavSectionElement>
      <FooterNavTitleElement>{section.title}</FooterNavTitleElement>
      <FooterNavListElement>
        {section.links.map((link) => (
          <li key={link.id}>
            <FooterNavLinkElement href={link.href}>{link.label}</FooterNavLinkElement>
          </li>
        ))}
      </FooterNavListElement>
    </FooterNavSectionElement>
  );
};

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  tagline?: string;
  socialItems?: FooterSocialItem[];
  navSections?: FooterNavSection[];
  paymentMethods?: readonly string[];
  paymentsTitle?: string;
  badges?: readonly string[];
  copyright?: string;
  poweredByLabel?: string;
  poweredByBrand?: string;
}

export const Footer = ({
  logoSrc = logoUniversal,
  logoAlt = defaultLogoAlt,
  tagline = defaultTagline,
  socialItems = defaultSocialItems,
  navSections = defaultNavSections,
  paymentMethods = defaultPaymentMethods,
  paymentsTitle = defaultPaymentsTitle,
  badges = defaultBadges,
  copyright = defaultCopyright,
  poweredByLabel = defaultPoweredByLabel,
  poweredByBrand = defaultPoweredByBrand,
}: FooterProps) => {
  return (
    <FooterElement>
      <FooterBrandElement>
        <FooterLogoElement src={logoSrc} alt={logoAlt} />
        <FooterTaglineElement>{tagline}</FooterTaglineElement>
        <FooterSocialsElement>
          {socialItems.map((item) => (
            <FooterSocialLinkElement
              key={item.id}
              href={item.href}
              aria-label={item.label}
            >
              {socialIcons[item.id]}
            </FooterSocialLinkElement>
          ))}
        </FooterSocialsElement>
      </FooterBrandElement>

      <FooterNavElement>
        {navSections.map((section) => (
          <FooterNavSectionBlock key={section.id} section={section} />
        ))}
      </FooterNavElement>

      <FooterDividerElement />

      <FooterBlockElement>
        <FooterBlockTitleElement>{paymentsTitle}</FooterBlockTitleElement>
        <FooterPillsElement>
          {paymentMethods.map((method) => (
            <FooterPillElement key={method}>{method}</FooterPillElement>
          ))}
        </FooterPillsElement>
      </FooterBlockElement>

      <FooterDividerElement />

      <FooterPillsElement>
        {badges.map((badge) => (
          <FooterPillElement key={badge}>{badge}</FooterPillElement>
        ))}
      </FooterPillsElement>

      <FooterDividerElement />

      <FooterLegalElement>
        <FooterCopyrightElement>{copyright}</FooterCopyrightElement>
        <FooterPoweredByElement>
          {poweredByLabel}{" "}
          <FooterPoweredBrandElement>{poweredByBrand}</FooterPoweredBrandElement>
        </FooterPoweredByElement>
      </FooterLegalElement>
    </FooterElement>
  );
};
