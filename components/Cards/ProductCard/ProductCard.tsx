import React from "react";
import BasicCard from "components/Cards/BasicCard";
import LettersWordmark from "assets/Wordmarks/LettersWordmark";
import ConnectWordmark from "assets/Wordmarks/ConnectWordmark";
import Link from "components/Link";
import { TCallToAction } from "types";
import AppStoreButtonDuo from "components/Button/AppStoreButtonDuo";
import Button from "components/Button";
import { ArrowRightOutlined} from '@ant-design/icons'
interface Props {
  image: React.ReactNode;
  type: "letters" | "connect";
  desc: string;
  cta: TCallToAction | "download";
}

const ProductCard = ({ image, type, desc, cta }: Props) => {
  return (
    <BasicCard>
      <div className="grid md:grid-cols-3 items-center overflow-hidden	">

        {image}
        <div className="flex flex-col items-center md:items-start md:justify-center gap-y-8">
          {type === "letters" ? <LettersWordmark /> : <ConnectWordmark />}
          <p>{desc}</p>
          {cta === "download" ? (
            <AppStoreButtonDuo />
          ) : (
            <Button variant="primary">{cta.text}</Button>
          )}
          <Link href={`/products/${type}`} text="Learn more"/>
        </div>
      </div>
    </BasicCard>
  );
};

export default ProductCard;
