import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Payment_gateways=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Payment Informations</h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Payment Settings</a>
          </li>
          <li>
            <a href="#/admin/payment-informations">Payment Informations</a>
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
            <div className="gocover" style={{background: 'url(#/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
            <form action="#/admin/general-settings/update/payment" id="geniusform" method="POST" encType="multipart/form-data">
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
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Stripe
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/stripe/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/stripe/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/stripe/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/stripe/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Stripe Key *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Stripe Key" name="stripe_key" defaultValue="pk_test_UnU1Coi1p5qFGwtpjZMRMgJM" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Stripe Secret *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Stripe Secret" name="stripe_secret" defaultValue="sk_test_QQcg3vGsKRPlW6T3dXcNJsor" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Stripe Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="stripe_text" placeholder="Stripe Text" defaultValue={"Pay via your Credit Card."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Paypal
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/paypal/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/paypal/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/paypal/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/paypal/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paypal Email *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paypal Email" name="paypal_business" defaultValue="shaon143-facilitator-1@gmail.com" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paypal Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="paypal_text" placeholder="Paypal Text" defaultValue={"Pay via your PayPal account."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Instamojo
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/instamojo/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/instamojo/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/instamojo/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/instamojo/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Instamojo API Key *
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
                    <h4 className="heading">Instamojo Auth Token *
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
                    <h4 className="heading">Instamojo Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="instamojo_text" placeholder="Instamojo Text" defaultValue={"Pay via your Instamojo account."} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Instamojo Sandbox Check *
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
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Paystack
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/paystack/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/paystack/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/paystack/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/paystack/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paystack Public Key *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paystack Public Key" name="paystack_key" defaultValue="pk_test_162a56d42131cbb01932ed0d2c48f9cb99d8e8e2" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paystack Business Email *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paystack Business Email" name="paystack_email" defaultValue="junnuns@gmail.com" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paystack Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="paystack_text" placeholder="Paystack Text" defaultValue={"Pay via your Paystack account."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Paytm
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/paytm/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/paytm/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/paytm/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/paytm/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Merchant *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paytm Merchant" name="paytm_merchant" defaultValue="tkogux49985047638244" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Secret *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paytm Secret" name="paytm_secret" defaultValue="LhNGUUKE9xCQ9xY8" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Website *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paytm Website" name="paytm_website" defaultValue="WEBSTAGING" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Industry *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Paytm Industry" name="paytm_industry" defaultValue="Retail" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="paytm_text" placeholder="Paytm Text" defaultValue={"Pay via your Paytm account."} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Paytm Sandbox Check *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="switch">
                    <input type="checkbox" name="paytm_mode" defaultValue={1} defaultChecked />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Molly Payment
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/molly/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/molly/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/molly/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/molly/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Molly Key *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="molly_key" placeholder="Molly Key" required defaultValue={"test_5HcWVs9qc5pzy36H9Tu9mwAyats33J"} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Molly Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="molly_text" placeholder="Molly Text" required defaultValue={"Pay with Molly Payment."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Razorpay
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/razor/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/razor/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/razor/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/razor/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Razorpay Key *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="razorpay_key" placeholder="Razorpay Key" required defaultValue={"rzp_test_xDH74d48cwl8DF"} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Razorpay Secret *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="razorpay_secret" placeholder="Razorpay Key" required defaultValue={"cr0H1BiQ20hVzhpHfHuNbGri"} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Razorpay Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="razorpay_text" placeholder="Razorpay Text" required defaultValue={"Pay via your Razorpay account."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Guest Checkout
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/guest/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/guest/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/guest/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/guest/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Cash On Delivery
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/cod/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/cod/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/cod/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/cod/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Cash On Delivery Text *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea className="input-field" name="cod_text" placeholder="Cash On Delivery Text" defaultValue={"Pay with cash upon delivery."} />
                </div>
              </div>
              <hr />
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Currency Format *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <select name="currency_format" required>
                    <option value={0} selected>Before Price</option>
                    <option value={1}>After Price</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Withdraw Fee *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Withdraw Fee" name="withdraw_fee" defaultValue={5} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Withdraw Charge(%) *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Withdraw Charge(%)" name="withdraw_charge" defaultValue={5} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Tax(%) *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Tax(%)" name="tax" defaultValue={0} required />
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

export default Payment_gateways;