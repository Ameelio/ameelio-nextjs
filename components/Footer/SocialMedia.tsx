
interface Props {}

const SocialMedia = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="font-light text-white mb-3 ">Network</span>
      <a
        className="text-white opacity-50"
        href="https://twitter.com/teamameelio"
      >
        <span>Twitter</span>
      </a>
      <a
        className="text-white opacity-50"
        href="https://www.instagram.com/teamameelio/"
      >
        <span>Instagram</span>
      </a>

      <a
        className="text-white opacity-50"
        href="https://www.facebook.com/teamameelio/"
      >
        <span>Facebook</span>
      </a>

      <a className="text-white opacity-50" href="https://github.com/Ameelio">
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default SocialMedia;
