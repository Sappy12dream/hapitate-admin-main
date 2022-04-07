import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Default_background=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Vendor Store Default Background</h4>
        <ul className="links">
          <li>
            <a href="#admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Vendors</a>
          </li>
          <li>
            <a href="#admin/general-settings/contents">Vendor Store Default Background</a>
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
            <form action="#admin/general-settings/update/all" id="geniusform" method="POST" encType="multipart/form-data">
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
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Set Background *</h4>
                    <small>(This background will be displayed if vendor dosen't set his / her store background)</small>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group colorpicker-component cp colorpicker-element">
                      <input type="text" className="input-field color-field" name="vendor_color" defaultValue="#666666" />
                      <span className="input-group-addon"><i style={{backgroundColor: 'rgb(102, 102, 102)'}} /></span>
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
export default Default_background;