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
  titleKey: string;
  descriptionKey: string;
}

export const features: Feature[] = [
  {
    icon: IconCloudUpload,
    titleKey: "features.uptimeTitle",
    descriptionKey: "features.uptimeDesc",
  },
  {
    icon: IconWorld,
    titleKey: "features.domainTitle",
    descriptionKey: "features.domainDesc",
  },
  {
    icon: IconArrowsMaximize,
    titleKey: "features.bandwidthTitle",
    descriptionKey: "features.bandwidthDesc",
  },
  {
    icon: IconServer,
    titleKey: "features.cpanelTitle",
    descriptionKey: "features.cpanelDesc",
  },
  {
    icon: IconHeadset,
    titleKey: "features.supportTitle",
    descriptionKey: "features.supportDesc",
  },
  {
    icon: IconLock,
    titleKey: "features.sslTitle",
    descriptionKey: "features.sslDesc",
  },
];
