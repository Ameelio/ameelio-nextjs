import React from "react";
import BasicCard from "components/Cards/BasicCard";
import LettersWordmark from "assets/Wordmarks/LettersWordmark";
import ConnectWordmark from "assets/Wordmarks/ConnectWordmark";
import Link from "components/Link";
import { TCallToAction } from "types";
import AppStoreButtonDuo from "components/Button/AppStoreButtonDuo";
import Button from "components/Button";
import { ArrowRightOutlined } from "@ant-design/icons";
import { H3 } from "components/Typography";
interface Props {
  image: React.ReactNode;
  type: "letters" | "connect" | "lms";
  desc: string;
  cta: TCallToAction | "download";
  disableSecondary?: boolean;
}

const ProductCard = ({ image, type, desc, cta, disableSecondary }: Props) => {
  const getHeaderLogo = () => {
    switch (type) {
      case "letters":
        return <LettersWordmark />;
      case 'connect':
        return <ConnectWordmark />
      case 'lms':
        return <H3>Coming soon!</H3>
    }
  };

  return (
    <BasicCard>
      <div className="flex flex-col-reverse   md:grid md:grid-cols-3 items-center overflow-hidden">
        {image}
        <div className="flex flex-col items-center md:items-start md:justify-center gap-y-8 md:col-span-2	">
          {getHeaderLogo()}
          <p className="text-center md:text-left">{desc}</p>
          {cta === "download" ? (
            <AppStoreButtonDuo className="flex flex-col" />
          ) : (
            <Button
              variant="primary"
              onClick={() => window.open(cta.link, "_blank")}
            >
              {cta.text}
            </Button>
          )}
          {!disableSecondary && <Link href={`/products/${type}`} text="Learn more" />}
        </div>
      </div>
    </BasicCard>
  );
};

export default ProductCard;
