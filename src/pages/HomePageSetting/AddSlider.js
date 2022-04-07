import React, { Component, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { useHistory } from "react-router-dom";
import { Button, Container, Modal } from 'react-bootstrap';
import ApiService from '../../services/api.service'
import { AddSliders } from '../../api'
import Layout from '../../Component/layout/Layout'

function AddSlider() {
    const temp = {
        title_text: "",
        title_font_size: "",
        title_font_color: "",
        title_animation: "",
        subtitle_text: "",
        subtitle_font_size: "",
        subtitle_font_color: "",
        subtitle_animation: "",
        desc_text: "",
        desc_font_size: "",
        desc_font_color: "",
        desc_animation: "",
        link: "",
        text_position: "",
      }
    
      const [values, setValues] = useState(temp)
      const history = useHistory()
    
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
        formData.append('title_text', values.title_text)
        formData.append('title_font_size', values.title_font_size)
        formData.append('title_font_color', values.title_font_color)
        formData.append('title_animation', values.title_animation)
        formData.append('subtitle_text', values.subtitle_text)
        formData.append('subtitle_font_size', values.subtitle_font_size)
        formData.append('subtitle_font_color', values.subtitle_font_color)
        formData.append('subtitle_animation', values.subtitle_animation)
        formData.append('desc_font_color', values.desc_font_color)
        formData.append('desc_text', values.desc_text)
        formData.append('desc_font_size', values.desc_font_size)
        formData.append('desc_animation', values.desc_animation)
        formData.append('link', values.link)
        formData.append('text_position', values.text_position)
        
        const res = await ApiService.post(AddSliders.POST, formData)
          .then((response) => {
            console.log(response)
            if (response.status == 201) {
             
              toast.success("Slider Added Successfully");
    
    
    
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
        <h4 className="heading">Add Slider <a className="add-btn" href="/slider"><i className="fas fa-arrow-left" /> Back</a></h4>
        <ul className="links">
          <li>
            <a href="/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Home Page Settings</a>
          </li>
          <li>
            <a href="/admin/slider">Sliders</a>
          </li>
          <li>
            <a href="/admin/slider/create">Add Slider</a>
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
            <form id="geniusform" onSubmit={onSubmit} method="POST" style={{width:800}}>
              <div className="alert alert-success validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <p className="text-left" /> 
              </div>
              <div className="alert alert-danger validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <ul className="text-left">
                </ul>
              </div> 
              <div className="panel panel-default slider-panel">
                <div className="panel-heading text-center"><h3>Sub Title</h3></div>
                <div className="panel-body">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <label className="control-label" htmlFor="subtitle_text">Text*</label>
                      <textarea className="form-control" name="subtitle_text" id="subtitle_text" onChange={onChangeHandler} rows={5} placeholder="Enter Title Text" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="subtitle_size">Font Size *<span> (px)</span></label>
                          <input className="form-control" type="number" name="subtitle_font_size"onChange={onChangeHandler} defaultValue min={1} />
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="subtitle_color">Font Color *</label>
                          <div className="input-group colorpicker-component cp colorpicker-element">
                            <input type="text" name="subtitle_font_color" onChange={onChangeHandler} className="form-control cp colorpicker-element" />
                            <span className="input-group-addon"><i style={{backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="subtitle_anime">Animation *</label>
                          <select className="form-control" id="subtitle_anime" name="subtitle_animation" onChange={onChangeHandler}>
                            <option value="fadeIn">fadeIn</option>
                            <option value="fadeInDown">fadeInDown</option>
                            <option value="fadeInLeft">fadeInLeft</option>
                            <option value="fadeInRight">fadeInRight</option>
                            <option value="fadeInUp">fadeInUp</option>
                            <option value="flip">flip</option>
                            <option value="flipInX">flipInX</option>
                            <option value="flipInY">flipInY</option>
                            <option value="slideInUp">slideInUp</option>
                            <option value="slideInDown">slideInDown</option>
                            <option value="slideInLeft">slideInLeft</option>
                            <option value="slideInRight">slideInRight</option>
                            <option value="rollIn">rollIn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default slider-panel">
                <div className="panel-heading text-center"><h3>Title</h3></div>
                <div className="panel-body">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <label className="control-label" htmlFor="title_text">Text*</label>
                      <textarea className="form-control" name="title_text" id="title_text" rows={5} placeholder="Enter Title Text" onChange={onChangeHandler} defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="title_size">Font Size *<span> (px)</span></label>
                          <input className="form-control" type="number" name="title_font_size"  onChange={onChangeHandler} defaultValue min={1} />
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="title_color">Font Color *</label>
                          <div className="input-group colorpicker-component cp colorpicker-element">
                            <input type="text" name="title_font_color" onChange={onChangeHandler} className="form-control cp colorpicker-element" />
                            <span className="input-group-addon"><i style={{backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="title_anime">Animation *</label>
                          <select className="form-control" id="title_anime" name="title_animation" onChange={onChangeHandler} >
                            <option value="fadeIn">fadeIn</option>
                            <option value="fadeInDown">fadeInDown</option>
                            <option value="fadeInLeft">fadeInLeft</option>
                            <option value="fadeInRight">fadeInRight</option>
                            <option value="fadeInUp">fadeInUp</option>
                            <option value="flip">flip</option>
                            <option value="flipInX">flipInX</option>
                            <option value="flipInY">flipInY</option>
                            <option value="slideInUp">slideInUp</option>
                            <option value="slideInDown">slideInDown</option>
                            <option value="slideInLeft">slideInLeft</option>
                            <option value="slideInRight">slideInRight</option>
                            <option value="rollIn">rollIn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default slider-panel">
                <div className="panel-heading text-center"><h3>Description</h3></div>
                <div className="panel-body">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <label className="control-label" htmlFor="details_text">Text*</label>
                      <textarea className="form-control" name="desc_text" id="details_text" onChange={onChangeHandler} rows={5} placeholder="Enter Title Text" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="details_size">Font Size *<span> (px)</span></label>
                          <input className="form-control" type="number" name="desc_font_size" onChange={onChangeHandler} defaultValue min={1} />
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="details_color">Font Color *</label>
                          <div className="input-group colorpicker-component cp colorpicker-element">
                            <input type="text" name="desc_font_color" onChange={onChangeHandler} className="form-control cp colorpicker-element" />
                            <span className="input-group-addon"><i style={{backgroundColor: 'rgb(0, 0, 0)'}} /></span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <label className="control-label" htmlFor="details_anime">Animation *</label>
                          <select className="form-control" id="details_anime" name="desc_animation" onChange={onChangeHandler} >
                            <option value="fadeIn">fadeIn</option>
                            <option value="fadeInDown">fadeInDown</option>
                            <option value="fadeInLeft">fadeInLeft</option>
                            <option value="fadeInRight">fadeInRight</option>
                            <option value="fadeInUp">fadeInUp</option>
                            <option value="flip">flip</option>
                            <option value="flipInX">flipInX</option>
                            <option value="flipInY">flipInY</option>
                            <option value="slideInUp">slideInUp</option>
                            <option value="slideInDown">slideInDown</option>
                            <option value="slideInLeft">slideInLeft</option>
                            <option value="slideInRight">slideInRight</option>
                            <option value="rollIn">rollIn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                    <h4 className="heading">Current Featured Image *</h4>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img-upload full-width-img">
                    <div id="image-preview" className="img-preview" style={{background: 'url(/assets/admin/images/upload.png)'}}>
                      <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                      <input type="file" name="image" className="img-upload" id="image-upload" onChange={onChangeHandler} />
                    </div>
                    <p className="text">Prefered Size: (1920x800) or Square Sized Image</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                    <h4 className="heading">Link *</h4>
                  </div>
                </div>
                <div className="col-lg-7">
                  <input type="text" className="input-field" name="link" placeholder="Link" onChange={onChangeHandler} required defaultValue />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                    <h4 className="heading">Text Position*</h4>
                  </div>
                </div>
                <div className="col-lg-7">
                  <select name="text_position" onChange={onChangeHandler} required>
                    <option value>Select Position</option>
                    <option value="Left">Left</option>
                    <option value="Center">Center</option>
                    <option value="Right">Right</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="left-area">
                  </div>
                </div>
                <div className="col-lg-7">
                  <button className="addProductSubmit-btn" type="submit">Create Slider</button>
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

export default AddSlider