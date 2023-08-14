import { clearContent } from "./modulesAndFunctions/clearpage";
import { renderLandingPage } from "./pages/landing/landing";
import { renderMenuPage } from "./pages/menu/menu";
import { renderAboutPage } from "./pages/about/about";

const content = document.getElementById('content');

clearContent(content);
// renderLandingPage(content);
renderAboutPage(content);