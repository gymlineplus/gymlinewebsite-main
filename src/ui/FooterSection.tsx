import { Instagram, Facebook } from "lucide-react";
import Footer from "@/components/ui/footer";
import Image from "next/image";

function Demo() {
  return (
    <div className="w-full">
      <Footer
        logo={
          <Image
            src={"/logo.png"}
            alt="gymline logo"
            width={190}
            height={100}
            className=""
          />
        }
        brandName=""
        socialLinks={[
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://www.instagram.com/gymline.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            label: "Instagram",
          },
          {
            icon: <Facebook className="h-5 w-5" />,
            href: "https://www.facebook.com/GymLine.IN/",
            label: "Facebook",
          },
        ]}
        mainLinks={[
          { href: "/cardio", label: "Cardio" },
          { href: "/strength", label: "Strength" },
          { href: "/strength-plate-loaded", label: "Strength Plate Loaded" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Gymline",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export default Demo;
