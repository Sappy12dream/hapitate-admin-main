import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Favicon =({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>

<div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Website Favicon</h4>
        <ul className="links">
          <li>
            <a href="a/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">General Settings</a>
          </li>
          <li>
            <a href="a/admin/general-settings/favicon">Website Favicon</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="add-logo-area">
    <div className="gocover" style={{background: 'url(a/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="alert alert-success validation" style={{display: 'none'}}>
          <button type="button" className="close alert-close"><span>×</span></button>
          <p className="text-left" />
        </div>
        <div className="alert alert-danger validation" style={{display: 'none'}}>
          <button type="button" className="close alert-close"><span>×</span></button>
          <ul className="text-left">
          </ul>
        </div>
        <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
          <input type="hidden" name="_token" defaultValue="EQe5MF7u0LektEgWn1hg6NGv2UmPvYFIuO9AwYHU" />
          <div className="currrent-logo">
            <h4 className="title">
              Current Favicon :
            </h4>
            <img src="a/assets/images/1571567283favicon.png" alt="" />
          </div>
          <div className="set-logo">
            <h4 className="title">
              Set New Favicon :
            </h4>
            <input className="img-upload1" type="file" name="favicon" />
          </div>
          <div className="submit-area">
            <button type="submit" className="submit-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </Layout>
}

export default Favicon;