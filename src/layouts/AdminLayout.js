import Footer from "../components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-2">
      {/* <NavigationBar /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
