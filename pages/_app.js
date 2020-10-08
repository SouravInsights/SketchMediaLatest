/* We create "_app.js" to override the default `App` component provided by Next. Here, we can add any sort of components that will 
   get passed to a multiple component tree. For example, this is the best place to add Themes, GlobalStyles, Auths etc. 
*/

import { ChakraProvider } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import theme from "@/styles/theme";
import NavBar from "components/NavBar";

/* Here, our App component receives two props: Component and pageProps. 
   - The Component prop is the active page, so whenever we navigate between routes, Component will change to the new page. Therefore, 
     any props we send to Component will be received by the page.

   - pageProps is something that 
*/
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
