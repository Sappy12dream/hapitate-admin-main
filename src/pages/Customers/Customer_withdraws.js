import React from "react";
import Layout from "../../Component/layout/Layout";
import "./Customer_withdraws.css"
import { Redirect } from 'react-router-dom';

const Customer_withdraws=({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }
    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Withdraws</h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Customers</a>
          </li>
          <li>
            <a href="#/admin/users/withdraws">Withdraws</a>
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
          </div>                    <div className="table-responsiv">
            <div id="geniustable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row btn-area"><div className="col-sm-4"><div className="dataTables_length" id="geniustable_length"><label>Show <select name="geniustable_length" aria-controls="geniustable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-4"><div id="geniustable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="geniustable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{width: '100%'}}>
                    <thead>
                      <tr role="row"><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '74px'}}>Email</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '82px'}}>Phone</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '100px'}}>Amount</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '97px'}}>Method</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '172px'}}>Withdraw Date</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '82px'}}>Status</th><th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '94px'}}>Actions</th></tr>
                    </thead>
                    <tbody><tr className="odd"><td valign="top" colSpan={7} className="dataTables_empty">No data available in table</td></tr></tbody></table><div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="#/assets/images/1564224329loading3.gif" /></div></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="geniustable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="geniustable_previous"><a href="#" aria-controls="geniustable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item next disabled" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={1} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
}
export default Customer_withdraws;