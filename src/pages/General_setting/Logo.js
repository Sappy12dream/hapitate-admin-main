import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Logo =({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Website Logo</h4>
        <ul className="links">
          <li>
            <a href="a/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">General Settings</a>
          </li>
          <li>
            <a href="a/admin/general-settings/logo">Website Logo</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="add-logo-area">
    <div className="gocover" style={{background: 'url(a/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-6">
        <div className="special-box bg-gray">
          <div className="heading-area">
            <h4 className="title">
              Header Logo
            </h4>
          </div>
          <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
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
            <div className="currrent-logo">
            <a href="#" className="header-logo-link">
                  <img src="./Assets/uploads/2021/06/143x48logo.png" alt="Hapitate" className="img-header-logo" width={143} height={48} />
                </a>
            </div>
            <div className="set-logo">
              <input className="img-upload1" type="file" name="logo" />
            </div>
            <div className="submit-area mb-4">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="special-box  bg-gray">
          <div className="heading-area">
            <h4 className="title">
              Footer Logo
            </h4>
          </div>
          <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
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
            <div className="currrent-logo">
              <img src="a/assets/images/1571567309footers.png" alt="" />
            </div>
            <div className="set-logo">
              <input className="img-upload1" type="file" name="footer_logo" />
            </div>
            <div className="submit-area mb-4">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="special-box  bg-gray">
          <div className="heading-area">
            <h4 className="title">
              Invoice Logo
            </h4>
          </div>
          <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
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
            <div className="currrent-logo">
              <img src="./Assets/uploads/2021/06/143x48logo.png" alt="" />
            </div>
            <div className="set-logo">
              <input className="img-upload1" type="file" name="invoice_logo" />
            </div>
            <div className="submit-area mb-4">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
}

export default Logo;