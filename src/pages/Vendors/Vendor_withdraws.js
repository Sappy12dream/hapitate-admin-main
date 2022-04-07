import React, { useState } from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Vendor_withdraws=()=>{
  
  const [isActive, setActive] = useState("false");
  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const Toggle = () => {
    setActive(!isActive);
    
  };
  const Toggle1 = () => {
    setActive1(!isActive1);
    
  };
  const Toggle2 = () => {
    setActive2(!isActive2);
    
  };
    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Withdraws</h4>
        <ul className="links">
          <li>
            <a href="#admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Vendors</a>
          </li>
          <li>
            <a href="#admin/users/withdraws">Withdraws</a>
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
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '150px'}}>Email</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '113px'}}>Phone</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '57px'}}>Amount</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '55px'}}>Method</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '141px'}}>Withdraw Date</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '45px'}}>Status</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '139px'}}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>shaonvendor@gmail.com</td>
                        <td>3453453345453411</td>
                        <td>$57.5</td>
                        <td>Paypal</td>
                        <td>2021-02-02T12:58:08.000000Z</td>
                        <td>Pending</td>
                        <td>
                          <div className="action-list"><a onClick={Toggle} className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" /> Details</a>
                          <a onClick={Toggle1} data-toggle="modal" data-target="#confirm-delete"> <i className="fas fa-check" /> Accept</a>
                          <a onClick={Toggle2}  data-toggle="modal" data-target="#confirm-delete1"> <i className="fas fa-trash-alt" /> Reject</a></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="#assets/images/1564224329loading3.gif" /></div>
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
<div className={isActive? "modal fade" : "modal fade show"}className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="modal1" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="submit-loader" style={{display: 'none'}}>
                <img src="https://geniuscart.royalscripts.com/assets/images/1564224329loading3.gif" alt="" />
            </div>
            <div className="modal-header">
                <h5 className="modal-title">WITHDRAW DETAILS</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="content-area no-padding">
                    <div className="add-product-content1">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-description">
                                    <div className="body-area">
                                        <div className="table-responsive show-table">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>User ID#</th>
                                                        <td>30</td>
                                                    </tr>
                                                    <tr>
                                                        <th>User Name</th>
                                                        <td>
                                                            <a href="https://geniuscart.royalscripts.com/admin/user/30/show" target="_blank">Shaon</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Withdraw Amount</th>
                                                        <td>$57.5</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Withdraw Charge</th>
                                                        <td>$7.5</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Withdraw Process Date</th>
                                                        <td>02-Feb-2021</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Withdraw Status</th>
                                                        <td>Pending</td>
                                                    </tr>
                                                    <tr>
                                                        <th>User Email</th>
                                                        <td>shaonvendor@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <th>User Phone</th>
                                                        <td>3453453345453411</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Withdraw Method</th>
                                                        <td>Paypal</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Paypal Email:</th>
                                                        <td>abcd@mailinator.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div className={isActive1? "modal fade" : "modal fade show"} id="confirm-delete" tabIndex={-1} role="dialog" aria-labelledby="modal1" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header d-block text-center">
                <h4 className="modal-title d-inline-block">Accept Withdraw</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
                <p className="text-center">You are about to accept this Withdraw.</p>
                <p className="text-center">Do you want to proceed?</p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <a className="btn btn-success btn-ok" href="https://geniuscart.royalscripts.com/admin/vendors/withdraws/accept/5">Accept</a>
            </div>
        </div>
    </div>
</div>
<div className={isActive2? "modal fade" : "modal fade show"} id="confirm-delete1" tabIndex={-1} role="dialog" aria-labelledby="modal1" style={{display: 'none'}} aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header d-block text-center">
                <h4 className="modal-title d-inline-block">Reject Withdraw</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
                <p className="text-center">You are about to reject this Withdraw.</p>
                <p className="text-center">Do you want to proceed?</p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <a className="btn btn-danger btn-ok" href="https://geniuscart.royalscripts.com/admin/vendors/withdraws/reject/5">Reject</a>
            </div>
        </div>
    </div>
</div>
    </Layout>
}
export default Vendor_withdraws;