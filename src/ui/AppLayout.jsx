import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />

      <main className="max-w-3xl mx-auto overflow-scroll p-4">
        {isLoading && <Loader />}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
