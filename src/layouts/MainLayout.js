import Footer from "components/Footer";
import NavigationBar from "components/NavBar1";

const MainLayout = ({ children }) => {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
