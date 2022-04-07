import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Website_maintenance =({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Website Maintenance</h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">General Settings</a>
          </li>
          <li>
            <a href="javascript:;">Website Maintenance</a>
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
                      Website Maintenance
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-danger" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/maintain/1">Activated</option>
                      <option data-val={0} value="#/admin/general-settings/maintain/0" selected>Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-danger" tabIndex={0}><span className="current">Deactivated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/maintain/1" className="option">Activated</li>
                        <li data-value="#/admin/general-settings/maintain/0" className="option selected">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Maintenance Text *
                      <p className="sub-heading">(In Any Language)</p>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tawk-area">
                    <div unselectable="on" style={{width: '100%'}}>
                      <div className=" nicEdit-panelContain" unselectable="on" style={{overflow: 'hidden', width: '100%', border: '1px solid rgb(204, 204, 204)', backgroundColor: 'rgb(239, 239, 239)'}}>
                        <div className=" nicEdit-panel" unselectable="on" style={{margin: '0px 2px 2px', zoom: 1, overflow: 'hidden'}}>
                          <div style={{float: 'left', marginTop: '2px', display: 'none'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-432px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-54px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-126px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-342px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-162px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-72px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-234px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-144px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-180px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-324px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', margin: '2px 1px 0px'}}>
                            <div className=" nicEdit-selectContain" unselectable="on" style={{width: '90px', height: '20px', cursor: 'pointer', overflow: 'hidden', opacity: '0.6'}}>
                              <div unselectable="on" style={{overflow: 'hidden', zoom: 1, border: '1px solid rgb(204, 204, 204)', paddingLeft: '3px', backgroundColor: 'rgb(255, 255, 255)'}}>
                                <div className=" nicEdit-selectControl" unselectable="on" style={{overflow: 'hidden', float: 'right', height: '18px', width: '16px', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-450px 0px'}} />
                                <div className=" nicEdit-selectTxt" unselectable="on" style={{overflow: 'hidden', float: 'left', width: '66px', height: '14px', marginTop: '1px', fontFamily: 'sans-serif', textAlign: 'center', fontSize: '12px'}}>Font&nbsp;Size...</div>
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', margin: '2px 1px 0px'}}>
                            <div className=" nicEdit-selectContain" unselectable="on" style={{width: '90px', height: '20px', cursor: 'pointer', overflow: 'hidden', opacity: '0.6'}}>
                              <div unselectable="on" style={{overflow: 'hidden', zoom: 1, border: '1px solid rgb(204, 204, 204)', paddingLeft: '3px', backgroundColor: 'rgb(255, 255, 255)'}}>
                                <div className=" nicEdit-selectControl" unselectable="on" style={{overflow: 'hidden', float: 'right', height: '18px', width: '16px', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-450px 0px'}} />
                                <div className=" nicEdit-selectTxt" unselectable="on" style={{overflow: 'hidden', float: 'left', width: '66px', height: '14px', marginTop: '1px', fontFamily: 'sans-serif', textAlign: 'center', fontSize: '12px'}}>Font&nbsp;Family...</div>
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', margin: '2px 1px 0px'}}>
                            <div className=" nicEdit-selectContain" unselectable="on" style={{width: '90px', height: '20px', cursor: 'pointer', overflow: 'hidden', opacity: '0.6'}}>
                              <div unselectable="on" style={{overflow: 'hidden', zoom: 1, border: '1px solid rgb(204, 204, 204)', paddingLeft: '3px', backgroundColor: 'rgb(255, 255, 255)'}}>
                                <div className=" nicEdit-selectControl" unselectable="on" style={{overflow: 'hidden', float: 'right', height: '18px', width: '16px', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-450px 0px'}} />
                                <div className=" nicEdit-selectTxt" unselectable="on" style={{overflow: 'hidden', float: 'left', width: '66px', height: '14px', marginTop: '1px', fontFamily: 'sans-serif', textAlign: 'center', fontSize: '12px'}}>Font&nbsp;Format...</div>
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-108px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div unselectable="on" style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" unselectable="on" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" unselectable="on" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-198px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-360px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-468px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-378px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-396px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-36px 0px'}} />
                              </div>
                            </div>
                          </div>
                          <div style={{float: 'left', marginTop: '2px'}}>
                            <div className=" nicEdit-buttonContain" style={{width: '20px', height: '20px', opacity: '0.6'}}>
                              <div className=" nicEdit-button-undefined" style={{backgroundColor: 'rgb(239, 239, 239)', border: '1px solid rgb(239, 239, 239)'}}>
                                <div className=" nicEdit-button" unselectable="on" style={{width: '18px', height: '18px', overflow: 'hidden', zoom: 1, cursor: 'pointer', backgroundImage: 'url("http://js.nicedit.com/nicEditIcons-latest.gif")', backgroundPosition: '-18px 0px'}} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{width: '100%', borderWidth: '0px 1px 1px', borderTopStyle: 'initial', borderRightStyle: 'solid', borderBottomStyle: 'solid', borderLeftStyle: 'solid', borderTopColor: 'initial', borderRightColor: 'rgb(204, 204, 204)', borderBottomColor: 'rgb(204, 204, 204)', borderLeftColor: 'rgb(204, 204, 204)', borderImage: 'initial', overflow: 'hidden auto'}}>
                      <div className=" nicEdit-main" contentEditable="true" style={{width: '416px', margin: '4px', minHeight: '200px', overflow: 'hidden'}}>
                        <div style={{textAlign: 'center'}}>
                          <font size={5}><br /></font>
                        </div>
                        <h1 style={{textAlign: 'center'}}>
                          <font size={6}>UNDER MAINTENANCE</font>
                        </h1>
                      </div>
                    </div><textarea className="nic-edit" name="maintain_text" required style={{display: 'none'}} defaultValue={"<div style=\"text-align: center;\"><font size=\"5\"><br></font></div><h1 style=\"text-align: center;\"><font size=\"6\">UNDER MAINTENANCE</font></h1>"} />
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

export default Website_maintenance;