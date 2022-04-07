import React from 'react'
import Layout from '../../Component/layout/Layout'

function RightSidebanner1() {
  return <Layout>
      <div className="content-area">
    <div className="mr-breadcrumb">
        <div className="row">
            <div className="col-lg-12">
                <h4 className="heading">Right Side Banner1 </h4>
                <ul className="links">
                    <li>
                        <a href="https://geniuscart.royalscripts.com/admin">Dashboard </a>
                    </li>
                    <li>
                        <a href="javascript:;">Home Page Settings </a>
                    </li>
                    <li>
                        <a href="https://geniuscart.royalscripts.com/admin/page-settings/best-seller">Right Side Banner1 </a>
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
                        <div className="gocover" style={{background: 'url(https://geniuscart.royalscripts.com/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
                        <form id="geniusform"  style={{width:800}}>
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
                                        <h4 className="heading"> Top Banner Image *</h4>
                                        <small>(Preferred SIze: 285 X 410 Pixel)</small>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="img-upload">
                                        <div id="image-preview" className="img-preview" style={{background: 'url("data:image/gif'}}>
                                            <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                                            <input type="file" name="best_seller_banner" className="img-upload" id="image-upload" />
                                        </div>
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
                                    <input type="text" className="input-field" name="best_seller_banner_link" placeholder="Link" required defaultValue="http://google.com" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="left-area">
                                        <h4 className="heading"> Bottom Banner Image *</h4>
                                        <small>(Preferred SIze: 285 X 410 Pixel)</small>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="img-upload">
                                        <div id="image-preview" className="img-preview" style={{background: 'url(https://geniuscart.royalscripts.com/assets/images/1568889138banner2.jpg)'}}>
                                            <label htmlFor="image-upload" className="img-label" id="image-label"><i className="icofont-upload-alt" />Upload Image</label>
                                            <input type="file" name="best_seller_banner1" className="img-upload" id="image-upload" />
                                        </div>
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
                                    <input type="text" className="input-field" name="best_seller_banner_link1" placeholder="Link" required defaultValue="http://google.com" />
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

export default RightSidebanner1