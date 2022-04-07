import React from "react";
import Layout from "../../Component/layout/Layout";
import "./Customer_def_image.css"
import { Redirect } from 'react-router-dom';

const Customer_def_image=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }
    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Customer Default Image </h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Customers </a>
          </li>
          <li>
            <a href="javascript:;">Customer Default Image </a>
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
            <form id="geniusform" action="#/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="J2crZtabOWeuGZpDJFFfOeagEWYBsYnDubN4r2f0" />
              <div className="alert alert-success validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <p className="text-left" /> 
              </div>
              <div className="alert alert-danger validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <ul className="text-left">
                </ul>
              </div>  
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                    <h4 className="heading"> Customer Image *</h4>
                    <small>(This image will be displayed if users do not upload profile photo)</small><br />
                    <small>(Preferred Size: 600 X 600 Pixel)</small>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img-upload">
                    <div id="image-preview" className="img-preview" style={{background: 'url(#/assets/images/1567655174profile.jpg)'}}>
                      <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                      <input type="file" name="user_image" className="img-upload" id="image-upload" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                  </div>
                </div>
                <div className="col-lg-7">
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
export default Customer_def_image;