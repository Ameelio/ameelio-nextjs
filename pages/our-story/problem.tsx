import React from "react";
import BaseTemplate from "components/BaseTemplate";
import Head from "next/head";
import PaddedLayout from "components/Layout/PaddedLayout";
import { H1, H2, H3 } from "components/Typography";
import PayPhone from "assets/OurStory/PayPhone.png";
import Image from "next/image";
import BasicCard from "components/Cards/BasicCard";
import OurStoryBackground from "assets/Backgrounds/OurStoryBackground";
import ValuePropCard from "components/Cards/ValuePropCard";
import { PROBLEM_VALUE_PROP } from "utils/constants";

interface Props {}

const ProblemPage = (props: Props) => {
  return (
    <BaseTemplate>
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
      <div>
        <PaddedLayout>
          <BasicCard className="grid space-y-8 items-center text-center">
            <H2>Why prison communication and education?</H2>
            <span>
              For incarcerated people and their families, access to free
              communication and education can change everything.
            </span>
          </BasicCard>
        </PaddedLayout>

        <PaddedLayout>
          <div className="grid md:grid-cols-4  md:gap-x-8">
            <BasicCard>
              <p className="text-lg font-bold text-center">
                113 million people in America have had an immediate family
                member incarcerated.
              </p>
            </BasicCard>
            <BasicCard className="col-span-3">
              <p className="text-center">
                That’s nearly 1 in 2 of all adults in the U.S. Two billion
                dollar companies (worth a collective $3 billion dollars)
                dominate all of prison communications, charging as much as $25
                per phone call and $1.50 per email. This is driving 1 in 3
                families with incarcerated loved ones into debt, and restricting
                the education access of the over 2.2 million incarcerated
                people. Ameelio’s platform is disrupting this broken system. By
                connecting people in prison and families with free-to-use
                communication and education software, we free them from
                financial exploitation, and empower them to chart their own
                paths toward successful reentry from day one.
              </p>
            </BasicCard>
          </div>
        </PaddedLayout>

        <PaddedLayout>
          <div className="grid space-y-4">
            <H3 className="text-white">
              Free communication and education changes everything.
            </H3>
            <ValuePropCard valueProps={PROBLEM_VALUE_PROP} />
          </div>
        </PaddedLayout>

        <PaddedLayout className="grid md:grid-cols-2" marginRight="0%">
          <BasicCard>
            <div className="grid space-y-8">
              <H2>
                Every $1 invested in providing prison education and
                communication can yield $4-$5 in economic returns.
              </H2>
              <p>
                It’s a solid investment; access to education and free
                communication is one of the most important things we can do to
                fight mass incarceration.
              </p>
            </div>
          </BasicCard>
          <Image
            src="/static/images/Problem/Graduates.png"
            width="576"
            height="458"
            alt="Incarcerated graduates"
          />
        </PaddedLayout>
      </div>
    </BaseTemplate>
  );
};

export default ProblemPage;
