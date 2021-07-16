import React from "react";
import AppStoreBadge from "assets/Badge/AppleStoreBadge";
import GooglePlayBadge from "assets/Badge/GooglePlayBadge.png";
import Image from "next/image";
interface Props {
  className?: string;
}

const AppStoreButtonDuo = ({ className }: Props) => {
  return (
    <div
      className={`flex md:flex-row flex-col justify-content-center align-items-center gap-y-4 ${className}`}
    >
      <div
        className="mr-4"
        style={{ width: 136}}
        onClick={() =>
          window.open(
            "https://apps.apple.com/us/app/ameelio/id1526489300",
            "_blank"
          )
        }
      >
        <AppStoreBadge />
      </div>

      <div style={{ width: 136, height: 40}}>
        <Image
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ameelio.letters_mobile&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
              "_blank"
            )
          }
          src={GooglePlayBadge}
          alt="Google play badge"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default AppStoreButtonDuo;
