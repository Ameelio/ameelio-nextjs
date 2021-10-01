import {
  SafetyCertificateTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  VideoCameraOutlined,
  StarOutlined,
  LikeOutlined,
  TrophyOutlined,
  DollarOutlined,
  HeartOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { TValuePropItem } from "types";
import { LINKS } from "./ExternalLinks";

export const CONNECT_VALUE_PROPS: TValuePropItem[] = [
  {
    icon: <CheckCircleTwoTone className="text-4xl" />,
    title: "Connect is for anybody, including educators and social services.",
    body: "Connect supplements in-person instruction by connecting students with on-campus resources, such as personalized tutoring, librarian access, disability support services, financial aid, and academic counseling.",
    cta: { text: "Get in touch", link: LINKS.GET_IN_TOUCH },
  },
  {
    icon: <HeartTwoTone className="text-4xl" />,
    title: "Connect is completely free for families.",
    body: "You can download Connect from the app store on any Apple or Android device. Once you create your profile, you can add your loved one and request to be added as their contact. Once corrections officials approve you as a visitor, you will then be able to schedule video calls.",
    cta: { text: "Sign the petition", link: 'petition' },
  },
  {
    icon: <SafetyCertificateTwoTone className="text-4xl" />,
    title: "Connect meets corrections industry security standards.",
    body: "Use Connect on any device, including devices that your agency may already own.",
    cta: { text: "Request a demo", link: LINKS.CONNECT_DEMO },
  },
];

export const CORRECTIONS_VALUE_PROPS: TValuePropItem[] = [
  {
    icon: <VideoCameraOutlined className="text-4xl text-blue-400" />,
    title: "Modern techology solutions",
    body: "We can upgrade your facility to modern tech solutions that priortize the safety, security, and efficency you require",
    cta: { text: "Get in touch", link: LINKS.GET_IN_TOUCH },
  },
  {
    icon: <StarOutlined className="text-4xl text-blue-400" />,
    title: "Reduce recidivism",
    body: "Our products reduce recidvism by connecting people in prison to educational, legal, and emotional support for free",
  },
  {
    icon: <LikeOutlined className="text-4xl text-blue-400" />,
    title: "Develop solutions together.",
    body: "Collaboration is essential to building a rehabilitative system. We work with partners to improve access to family contact and social services within their agency's requirements",
  },
];

export const EDUCATORS_VALUE_PROPS: TValuePropItem[] = [
  {
    icon: <TrophyOutlined className="text-4xl text-blue-400" />,
    title: "Equitable access to resources",
    body: "Leverage our suite of communications tools to connect students with on-campus resources such as research assistance, support services, and tutoring.",
  },
  {
    icon: <StarOutlined className="text-4xl text-blue-400" />,
    title: "Digital literacy on any device",
    body: "Our device agnostic approach is compatible with any laptop, tablet, or computer, empowering students to be familiar with devices and operating systems that are common in the Free World.",
  },
  {
    icon: <LikeOutlined className="text-4xl text-blue-400" />,
    title: "Shared values and collaboration.",
    body: "As the only nonprofit technology partner for educators, we share a common mission to improve equitable access to education for incarcerated people. We want to work with you to develop solutions for your needs and in the furtherance of this shared mission.",
  },
];

export const PROBLEM_VALUE_PROP: TValuePropItem[] = [
  {
    icon: <TrophyOutlined className="text-4xl text-gray-300" />,
    title: "Recidivism Reduction",
    body: "Studies show that increased contact with family, and access to education while on the inside reduces recidivism. Meta-analysis published in 2016 in the Journal of Criminal Justice found that experiencing visitation resulted in a 26% decrease in recidivism; and when using multiple measures of recidivism it jumps to a 56% decrease.",
  },
  {
    icon: <DollarOutlined className="text-4xl text-gray-300" />,
    title: "Financial Freedom",
    body: "Displacing predatory prison service providers will lift millions of families out of debt. Nearly 2 in 3 families (65%) with an incarcerated member were unable to meet their family’s basic needs. 1 in 3 are driven into debt just to pay for phone & visitation costs.",
  },
  {
    icon: <RiseOutlined className="text-4xl text-gray-300" />,
    title: "Increased Employment",
    body: "Expanding education and job training access to every incarcerated person will significantly boost post-release employment rates, and shrink the prison population. 80% of all incarcerated people had no income in the year leading up to their incarceration. Only 9% of the incarcerated complete a college prison program. Yet, every $1 invested in prison education saves taxpayers $4-$5 in re-incarceration costs; and those who participate in correctional education programs are 43% less likely to recidivate.",
  },
  {
    icon: <HeartOutlined className="text-4xl text-gray-300" />,
    title: "Stronger Communities",
    body: "Removing barriers to communication, and scaling the reach of vital resources into correctional facilities will lead to better post-release outcomes, and stronger communities. Nearly every incarcerated person will return to their community at some point. Keeping them connected with their loved ones, education, and job opportunities increases reentry success, and strengthens our communities.",
  },
];
