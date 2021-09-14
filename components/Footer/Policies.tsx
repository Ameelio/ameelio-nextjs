import Link from "components/Link";

interface Props {}

const Policies = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
        <span className="font-light text-white mb-3 ">Policies & Privacy</span>
      <Link text="Privacy Policy" href="/static/Documents/Ameelio-Privacy-Policy.pdf"  className="text-sm text-white opacity-50"/>
      <Link text="Copyright Policy" href="/static/Documents/Ameelio-Copyright-Policy.pdf"  className="text-sm text-white opacity-50"/>
      <Link text="Terms of Use" href="/static/Documents/Website-Terms-Use.pdf"  className="text-sm text-white opacity-50"/>
      <Link text="Connect Terms of Service" href="/static/Documents/Connect-TOS.pdf"  className="text-sm text-white opacity-50"/>
    </div>
  );
};

export default Policies;
