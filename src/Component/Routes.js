import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Services from "../pages/Services";
import Loader from "../utils/Loader";
import { TokenService } from "../services/storage.service";
import Customer_list from "../pages/Customers/Customer_list";
import Customer_withdraws from "../pages/Customers/Customer_withdraws";
import Customer_def_image from "../pages/Customers/Customer_def_image";
import errordashboard from "../pages/error";
import All_orders from "../pages/Orders/All_order";
import Completed from "../pages/Orders/Completed";
import Declined from "../pages/Orders/Declined";
import Pending from "../pages/Orders/Pending";
import Processing from "../pages/Orders/Processing";
import Child from "../pages/Manage Categories/Child";
import Affilate_information from "../pages/General_setting/Affilate_information";
import Website_maintenance from "../pages/General_setting/Website_maintenance";
import Website_contents from "../pages/General_setting/Website_contents";
import Shipping_methods from "../pages/General_setting/Shipping_methods";
import Popup_banner from "../pages/General_setting/Popup_banner";
import Pickup_locations from "../pages/General_setting/Pickup_locations";
import Packagings from "../pages/General_setting/Packagings";
import Logo from "../pages/General_setting/Logo";
import G_Footer from "../pages/General_setting/G_Footer";
import Favicon from "../pages/General_setting/Favicon";
import Error_banner from "../pages/General_setting/Error_banner";
import Subscription_plan from "../pages/vendor_subscription_plan/Subscription_plan";
import Pending_verifications from "../pages/Vendor_verification/Pending_verifications";
import Shiping_gateway from "../pages/Shipping_gateway/Shiping_gateway";
import Payment_information from "../pages/Payment_setting/Payment_information";
import BulkProductUpload from "../pages/BulkProductUpload";
import Manage_roles from "../pages/Manage_roles/Manage_roles";
import Manage_staff from "../pages/manage_staff/Manage_staff";
import Set_coupons from "../pages/Set_copouns/Set_coupons";
import Vendor_subscription from "../pages/Vendors/Vendor_subscription";
import Vendor_list from "../pages/Vendors/Vendor_list";
import Default_background from "../pages/Vendors/Default_background";
import Main from "../pages/Manage Categories/Main";
import Sub from "../pages/Manage Categories/Sub";
import All_verifications from "../pages/Vendor_verification/All_verifications";
import All_product from "../pages/Products/All_product";
import Deactivated from "../pages/Products/Deactivated";

import Customer_detail from "../pages/Customers/Customer_detail";
import Social_Links from "../pages/Social_setting/Social_Links";
import Add_new_product from "../pages/Products/Add_new_product";
import Disputes from "../pages/Messages/Disputes";
import Ticket from "../pages/Messages/Ticket";
import Loaders from "../pages/General_setting/Loaders";
import Slider from "../pages/HomePageSetting/Slider";
import AddSlider from "../pages/HomePageSetting/AddSlider";
import RightSidebanner1 from "../pages/HomePageSetting/RightSidebanner1";
import Vendordetails from "../pages/Vendors/Vendordetails";
import EditProduct from "../pages/Products/EditProduct";
import Vendor_withdraws from "../pages/Vendors/Vendor_withdraws";
import OrderDetails from "../pages/Orders/OrderDetails";

function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(TokenService.getToken());

  useLayoutEffect(() => {
    if (TokenService.getToken()) {
      console.log("hello ", TokenService.getToken());
      setLoading(false);
      setUser(TokenService.getToken());
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/customer-details/:id" component={Customer_detail} />
        <Route exact path="/order-details/:id" component={OrderDetails} />
        <Route exact path="/Vendor-details/:id" component={Vendordetails} />
        <Route exact path="/Edit-product/:id" component={EditProduct} />

        <Route exact path="/social-links" component={Social_Links} />
        <Route exact path="/add-product" component={Add_new_product} />
        <Route exact path="/Deactivated" component={Deactivated} />
        <Route exact path="/Disputes" component={Disputes} />
        <Route exact path="/Ticket" component={Ticket} />
        <Route exact path="/Loaders" component={Loaders} />
        <Route exact path="/Slider" component={Slider} />
        <Route exact path="/AddSlider" component={AddSlider} />
        <Route exact path="/RightSidebanner1" component={RightSidebanner1} />
        <Route exact path="/Vendor_withdraws" component={Vendor_withdraws} />

        <Route
          exact
          path="/dashboard"
          component={() => <Dashboard authorized={TokenService.getToken()} />}
        />

        <Route
          exact
          path="/service"
          component={() => <Services authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/All_product"
          component={() => <All_product authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/customer-list"
          component={() => (
            <Customer_list authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/customer-withdraws"
          component={() => (
            <Customer_withdraws authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/customer-def-image"
          component={() => (
            <Customer_def_image authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/all-order"
          component={() => <All_orders authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/completed"
          component={() => <Completed authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/declined"
          component={() => <Declined authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/pending"
          component={() => <Pending authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/processing"
          component={() => <Processing authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Child"
          component={() => <Child authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Sub"
          component={() => <Sub authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Main"
          component={() => <Main authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Default_background"
          component={() => (
            <Default_background authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Vendor_list"
          component={() => <Vendor_list authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Vendor_subscription"
          component={() => (
            <Vendor_subscription authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Affilate_information"
          component={() => (
            <Affilate_information authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Error_banner"
          component={() => (
            <Error_banner authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Favicon"
          component={() => <Favicon authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/G_Footer"
          component={() => <G_Footer authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Logo"
          component={() => <Logo authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Packagings"
          component={() => <Packagings authorized={TokenService.getToken()} />}
        />
        <Route
          exact
          path="/Pickup_locations"
          component={() => (
            <Pickup_locations authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Popup_banner"
          component={() => (
            <Popup_banner authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Shipping_methods"
          component={() => (
            <Shipping_methods authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Website_contents"
          component={() => (
            <Website_contents authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Website_maintenance"
          component={() => (
            <Website_maintenance authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/All_verifications"
          component={() => (
            <All_verifications authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Pending_verifications"
          component={() => (
            <Pending_verifications authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Subscription_plan"
          component={() => (
            <Subscription_plan authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Shiping_gateway"
          component={() => (
            <Shiping_gateway authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Payment_information"
          component={() => (
            <Payment_information authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Bulk_product_upload"
          component={() => (
            <BulkProductUpload authorized={TokenService.getToken()} />
          )}
        />

        <Route
          exact
          path="/Manage_roles"
          component={() => (
            <Manage_roles authorized={TokenService.getToken()} />
          )}
        />
        <Route
          exact
          path="/Manage_staff"
          component={() => (
            <Manage_staff authorized={TokenService.getToken()} />
          )}
        />

        <Route
          exact
          path="/Set_coupons"
          component={() => <Set_coupons authorized={TokenService.getToken()} />}
        />

        <Route exact path="/" component={Login} />

        <Route component={errordashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
