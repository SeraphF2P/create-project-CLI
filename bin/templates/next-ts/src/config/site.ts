export const siteConfig = {
  header: {
    navigator: [
      {
        name: "الرئيسية",
        href: "/",
      },
      {
        name: "من نحن",
        href: "/about",
      },
      {
        name: "تواصل معنا",
        href: "/contact",
      },
    ],
  },

  socialLinks: [
    {
      name: "twitterX",
      href: "https://x.com/",
    },
    {
      name: "whatsApp",
      href: "https://api.whatsapp.com/send/?phone=%2B934108130&type=phone_number",
    },
    {
      name: "tiktok",
      href: "https://www.tiktok.com/@name",
    },
  ],
  location: "",
  email: {
    name: "Info@gmail.com",
    href: "mailto:info@gmail.com",
  },
} as const
