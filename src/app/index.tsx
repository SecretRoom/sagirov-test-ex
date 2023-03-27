import { Routing } from "pages";
import "./index.sass";
import { withProviders } from "./providers";

const App = () => (
  <Routing />
)

export default withProviders(App);