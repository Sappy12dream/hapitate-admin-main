import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
function SideNav({ setvalue }) {
  return (
    <>
      <nav
        id="sidebar"
        className={setvalue ? "nav-sidebar" : "nav-sidebar active"}
      >
        <ul className="list-unstyled components" id="accordion">
          <li className="active">
            <Link
              to="/dashboard"
              className="wave-effect waves-effect waves-button active"
            >
              <i className="fa fa-home mr-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="#order"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-hand-holding-usd" />
              Orders
            </a>
            <ul
              className="collapse list-unstyled"
              id="order"
              data-parent="#accordion"
            >
              <li>
                <Link to="/all-order"> All Orders</Link>
              </li>
              <li>
                <Link to="/pending"> Pending Orders</Link>
              </li>
              <li>
                <Link to="/processing"> Processing Orders</Link>
              </li>
              <li>
                <Link to="/completed"> Completed Orders</Link>
              </li>
              <li>
                <Link to="/declined"> Declined Orders</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#menu2"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="icofont-cart" />
              Products
            </a>
            <ul
              className="collapse list-unstyled"
              id="menu2"
              data-parent="#accordion"
            >
              <li>
                <Link to="/add-product">
                  <span>Add New Product</span>
                </Link>
              </li>
              <li>
                <Link to="/All_product">
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link to="/Deactivated">
                  <span>Deactivated Product</span>
                </Link>
              </li>
              <li>
                <Link to="/Product_Catalogs">
                  <span>Product Catalogs</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#menu3"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="icofont-user" />
              Customers
            </a>
            <ul
              className="collapse list-unstyled"
              id="menu3"
              data-parent="#accordion"
            >
              <li>
                <Link to="/customer-list">
                  <span>Customers List</span>
                </Link>
              </li>
              <li>
                <Link to="/customer-withdraws">
                  <span>Withdraws</span>
                </Link>
              </li>
              <li>
                <Link to="/customer-def-image">
                  <span>Customer Default Image</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#vendor"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="icofont-ui-user-group" />
              Vendors
            </a>
            <ul
              className="collapse list-unstyled"
              id="vendor"
              data-parent="#accordion"
            >
              <li>
                <Link to="/Vendor_list">
                  <span>Vendors List</span>
                </Link>
              </li>
              <li>
                <Link to="/Vendor_withdraws">
                  <span>Withdraws</span>
                </Link>
              </li>
              <li>
                <Link to="/Vendor_subscription">
                  <span>Vendor Subscriptions</span>
                </Link>
              </li>
              <li>
                <Link to="/Default_background">
                  <span>Default Background</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#vendor1"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="icofont-verification-check" />
              Vendor Verifications
            </a>
            <ul
              className="collapse list-unstyled"
              id="vendor1"
              data-parent="#accordion"
            >
              <li>
                <Link to="/All_verifications">
                  <span>All Verifications</span>
                </Link>
              </li>
              <li>
                <Link to="/Pending_verifications">
                  <span>Pending Verifications</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/Subscription_plan"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-dollar-sign" />
              Vendor Subscription Plans
            </Link>
          </li>
          <li>
            <a
              href="#menu5"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-sitemap" />
              Manage Categories
            </a>
            <ul
              className="collapse list-unstyled
  "
              id="menu5"
              data-parent="#accordion"
            >
              <li className>
                <Link to="/Main">
                  <span>Main Category</span>
                </Link>
              </li>
              <li className>
                <Link to="/Sub">
                  <span>Sub Category</span>
                </Link>
              </li>
              <li className>
                <Link to="/Child">
                  <span>Child Category</span>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
          <Link to ="Bulk_product_upload"><i className="fas fa-upload" />Bulk Product Upload</Link>
          </li> */}
          <li>
            <a
              href="#menu4"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="icofont-speech-comments" />
              Product Discussion
            </a>
            <ul
              className="collapse list-unstyled"
              id="menu4"
              data-parent="#accordion"
            >
              <li>
                <a href="#ratings">
                  <span>Product Reviews</span>
                </a>
              </li>
              <li>
                <a href="#comments">
                  <span>Comments</span>
                </a>
              </li>
              <li>
                <a href="#reports">
                  <span>Reports</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/Set_coupons"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-percentage" />
              Set Coupons
            </Link>
          </li>
          <li>
            <a
              href="#blog"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-newspaper" />
              Blog
            </a>
            <ul
              className="collapse list-unstyled"
              id="blog"
              data-parent="#accordion"
            >
              <li>
                <a href="#blog/category">
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="#blog">
                  <span>Posts</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#msg"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-newspaper" />
              Messages
            </a>
            <ul
              className="collapse list-unstyled"
              id="msg"
              data-parent="#accordion"
            >
              <li>
                <Link to="/Ticket">
                  <span>Tickets</span>
                </Link>
              </li>
              <li>
                <Link to="/Disputes">
                  <span>Disputes</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#general"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-cogs" />
              General Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="general"
              data-parent="#accordion"
            >
              <li>
                <Link to="Logo">
                  <span>Logo</span>
                </Link>
              </li>
              <li>
                <Link to="Favicon">
                  <span>Favicon</span>
                </Link>
              </li>
              <li>
                <Link to="/Loaders">
                  <span>Loader</span>
                </Link>
              </li>
              <li>
                <Link to="Shipping_methods">
                  <span>Shipping Methods</span>
                </Link>
              </li>
              <li>
                <Link to="Packagings">
                  <span>Packagings</span>
                </Link>
              </li>
              <li>
                <Link to="Pickup_locations">
                  <span>Pickup Locations</span>
                </Link>
              </li>
              <li>
                <Link to="Website_contents">
                  <span>Website Contents</span>
                </Link>
              </li>
              <li>
                <Link to="G_Footer">
                  <span>Footer</span>
                </Link>
              </li>

              <li>
                <Link to="Popup_banner">
                  <span>Popup Banner</span>
                </Link>
              </li>
              <li>
                <Link to="Error_banner">
                  <span>Error Banner</span>
                </Link>
              </li>
              <li>
                <Link to="Website_maintenance">
                  <span>Website Maintenance</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#homepage"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-edit" />
              Home Page Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="homepage"
              data-parent="#accordion"
            >
              <li>
                <Link to="/Slider">
                  <span>Sliders</span>
                </Link>
              </li>
              <li>
                <Link to="/service">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/RightSidebanner1">
                  <span>Right Side Banner1</span>
                </Link>
              </li>
              <li>
                <a href="#page-settings/big-save">
                  <span>Right Side Banner2</span>
                </a>
              </li>
              <li>
                <a href="#top/small/banner">
                  <span>Top Small Banners</span>
                </a>
              </li>
              <li>
                <a href="#large/banner">
                  <span>Large Banners</span>
                </a>
              </li>
              <li>
                <a href="#bottom/small/banner">
                  <span>Bottom Small Banners</span>
                </a>
              </li>
              <li>
                <a href="#review">
                  <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="#partner">
                  <span>Partners</span>
                </a>
              </li>
              <li>
                <a href="#page-settings/customize">
                  <span>Home Page Customization</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#menu"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-file-code" />
              Menu Page Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="menu"
              data-parent="#accordion"
            >
              <li>
                <a href="#faq">
                  <span>FAQ Page</span>
                </a>
              </li>
              <li>
                <a href="#page-settings/contact">
                  <span>Contact Us Page</span>
                </a>
              </li>
              <li>
                <a href="#page">
                  <span>Other Pages</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#emails"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-at" />
              Email Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="emails"
              data-parent="#accordion"
            >
              <li>
                <a href="#email-templates">
                  <span>Email Template</span>
                </a>
              </li>
              <li>
                <a href="#email-config">
                  <span>Email Configurations</span>
                </a>
              </li>
              <li>
                <a href="#groupemail">
                  <span>Group Email</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#payments"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-file-code" />
              Payment Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="payments"
              data-parent="#accordion"
            >
              {/*  <li><Link to ="Payment_information"><span>Payment Information</span></Link></li> */}
              <li>
                <Link to="Payment_information">
                  <span>Payment Gateways</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#Shipping"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-file-code" />
              Shipping Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="Shipping"
              data-parent="#accordion"
            >
              <li>
                <Link to="Shiping_gateway">
                  <span>Shiping Gateways</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#socials"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-paper-plane" />
              Social Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="socials"
              data-parent="#accordion"
            >
              <li>
                <Link to="/social-links">
                  <span>Social Links</span>
                </Link>
              </li>
              {/* <li><a href="#social/facebook"><span>Facebook Login</span></a></li>
              <li><a href="#social/google"><span>Google Login</span></a></li> */}
            </ul>
          </li>
          <li>
            <a
              href="#langs"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-language" />
              Language Settings
            </a>
            <ul
              className="collapse list-unstyled"
              id="langs"
              data-parent="#accordion"
            >
              <li>
                <a href="#languages">
                  <span>Website Language</span>
                </a>
              </li>
              <li>
                <a href="#adminlanguages">
                  <span>Admin Panel Language</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#seoTools"
              className="accordion-toggle wave-effect waves-effect waves-button"
              data-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fas fa-wrench" />
              SEO Tools
            </a>
            <ul
              className="collapse list-unstyled"
              id="seoTools"
              data-parent="#accordion"
            >
              <li>
                <a href="#products/popular/30">
                  <span>Popular Products</span>
                </a>
              </li>
              <li>
                <a href="#seotools/analytics">
                  <span>Google Analytics</span>
                </a>
              </li>
              <li>
                <a href="#seotools/keywords">
                  <span>Website Meta Keywords</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="Manage_staff"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-user-secret" />
              Manage Staffs
            </Link>
          </li>
          <li>
            <a
              href="#subscribers"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-users-cog mr-2" />
              Subscribers
            </a>
          </li>
          <li>
            <Link
              to="Manage_roles"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-user-tag" />
              Manage Roles
            </Link>
          </li>
          <li>
            <a
              href="#cache/clear"
              className=" wave-effect waves-effect waves-button"
            >
              <i className="fas fa-sync" />
              Clear Cache
            </a>
          </li>
          {/*<li>*/}
          {/*    <a href="#sactive" class="accordion-toggle wave-effect" data-toggle="collapse" aria-expanded="false">*/}
          {/*        <i class="fas fa-cog"></i>System Activation*/}
          {/*    </a>*/}
          {/*    <ul class="collapse list-unstyled" id="sactive" data-parent="#accordion">*/}
          {/*        <li><a href="#activation"> Activation</a></li>*/}
          {/*        <li><a href="#generate/backup"> Generate Backup</a></li>*/}
          {/*    </ul>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </>
  );
}

export default SideNav;
