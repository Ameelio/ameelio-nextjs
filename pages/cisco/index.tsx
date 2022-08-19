import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import LettersProduct from "components/Product/LettersProduct";
import PaddedLayout from "components/Layout/PaddedLayout";
import { H2 } from "components/Typography";
import BasicCard from "components/Cards/BasicCard";
import Button from "components/Button";

const CiscoPage = () => {
  return (
    <BaseTemplate>
      <div>
        <PaddedLayout className="flex flex-col gap-8 items-center">
          <H2 className="text-center">Ameelio with Instant Connect</H2>
          <p>
            Utilize the Ameelio integration with Webex to connect incarcerated
            people with their support networks on the outside
          </p>
          <p className="text-center">
            Ameelio is the first unified communications platform for
            correctional facilities. We enable professionals and loved ones to
            securely connect with incarcerated people. Professional visitors pay
            a monthly subscription. The service has a freemium model for
            families and loved ones.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <BasicCard title="Video Calls">
              The nation’s first-ever free-to-use prison video calling platform.
              This product serves three-key user groups: families and loved
              ones, incarcerated people, and correctional staff.
            </BasicCard>
            <BasicCard title="E-Messaging">
              Incarcerated people can readily access their tablet or kiosk and
              send secure electronic messages to authorized contacts in
              Ameelio’s monitored environment
            </BasicCard>
            <BasicCard title="Voice Calls">
              Secure, reliable, and cheaper to provide than standard telephony.
              Our technology prevents third- party   dialing, supports approved
              calling lists, and is built specifically for   the correctional
              environment.
            </BasicCard>
          </div>

          <Button
            variant="primary"
            onClick={() => window.open("https://app.ameelio.org/login")}
          >
            Get Started
          </Button>
        </PaddedLayout>
      </div>
    </BaseTemplate>
  );
};

export default CiscoPage;
