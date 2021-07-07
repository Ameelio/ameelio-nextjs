import React from "react";
// import "./Footer.css";
import {FacebookFilled, InstagramFilled, GithubFilled, TwitterSquareFilled} from '@ant-design/icons';
const Footer = () => {
  return (
    <div className="flex flex-col w-full p-5 md-flex-row">
      <div className="flex flex-col">
        <span className="font-light text-white mb-3 ">Network</span>
        <a className="mb-2 text-white" href="https://twitter.com/teamameelio">
          <TwitterSquareFilled color="white" />
          <span className="ml-3">Twitter</span>
        </a>
        <a
          className="mb-2 text-white"
          href="https://www.instagram.com/teamameelio/"
        >
          <InstagramFilled color="text-white" />
          <span className="ml-3">Instagram</span>
        </a>

        <a
          className="mb-2 text-white"
          href="https://www.facebook.com/teamameelio/"
        >
          <FacebookFilled className="text-white" />
          <span className="ml-3">Facebook</span>
        </a>

        <a className="mb-2 text-white" href="https://github.com/Ameelio">
          <GithubFilled color="white" />
          <span className="ml-3">GitHub</span>
        </a>
      </div>
      <div className="ml-auto flex flex-col md-pr-5 pt-5">
        <h3 className="md-text-right text-white">Ameelio</h3>
        <span className="md-text-right p5 text-white">
          Contact us at team@ameelio.org
        </span>
        <span className="text-white mt-3">
          © 2021 Ameelio. Ameelio Inc, EIN 84-1800611, is a registered nonprofit
          501(c)(3) organization.
        </span>
      </div>
    </div>
  );
};

export default Footer;
