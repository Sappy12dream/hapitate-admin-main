import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Shiping_gateway=({authorized})=>{
    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Shipping Gateways</h4>
        <ul className="links">
          <li>
            <a href="#admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Shipping Settings</a>
          </li>
          <li>
            <a href="#admin/payment-informations">Shipping Gateways</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="add-product-content1">
    <div className="row">
      <div className="col-lg-12">
        <div className="product-description">
          <div className="body-area">
            <div className="gocover" style={{background: 'url(#assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
            <form action="#admin/general-settings/update/payment" id="geniusform" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="EQe5MF7u0LektEgWn1hg6NGv2UmPvYFIuO9AwYHU" />
              <div className="alert alert-success validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <p className="text-left" />
              </div>
              <div className="alert alert-danger validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <ul className="text-left">
                </ul>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Ship Rocket
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#admin/general-settings/instamojo/1" selected>Activated</option>
                      <option data-val={0} value="#admin/general-settings/instamojo/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#admin/general-settings/instamojo/1" className="option selected">Activated</li>
                        <li data-value="#admin/general-settings/instamojo/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Ship Rocket API Key *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Instamojo API Key" name="instamojo_key" defaultValue="test_172371aa837ae5cad6047dc3052" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Ship Rocket Auth Token *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Instamojo Auth Token" name="instamojo_token" defaultValue="test_4ac5a785e25fc596b67dbc5c267" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Ship Rocket Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="instamojo_text" placeholder="Instamojo Text" defaultValue={" Ship rocketaccount."} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Ship Rocket Sandbox Check *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="switch">
                    <input type="checkbox" name="instamojo_sandbox" defaultValue={1} defaultChecked />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <hr />
              <h4 className="text-center">Vendor</h4>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Fixed Commission *
                    </h4>
                    <p className="sub-heading">Fixed Commission Charge(Product Price + Commission)</p>
                    <p className="sub-heading">(If you don't want to add any fixed commission, just set it to 0)</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Fixed Commission" name="fixed_commission" defaultValue={5} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Percentage Commission(%) *
                    </h4>
                    <p className="sub-heading">Percentage Commission Charge(Product Price + Commission(%))</p>
                    <p className="sub-heading">(If you don't want to add any percentage commission, just set it to 0)</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Percentage Commission" name="percentage_commission" defaultValue={5} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Shipping Information For Vendor *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="switch">
                    <input type="checkbox" name="vendor_ship_info" defaultValue={1} defaultChecked />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                  </div>
                </div>
                <div className="col-lg-6">
                  <button className="addProductSubmit-btn" type="submit">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
}

export default Shiping_gateway;