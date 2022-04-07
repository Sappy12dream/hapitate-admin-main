import Layout from "../../Component/layout/Layout";
import React, { Component, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { useHistory } from "react-router-dom";
import { Button, Container, Modal } from 'react-bootstrap';
import ApiService from '../../services/api.service'
import {Addpopupbanners} from '../../api'

const Popup_banner =({authorized})=>{
  const temp = {
    popup_title: "",
    popup_text: "",
    is_active: "",
  }

  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    console.log(e)
    let { type, name, value } = e.target
    console.log(e.target, name, value, type)
    if (type === 'file') {

      return setValues({ ...values, background_image: e.target.files[0] })

    }
    setValues({ ...values, [name]: value })
  }
  console.log(values, 'values')
  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const formData = new FormData()
    formData.append('background_image', values.background_image, values.background_image.name)
    formData.append('popup_title', values.popup_title)
    formData.append('popup_text', values.popup_text)
    formData.append('is_active', values.is_active)

    const res = await ApiService.post(Addpopupbanners.POST, formData)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
         
          toast.success("Popup Banner Updated Successfully");



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
                <h4 className="heading">Popup Banner</h4>
                <ul className="links">
                    <li>
                        <a href="/admin">Dashboard </a>
                    </li>
                    <li>
                        <a href="javascript:;">General Settings</a>
                    </li>
                    <li>
                        <a href="/admin/general-settings/popup">Popup Banner</a>
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
                        <div className="gocover" style={{background: 'url(/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
                        <form onSubmit={onSubmit} method="POST"style={{width:900}}>
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
                                            Popup Banner
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="action-list">
                                        <select className="process select droplinks drop-success" style={{display: 'none'}} name="is_active" onChange={onChangeHandler}>
                                            <option value={1}  selected>Activated</option>
                                            <option value={0} >Deactivated</option>
                                        </select>
                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                            <ul className="list">
                                                <li data-value="/admin/general-settings/popup/1" className="option selected">Activated</li>
                                                <li data-value="/admin/general-settings/popup/0" className="option">Deactivated</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3">
                                    <div className="left-area">
                                        <h4 className="heading">Current Background Image *</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-upload full-width-img">
                                        <div id="image-preview" className="img-preview" style={{background: 'url(/assets/images/1584934329adv-banner.jpg)'}}>
                                            <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                                            <input type="file" name="background_image" className="img-upload" id="image-upload"  onChange={onChangeHandler} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row justify-content-center">
                                <div className="col-lg-3">
                                    <div className="left-area">
                                        <h4 className="heading">Popup Title *
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="input-field" placeholder="Popup Title" name="popup_title"  onChange={onChangeHandler} defaultValue="NEWSLETTER" required />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3">
                                    <div className="left-area">
                                        <h4 className="heading">
                                            Popup Text *
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tawk-area">
                                        <textarea className="input-field" name="popup_text" placeholder="Popup Text"  onChange={onChangeHandler} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro ipsa nulla, alias, ab minus."} />
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

export default Popup_banner;