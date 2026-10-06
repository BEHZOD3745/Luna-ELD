import userManualIcon from "../assets/icons/file.svg";
import inspectionIcon from "../assets/icons/inspection.svg";
import certificateIcon from "../assets/icons/certificate.svg";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  file: string;
  icon: string;
}

export const resources: ResourceItem[] = [
  {
    id: "user-manual",
    title: "User Manual",
    description:
      "Everything you need to know—from first setup to daily performance.",
    file: "/downloads/user-manual.pdf",
    icon: userManualIcon,
  },
  {
    id: "inspection-guide",
    title: "Inspection Guide",
    description:
      "Essential instructions for handling roadside inspections and displaying your ELD records.",
    file: "/downloads/inspection-guide.pdf",
    icon: inspectionIcon,
  },
  {
    id: "eld-certificate",
    title: "ELD Certificate",
    description:
      "Official Luna ELD certification and compliance documentation for your records.",
    file: "/downloads/eld-certificate.pdf",
    icon: certificateIcon,
  },
];