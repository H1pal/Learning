import { registerRootComponent } from "expo";

// import App from "./src/App1_touchable";
// import App from "./src/App2_textInput";
// import App from "./src/App3_addTodos";
// import App from "./src/App4_persist";
// import App from "./src/App5_delete";
// import App from "./src/App6_update";
import App from "./src/MyApp";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
