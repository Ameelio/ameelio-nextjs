import React, { useEffect, useRef, useState } from "react";
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
import BackgroundImage from "components/BackgroundImage/BackgroundImage";

interface Props {}

const ProblemPage = (props: Props) => {
  const node = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    if (!node.current) return;

    console.log(node.current);
    setMinHeight(node.current.clientHeight);
  }, [node]);

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

      <div className="grid md:space-y-4 lg:gap-y-48 " style={{ minHeight }}>
        {/* Background */}
        <div className="absolute grid z-0" ref={node}>
          <BackgroundImage
            src={"/static/images/Problem/GraduationHug.png"}
            alt="Graduate hugging loved one"
          />
          <BackgroundImage
            src={"/static/images/Problem/PersonHoldingPicture.png"}
            alt="Graduate hugging loved one"
          />
          <div className="w-screen h-96	lg:h-64 problem-gradient" />
          <BackgroundImage
            src={"/static/images/Problem/Hugs.png"}
            alt="Graduate hugging loved one"
            classname="problem-image-gradient"
          />
          <div className="w-screen h-96	lg:h-48 2xl:h-0 problem-gradient " />
        </div>

        {/* Components */}
        <PaddedLayout>
          <BasicCard>
            <div className="grid space-y-4 items-center text-center md:p-8">
              <H2>Why prison communication and education?</H2>
              <span>
                For incarcerated people and their families, access to free
                communication and education can change everything.
              </span>
            </div>
          </BasicCard>
        </PaddedLayout>

        <PaddedLayout>
          <div className="flex flex-col gap-y-8 lg:grid  lg:grid-cols-4  md:gap-x-8">
            <BasicCard>
              <p className="text-2xl font-bold text-center">
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

        <PaddedLayout className="flex flex-col-reverse flex md:grid md:grid-cols-2">
          <BasicCard className="rounded-tr-none rounded-br-none">
            <div className="grid space-y-8 md:p-8">
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
            className="object-cover"
          />
        </PaddedLayout>
      </div>
    </BaseTemplate>
  );
};

export default ProblemPage;
