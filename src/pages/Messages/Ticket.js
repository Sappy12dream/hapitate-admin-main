import React from 'react'
import Layout from '../../Component/layout/Layout'

function Ticket() {
  return <Layout>
      <div className="content-area">
    <div className="mr-breadcrumb">
        <div className="row">
            <div className="col-lg-12">
                <h4 className="heading">Tickets</h4>
                <ul className="links">
                    <li>
                        <a href="/admin">Dashboard </a>
                    </li>
                    <li>
                        <a href="javascript:;">Messages</a>
                    </li>
                    <li>
                        <a href="javascript:;">Tickets</a>
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
                                <div className="col-sm-4 text-right"><a className="add-btn" href="javascript:;" data-toggle="modal" data-target="#vendorform"><i className="fas fa-envelope" /> Add Ticket</a></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{width: '100%'}}>
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '152px'}}>Name</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '107px'}}>Subject</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '138px'}}>Message</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '142px'}}>Date</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '218px'}}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>Kucing Goreng</td>
                                                <td>mobkh</td>
                                                <td>eeeqe</td>
                                                <td>6 months ago</td>
                                                <td>
                                                    <div className="action-list"><a href="/admin/message/14"> <i className="fas fa-eye" /> Details</a><a href="javascript:;" data-href="/admin/message/14/delete" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>User</td>
                                                <td>Test</td>
                                                <td>test</td>
                                                <td>3 weeks ago</td>
                                                <td>
                                                    <div className="action-list"><a href="/admin/message/30"> <i className="fas fa-eye" /> Details</a><a href="javascript:;" data-href="/admin/message/30/delete" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>User</td>
                                                <td>Test2</td>
                                                <td>Lorem Ipsum</td>
                                                <td>1 week ago</td>
                                                <td>
                                                    <div className="action-list"><a href="/admin/message/31"> <i className="fas fa-eye" /> Details</a><a href="javascript:;" data-href="/admin/message/31/delete" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="/assets/images/1564224329loading3.gif" /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 3 of 3 entries</div>
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

  </Layout>
}

export default Ticket