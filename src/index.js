import { clearContent } from "./modulesAndFunctions/clearpage";
import { renderLandingPage } from "./pages/landing/landing";
import { renderMenuPage } from "./pages/menu/menu";

const content = document.getElementById('content');

clearContent(content);
renderLandingPage(content);
// renderMenuPage(content);