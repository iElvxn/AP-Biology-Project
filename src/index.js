import './style.css';
import loadHome from './Modules/home';
import loadWaterPage from './Modules/water'; //for testing only
import loadMacroPage from './Modules/macromolecules';//for testing only
import loadFunctionGroupsPage from './Modules/functionalgroups';//for testing only
import dom from './Modules/doms';

loadHome.loadHomePage();
//loadWaterPage();
//loadMacroPage();
//loadFunctionGroupsPage();
dom.domEvents();

