import { Auth } from "../components/auth";
import { Qoute } from "../components/quote";

export const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>
      <div className="hiddle lg:block">
        <Qoute />
      </div>
    </div>
  );
};
