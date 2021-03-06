import Layout from "../src/components/Layout/Layout";
import "../src/styles/styles.css";
import moment from "moment";

moment.locale("es");

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
