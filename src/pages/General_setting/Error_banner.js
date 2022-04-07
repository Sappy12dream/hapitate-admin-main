import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { Adderrorbanner } from "../../api";
const Error_banner =({authorized})=>{
  const temp = {
    
  }

  const [values, setValues] = useState(temp)

  const onChangeHandler = (e) => {
    console.log(e)
    let { type, name, value } = e.target
    console.log(e.target, name, value, type)
    if (type === 'file') {

      return setValues({ ...values, image: e.target.files[0] })

    }
    setValues({ ...values, [name]: value })
  }
  console.log(values, 'values')
  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const formData = new FormData()
    formData.append('image', values.image, values.image.name)
    

    const res = await ApiService.post(Adderrorbanner.POST, formData)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
          
          toast.success("Error Banner Changed Successfully");



        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Error Page Banner </h4>
        <ul className="links">
          <li>
            <a href="a/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Home Page Settings </a>
          </li>
          <li>
            <a href="javascript:;">Error Page Banner </a>
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
            <div className="gocover" style={{background: 'url(a/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
            <form id="geniusform" onSubmit={onSubmit} method="POST">
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
                    <h4 className="heading"> Banner Image *</h4>
                    <small>(Preferred Size: 600 X 600 Pixel)</small>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img-upload">
                    <div id="image-preview" className="img-preview" style={{background: 'url(a/assets/images/1566878455404.png)'}}>
                      <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                      <input type="file" name="image" className="img-upload" id="image-upload" onChange={onChangeHandler}/>
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

export default Error_banner;