export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/genesisconnect-studio/?viewAsMember=true",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/genesisconnect_studio/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591505610345",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/75G4H3GURNPGP1",
  },
] as const;

export const socialProfileUrls = socialLinks.map((link) => link.href);
