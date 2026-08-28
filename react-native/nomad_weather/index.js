import { registerRootComponent } from "expo";

// import App from './src/01/App1_layouts';
// import App from "./src/01/App3_location";
import App from "./src/01/App3_location";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
