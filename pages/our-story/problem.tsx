import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import PaddedLayout from "components/Layout/PaddedLayout";
import { H2 } from "components/Typography";
import PayPhone from "assets/OurStory/PayPhone.png";
import Image from "next/image";
import BasicCard from "components/Cards/BasicCard";
import OurStoryBackground from "assets/Backgrounds/OurStoryBackground";

interface Props {}

const ProblemPage = (props: Props) => {
  return (
    <BaseTemplate className="bg-blue-100">
      <Head>
        <title>
          Ameelio: Understanding the problem of prison telecommunicationn
        </title>
        <meta
          property="og:title"
          content="Ameelio: Understanding the problem of prison telecommunication"
          key="title"
        />
      </Head>
      <OurStoryBackground className="absolute top-1/4 object-cover z-0" />
      <PaddedLayout>
        <BasicCard>
          <div className="block">
            <H2 className="mb-8">Understanding the problem of prison telecommunication</H2>
            <div>
              <div className="md:float-left mr-8">
                <Image
                  src={PayPhone}
                  width={220}
                  height={336}
                  alt="Pay phone"
                />
              </div>
              <p className="break-normal mb-4">
                Prison communications are expensive, posing an obstacle to
                family contact. While increased family contact can reduce
                recidivism by 56%, the cost of staying in touch with an
                incarcerated loved one forces 1 in 3 families into debt. It is
                in the public interest to ensure that incarcerated people can
                easily maintain supportive relationships with their friends and
                family on the outside.
              </p>
              <p className="break-normal mb-4">
                While on the outside we have access to free video calls, email,
                and very inexpensive phone calls, incarcerated people may need
                to pay as much as $25 per call and $1.50 per email. The profits
                from these services support a $3 billion industry that is
                dominated by a private equity backed duopoly.
              </p  >
              <p className="break-normal	mb-4" >
                That’s why Ameelio exists, to disrupt the for-profit prison
                communications industry, and provide a suite of communication
                tools which support family contact and break the cycle of
                intergenerational harm. By providing a free video and
                e-messaging platform, and by making it easy for corrections
                officials to adopt our platform, we serve the public by
                promoting accessible quality family contact in a secure
                correctional environment. Beyond family contact, we encourage
                officials to use our suite of communications tools to supplement
                existing programming to improve rehabilitative outcomes. With
                our low-cost technology, we can support secure contact between
                incarcerated individuals and their counselors, educators, and
                programs in a way that is impossible under the incumbent
                for-profit model.
              </p  >
            </div>
          </div>
        </BasicCard>
      </PaddedLayout>
    </BaseTemplate>
  );
};

export default ProblemPage;
