import {
  IconCloudUpload,
  IconWorld,
  IconArrowsMaximize,
  IconServer,
  IconHeadset,
  IconLock,
} from "@tabler/icons-react";

export interface Feature {
  icon: typeof IconCloudUpload;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: IconCloudUpload,
    title: "99.9% Uptime Guarantee",
    description:
      "Our infrastructure ensures your website stays online with enterprise-grade reliability and redundant systems.",
  },
  {
    icon: IconWorld,
    title: "Free Domain Name",
    description:
      "Get a free .co.tz or .com domain with any annual hosting plan. TCRA accredited registrar.",
  },
  {
    icon: IconArrowsMaximize,
    title: "Unlimited Bandwidth",
    description:
      "No bandwidth limits or hidden charges. Your website can handle traffic spikes without extra costs.",
  },
  {
    icon: IconServer,
    title: "cPanel Control Panel",
    description:
      "Manage your hosting with the industry-standard cPanel. Easy file management, databases, and email setup.",
  },
  {
    icon: IconHeadset,
    title: "24/7 Expert Support",
    description:
      "Our Tanzanian support team is available around the clock via phone, WhatsApp, and email.",
  },
  {
    icon: IconLock,
    title: "Free SSL Certificate",
    description:
      "Every hosting plan includes a free SSL certificate to secure your website and boost SEO rankings.",
  },
];
