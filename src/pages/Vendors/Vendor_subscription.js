import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Vendor_subscription=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Vendor Subscriptions</h4>
        <ul className="links">
          <li>
            <a href="#admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Vendors</a>
          </li>
          <li>
            <a href="#admin/vendors/subs">Vendor Subscriptions</a>
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
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '140px'}}>Vendor Name</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '70px'}}>Plan</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '85px'}}>Method</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '169px'}}>Transcation ID</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '149px'}}>Purchase Time</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '123px'}}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Blengo Bluster</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>4 days ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/233" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>2133</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>5 days ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/232" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Mohit</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>1 week ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/231" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>77777777</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>1 week ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/230" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>test</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/228" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>Haji</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/227" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Nabil</td>
                        <td>Premium</td>
                        <td>Razorpay</td>
                        <td>pay_IbUFMRuklJGv0t</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/226" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>Nabil</td>
                        <td>Standard</td>
                        <td>Razorpay</td>
                        <td>pay_IbU5hmEgMZOdcc</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/225" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Nabil</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/223" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>Removed</td>
                        <td>Basic</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>3 weeks ago</td>
                        <td>
                          <div className="action-list"><a data-href="#admin/vendors/sub/222" className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="#assets/images/1564224329loading3.gif" /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 93 entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="dataTables_paginate paging_simple_numbers" id="geniustable_paginate">
                    <ul className="pagination">
                      <li className="paginate_button page-item previous disabled" id="geniustable_previous"><a href="#" aria-controls="geniustable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                      <li className="paginate_button page-item active"><a href="#" aria-controls="geniustable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                      <li className="paginate_button page-item disabled" id="geniustable_ellipsis"><a href="#" aria-controls="geniustable" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={7} tabIndex={0} className="page-link">10</a></li>
                      <li className="paginate_button page-item next" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={8} tabIndex={0} className="page-link">Next</a></li>
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
    </Layout>
}
export default Vendor_subscription;