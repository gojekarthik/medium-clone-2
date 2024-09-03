import { Auth } from "../components/auth";
import { Qoute } from "../components/quote";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signup" />
      </div>
      <div className="hiddle lg:block">
        <Qoute />
      </div>
    </div>
  );
};
