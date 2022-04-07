import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Declined=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }
    return <Layout>
      
  {/* Main Content Area Start */}
  <input type="hidden" id="headerdata" defaultValue="ORDER" />
  <div className="content-area">
    <div className="mr-breadcrumb">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="heading">All Orders</h4>
          <ul className="links">
            <li>
              <a href="#/admin">Dashboard </a>
            </li>
            <li>
              <a href="javascript:;">Orders</a>
            </li>
            <li>
              <a href="#/admin/orders">All Orders</a>
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
              <div className="gocover" style={{background: 'url(#/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
              <div id="geniustable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row btn-area"><div className="col-sm-4"><div className="dataTables_length" id="geniustable_length"><label>Show <select name="geniustable_length" aria-controls="geniustable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-4"><div id="geniustable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="geniustable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{width: '100%'}}>
                      <thead>
                        <tr role="row"><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '272px'}}>Customer Email</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '255px'}}>Order Number</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '175px'}}>Total Qty</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '187px'}}>Total Cost</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '219px'}}>Options</th></tr>
                      </thead>

                      {/* table entries start */}
                      <tbody>
    <tr role="row" className="odd">
        <td tabIndex={0}>user@gmail.com</td>
        <td><a href="#/admin/order/813/invoice">7vEXoEroBt</a></td>
        <td>1</td>
        <td>$110</td>
        <td>
            <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                <div className="action-list" style={{display: 'none'}}><a href="#/admin/order/813/show"> <i className="fas fa-eye" /> Details</a><a href="javascript:;" className="send" data-email="user@gmail.com" data-toggle="modal" data-target="#vendorform"><i className="fas fa-envelope" /> Send</a><a href="javascript:;" data-href="#/admin/order/813/track" className="track" data-toggle="modal" data-target="#modal1"><i className="fas fa-truck" /> Track Order</a><a href="javascript:;" data-href="#/admin/order/edit/813" className="delivery" data-toggle="modal" data-target="#modal1"><i className="fas fa-dollar-sign" /> Delivery Status</a></div>
            </div>
        </td>
    </tr>
   
  
</tbody>
</table>
<div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="./Genius Cart_files/1564224329loading3.gif" /></div>
</div>
</div>
<div className="row">
    <div className="col-sm-12 col-md-5">
        <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 792 entries</div>
    </div>
    <div className="col-sm-12 col-md-7">
        <div className="dataTables_paginate paging_simple_numbers" id="geniustable_paginate">
            <ul className="pagination">
                <li className="paginate_button page-item previous disabled" id="geniustable_previous"><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                <li className="paginate_button page-item active"><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                <li className="paginate_button page-item "><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                <li className="paginate_button page-item "><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                <li className="paginate_button page-item "><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                <li className="paginate_button page-item "><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                <li className="paginate_button page-item disabled" id="geniustable_ellipsis"><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                <li className="paginate_button page-item "><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={7} tabIndex={0} className="page-link">80</a></li>
                <li className="paginate_button page-item next" id="geniustable_next"><a href="#/admin/orders#" aria-controls="geniustable" data-dt-idx={8} tabIndex={0} className="page-link">Next</a></li>
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
  <div className="modal fade" id="confirm-delete1" tabIndex={-1} role="dialog" aria-labelledby="modal1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="submit-loader">
          <img src="./Genius Cart_files/1564224329loading3.gif" alt="" />
        </div>
        <div className="modal-header d-block text-center">
          <h4 className="modal-title d-inline-block">Update Status</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          <p className="text-center">You are about to update the order's Status.</p>
          <p className="text-center">Do you want to proceed?</p>
          <input type="hidden" id="t-add" defaultValue="#/admin/order/track/add" />
          <input type="hidden" id="t-id" defaultValue />
          <input type="hidden" id="t-title" defaultValue />
          <textarea className="input-field" placeholder="Enter Your Tracking Note (Optional)" id="t-txt" defaultValue={""} />
        </div>
        {/* Modal footer */}
        <div className="modal-footer justify-content-center">
          <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
          <a className="btn btn-success btn-ok order-btn">Proceed</a>
        </div>
      </div>
    </div>
  </div>
  <div className="sub-categori">
    <div className="modal" id="vendorform" tabIndex={-1} role="dialog" aria-labelledby="vendorformLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="vendorformLabel">Send Email</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-form">
                    <form id="emailreply">
                      <input type="hidden" name="_token" defaultValue="BVZIIYHIOdV3PIKy3HwikO9vcspSXJ2kZ9QFHvVZ" />
                      <ul>
                        <li>
                          <input type="email" className="input-field eml-val" id="eml" name="to" placeholder="Email *" defaultValue required />
                        </li>
                        <li>
                          <input type="text" className="input-field" id="subj" name="subject" placeholder="Subject *" required />
                        </li>
                        <li>
                          <textarea className="input-field textarea" name="message" id="msg" placeholder="Your Message *" required defaultValue={""} />
                        </li>
                      </ul>
                      <button className="submit-btn" id="emlsub" type="submit">Send Email</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="modal1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="submit-loader">
          <img src="./Genius Cart_files/1564224329loading3.gif" alt="" />
        </div>
        <div className="modal-header">
          <h5 className="modal-title" />
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* Main Content Area End */}

    </Layout>
}
export default Declined;