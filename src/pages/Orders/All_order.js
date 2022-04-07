import React, { useEffect, useState } from "react";
import Layout from "../../Component/layout/Layout";
import { Link, Redirect } from 'react-router-dom';
import { orders } from "../../api"
import ApiService from "../../services/api.service";
const All_orders=({authorized})=>{
  const [Order, setOrder] = useState([])
  async function getAllList() {
    try {
      const res = await ApiService.get(orders.GET)
      console.log(res.data)
      setOrder(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllList()
  }, [])
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>

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
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '256px'}}>Customer Email</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '160px'}}>Order Number</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '106px'}}>Total Qty</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '114px'}}>Total Cost</th>
                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '136px'}}>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                            Order.map((data, i) => {
                              return (<tr role="row" className="odd">
                              <td tabIndex={0}>{data.user.email}</td>
                              <td><a href="#/admin/order/823/invoice">{data.id}</a></td>
                              <td>{data.TotalProduct}</td>
                              <td>Rs.{data.Totalcost}</td>
                              <td>
                                <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                  <div className="action-list"><Link to={`/order-details/${data.id}`}> <i className="fas fa-eye" /> Details</Link>
                                  <a href="javascript:;" className="send" data-email="user@gmail.com" data-toggle="modal" data-target="#vendorform"><i className="fas fa-envelope" /> Send</a>
                                  <a href="javascript:;" data-href="#/admin/order/823/track" className="track" data-toggle="modal" data-target="#modal1"><i className="fas fa-truck" /> Track Order</a>
                                  <a href="javascript:;" data-href="#/admin/order/edit/823" className="delivery" data-toggle="modal" data-target="#modal1"><i className="fas fa-dollar-sign" /> Delivery Status</a></div>
                                </div>
                              </td>
                            </tr>)

                            }
                            )
                          }
                      
                      
                    </tbody>
                  </table>
                  <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="#/assets/images/1564224329loading3.gif" /></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 802 entries</div>
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
                      <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={7} tabIndex={0} className="page-link">81</a></li>
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
export default All_orders;