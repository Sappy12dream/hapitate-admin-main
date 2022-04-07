import React,{useEffect,useState} from "react";
import Layout from "../../Component/layout/Layout";
import { Link, Redirect } from 'react-router-dom';
import { Vendorlist } from "../../api";
import ApiService from "../../services/api.service";
// import "./allverification.css";
const All_verifications=({authorized})=>{
  const [Vendor, setVendor] = useState([])
  async function getAllVendor() {
      try {
          const Vendor = await ApiService.get(Vendorlist.GET)
          console.log(Vendor.data)
          setVendor(Vendor.data)
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {

      getAllVendor()
  }, [])

    return <Layout>
      <div className="content-area">
    <div className="mr-breadcrumb">
        <div className="row">
            <div className="col-lg-12">
                <h4 className="heading">Vendor Verifications</h4>
                <ul className="links">
                    <li>
                        <a href="admin">Dashboard </a>
                    </li>
                    <li><a href="javascript:;">Vendor Verifications</a></li>
                    <li>
                        <a href="admin/verificatons">All Verifications</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="product-area">
        <div className="row">
            <div className="col-lg-12">
                <div className="mr-table allproduct">
                    <div className="alert alert-success validation" style={{display: 'none'}}>
                        <button type="button" className="close alert-close"><span>×</span></button>
                        <p className="text-left" />
                    </div>
                    <div className="table-responsiv">
                        <div id="geniustable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                            <div className="row btn-area">
                                <div className="col-sm-4">
                                    <div className="dataTables_length" id="geniustable_length"><label>Show <select name="geniustable_length" aria-controls="geniustable" className="custom-select custom-select-sm form-control form-control-sm">
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select> entries</label></div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="geniustable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="geniustable" /></label></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{width: '100%'}}>
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '213px'}}>Vendor Name</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '239px'}}>Vendor Email</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '197px'}}>Phone</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '198px'}}>Status</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '300px'}}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                        {
                                                         Vendor?.results?.map((data, i) => {
                                                            return (<tr role="row" className="odd">
                                                            <td tabIndex={0}><Link to={`/Vendor-details/${data.id}`} target="_blank">{data.name}</Link></td>
                                                            <td>{data.email}</td>
                                                            <td>{data.phone}</td>
                                                            <td>
                                                                <div className="action-list"><select className="process select vendor-droplinks drop-success" style={{display: 'none'}}>
                                                                        <option value="admin/verificatons/status/4/Pending" selected>Pending</option>
                                                                        <option value="admin/verificatons/status/4/Verified" selected>Verified</option>
                                                                        <option value="admin/verificatons/status/4/Declined">Declined</option>
                                                                    </select>
                                                                    <div className="nice-select process select vendor-droplinks drop-success" tabIndex={0}><span className="current">Verified</span>
                                                                        <ul className="list">
                                                                            <li data-value="admin/verificatons/status/4/Pending" className="option">Pending</li>
                                                                            <li data-value="admin/verificatons/status/4/Verified" className="option selected">Verified</li>
                                                                            <li data-value="admin/verificatons/status/4/Declined" className="option">Declined</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td style={{}}>
                                                                <div className="action-list">
                                                                  <a  className="set-gallery" data-toggle="modal" data-target="#setgallery"><i className="fas fa-paperclip" /> View Attachments</a>
                                                                  <a href="javascript:;" data-href="admin/verificatons/delete/4" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                                            </td>
                                                        </tr>)

                                                        }
                                                        )
                                                    }
                                          
                                            
                                        </tbody>
                                    </table>
                                    <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="assets/images/1564224329loading3.gif" /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="geniustable_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="geniustable_previous"><a href="#" aria-controls="geniustable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                                            <li className="paginate_button page-item active"><a href="#" aria-controls="geniustable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                                            <li className="paginate_button page-item next disabled" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="setgallery" tabIndex={-1} role="dialog" aria-labelledby="setgallery" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Attachments</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="top-area">
                    <div className="row">
                        <div className="col-sm-12 d-inline-block">
                            <h5> Details: <small id="detail">TEst</small></h5>
                        </div>
                    </div>
                </div>
                <div className="gallery-images">
                    <div className="selected-image">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="img gallery-img"><a className="img-popup" href="https://geniuscart.royalscripts.com/assets/images/attachments/1573723849Baby.tux-800x800.png"><img src="https://geniuscart.royalscripts.com/assets/images/attachments/1573723849Baby.tux-800x800.png" alt="gallery image" /></a></div>
                            </div>
                            <div className="col-sm-6">
                                <div className="img gallery-img"><a className="img-popup" href="https://geniuscart.royalscripts.com/assets/images/attachments/1573723849Baby.tux-800x800.png"><img src="https://geniuscart.royalscripts.com/assets/images/attachments/1573723849Baby.tux-800x800.png" alt="gallery image" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="col-sm-6 text-right">
                    <a id="verify-btn" href="https://geniuscart.royalscripts.com/admin/verificatons/status/4/Verified" className="btn btn-success f-btn"> <i className="fas fa-check" /> Verify</a>
                </div>
                <div className="col-sm-6">
                    <a id="decline-btn" href="https://geniuscart.royalscripts.com/admin/verificatons/status/4/Declined" className="btn btn-danger f-btn"> <i className="fas fa-times" /> Decline</a>
                </div>
            </div>
        </div>
    </div>
</div>

    </Layout>
}

export default All_verifications;

