import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Affilate_information =({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>

<div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Affialte Informations</h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">General Settings</a>
          </li>
          <li>
            <a href="#/admin/general-settings/affilate">Affialte Informations</a>
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
            <form action="#/admin/general-settings/update/all" id="geniusform" method="POST" encType="multipart/form-data">
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
                      Affilate Service
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/affilate/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/affilate/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/affilate/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/affilate/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Affilate Bonus(%)</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Write Your Site Title Here" name="affilate_charge" defaultValue={8} required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Current Featured Image *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-upload">
                    <div id="image-preview" className="img-preview" style={{background: 'url(#/assets/images/15587771131554048228onepiece.jpeg)'}}>
                      <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                      <input type="file" name="affilate_banner" className="img-upload" />
                    </div>
                  </div>
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

export default Affilate_information;