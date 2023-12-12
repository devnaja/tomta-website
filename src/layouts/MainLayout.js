import FloatingButton from "components/FloatingButton";
import Footer from "components/Footer";
import NavigationBar from "components/NavBar1";

const MainLayout = ({ children }) => {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
      <FloatingButton />
    </main>
  );
};

export default MainLayout;
