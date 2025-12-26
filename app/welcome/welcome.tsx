import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Link } from "react-router";

export function Welcome() {
  return (
    <div>
      <Link to="/main-page">
      TO MAIN
      </Link>
    </div>
  );
}
