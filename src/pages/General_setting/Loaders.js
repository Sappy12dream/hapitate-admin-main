import Layout from "../../Component/layout/Layout";
import {Addadminloaders, adminloaders, Editadminloaders, subCategory } from "../../api";
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";

const Loaders = () => {


  const temp = {
    Status: " ",
    
  }

  const [values, setValues] = useState(temp)

  const onChangeHandler = (e) => {
    console.log(e)
    let { type, name, value } = e.target
    console.log(e.target, name, value, type)
    if (type === 'file') {

      return setValues({ ...values, Website_Loader: e.target.files[0] })

    }
    setValues({ ...values, [name]: value })
  }
  console.log(values, 'values')
  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const formData = new FormData()
    formData.append('Website_Loader', values.Website_Loader, values.Website_Loader.name)
    formData.append('Admin_Loader', values.Admin_Loader, values.Admin_Loader.name)
    formData.append('Status', values.Status)

    const res = await ApiService.post(Addadminloaders.POST, formData)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
          
          toast.success(" Loader changed Successfully");



        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };


  return <Layout>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Website Loader</h4>
            <ul className="links">
              <li>
                <a href="a/admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">General Settings</a>
              </li>
              <li>
                <a href="a/admin/general-settings/loader">Website Loader</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="add-logo-area">
        <div className="alert alert-success validation" style={{ display: 'none' }}>
          <button type="button" className="close alert-close"><span>×</span></button>
          <p className="text-left" />
        </div>
        <div className="alert alert-danger validation" style={{ display: 'none' }}>
          <button type="button" className="close alert-close"><span>×</span></button>
          <ul className="text-left">
          </ul>
        </div>
        <div className="gocover" style={{ background: 'url(a/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)' }} />
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="special-box">
              <div className="heading-area">
                <h4 className="title">
                  Website Loader
                </h4>
              </div>
              <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
                <input type="hidden" name="_token" defaultValue="EQe5MF7u0LektEgWn1hg6NGv2UmPvYFIuO9AwYHU" />
                <div className="alert alert-success validation" style={{ display: 'none' }}>
                  <button type="button" className="close alert-close"><span>×</span></button>
                  <p className="text-left" />
                </div>
                <div className="alert alert-danger validation" style={{ display: 'none' }}>
                  <button type="button" className="close alert-close"><span>×</span></button>
                  <ul className="text-left">
                  </ul>
                </div>
                <div className="loader-switcher">
                  <h4 className="title" style={{ marginLeft: '80px' }}>
                    Loader :
                  </h4>
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{ display: 'none' }}>
                      <option data-val={1} value="a/admin/general-settings/loader/1" selected>Activated</option>
                      <option data-val={0} value="a/admin/general-settings/loader/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="a/admin/general-settings/loader/1" className="option selected">Activated</li>
                        <li data-value="a/admin/general-settings/loader/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="currrent-logo">
                  <h4 className="title">
                    Current Loader :
                  </h4>
                  <img src="a/assets/images/1564224328loading3.gif" alt="" />
                </div>
                <div className="set-logo">
                  <h4 className="title">
                    Set New Loader :
                  </h4>
                  <input className="img-upload1" type="file" name="loader" />
                </div>
                <div className="submit-area mb-4">
                  <button type="submit" className="submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="special-box">
              <div className="heading-area">
                <h4 className="title">
                  Admin Loader
                </h4>
              </div>
              <form className="uplogo-form" id="geniusform" action="a/admin/general-settings/update/all" method="POST" encType="multipart/form-data">
                <input type="hidden" name="_token" defaultValue="EQe5MF7u0LektEgWn1hg6NGv2UmPvYFIuO9AwYHU" />
                <div className="alert alert-success validation" style={{ display: 'none' }}>
                  <button type="button" className="close alert-close"><span>×</span></button>
                  <p className="text-left" />
                </div>
                <div className="alert alert-danger validation" style={{ display: 'none' }}>
                  <button type="button" className="close alert-close"><span>×</span></button>
                  <ul className="text-left">
                  </ul>
                </div>
                <div className="loader-switcher">
                  <h4 className="title" style={{ marginLeft: '80px' }}>
                    Loader :
                  </h4>
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{ display: 'none' }}>
                      <option data-val={1} value="a/admin/general-settings/admin/loader/1" selected>Activated</option>
                      <option data-val={0} value="a/admin/general-settings/admin/loader/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="a/admin/general-settings/admin/loader/1" className="option selected">Activated</li>
                        <li data-value="a/admin/general-settings/admin/loader/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="currrent-logo">
                  <h4 className="title">
                    Current Loader :
                  </h4>
                  <img src="a/assets/images/1564224329loading3.gif" alt="" />
                </div>
                <div className="set-logo">
                  <h4 className="title">
                    Set New Loader :
                  </h4>
                  <input className="img-upload1" type="file" name="admin_loader" />
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

export default Loaders;