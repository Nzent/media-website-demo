import {
  IconBadgeTm,
  IconBrandWechat,
  IconSeo,
  IconTicket,
  IconVideo,
} from "@tabler/icons-react";
import React, { JSX } from "react";

function ServicesSection() {
  interface IService {
    icon: JSX.Element;
    name: string;
    description: string;
  }
  const Services: IService[] = [
    {
      icon: <IconBadgeTm size={100} stroke={1} className="text-green-500" />,
      name: "Branding",
      description:
        "We help businesses establish a unique identity with compelling visual and strategic branding solutions that resonate with their audience, ensuring consistency across all marketing channels and touchpoints.",
    },
    {
      icon: <IconBadgeTm size={100} stroke={1} className="text-green-500" />,
      name: "Social Media Marketing",
      description:
        "Boost your online presence with our expert social media strategies, content creation, and targeted campaigns across various platforms, helping you build meaningful connections with your audience and drive engagement.",
    },
    {
      icon: (
        <IconBrandWechat size={100} stroke={1} className="text-green-500" />
      ),
      name: "Billboard Advertising",
      description:
        "Maximize your brand exposure with high-impact billboard advertisements in prime locations tailored to your target audience, ensuring your message reaches a wide demographic and leaves a lasting impression.",
    },
    {
      icon: <IconVideo size={100} stroke={1} className="text-green-500" />,
      name: "Video Production",
      description:
        "Engage your audience with high-quality video content, including commercials, promotional videos, and corporate storytelling, crafted with professional cinematography and post-production techniques to make your brand stand out.",
    },
    {
      icon: <IconSeo size={100} stroke={1} className="text-green-500" />,
      name: "SEO & Content Marketing",
      description:
        "Improve your search rankings and attract organic traffic with data-driven SEO strategies and compelling content marketing, designed to enhance your brand authority and drive long-term digital success.",
    },
    {
      icon: <IconTicket size={100} stroke={1} className="text-green-500" />,
      name: "Event Promotions",
      description:
        "From product launches to corporate events, we create buzz and attract attendees with strategic event marketing solutions, ensuring your event gains the visibility and engagement it deserves for maximum impact.",
    },
  ];

  return (
    <div>
      {/* headiing */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-heading font-bold self-start w-full text-center">
          Services
        </div>
        <div className="self-start h-full text-subheading w-full text-center mb-8">
          We offer a wide range of media services to help our clients
        </div>
        {/* services cards */}
        <div className="grid grid-cols-3 gap-4 w-full h-full">
          {Services.map((service, index) => (
            <div
              key={index}
              className="bg-white group relative p-4 rounded-md flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 duration-500 flex flex-col justify-center items-center">
                <div>{service.icon}</div>
                <div className="text-subheading text-nowrap">
                  {service.name}
                </div>
              </div>
              <div className="text-body  w-full  opacity-0 group-hover:opacity-100 duration-500 ">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
