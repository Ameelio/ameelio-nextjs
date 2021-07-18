import React from "react";
import Button from "components/Button";
import Image from "next/image";
import PaddedLayout from "components/Layout/PaddedLayout";
import ConnectChat from "assets/Mockups/Connect/ConnectChat.png";
import ConnectDOCDashboard from "assets/Mockups/Connect/ConnectDOCDashboard.png";
import { H1 } from "components/Typography";
import Link from "next/link";
import HeroMockup from "assets/Mockups/HeroMockup.png";
interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <div className={`flex z-10 ${className}`}>
      <PaddedLayout className="flex z-10">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="flex flex-col gap-y-8">
              <H1 className="text-white text-5xl	font-bold">
                Transforming America’s correctional system with technology
              </H1>

              <p className="text-white">
                By connecting incarcerated people with support networks, we cut
                recidivism and sustainably reduce prison populations. Ameelio’s
                ecosystem of products helps everyone — from families to
                corrections officials to service providers — empowering
                successful reentry from day one.
              </p>

              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <span className="text-white">I am:</span>
                <div className="flex gap-x-4">
                  <Link passHref href="/who-we-serve/loved-ones">
                    <Button variant="tertiary">A Loved One</Button>
                  </Link>
                  <Link passHref href="/who-we-serve/corrections">
                    <Button variant="tertiary">Corrections Staff</Button>
                  </Link>
                  {/* <Link><Button variant="tertiary">An Educator</Button></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PaddedLayout>
      <div className="hidden md:block w-5/12 absolute -right-24">
        <Image src={HeroMockup} alt="Connect call" className="" />
      </div>
    </div>
  );
};

export default Hero;
