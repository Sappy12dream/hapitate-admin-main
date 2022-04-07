import React, { useEffect, useState } from 'react'
import { Customerdetails, orders } from '../../api';
import Layout from '../../Component/layout/Layout'
import ApiService from '../../services/api.service';

function OrderDetails(props) {
    const[Data,setdetails] = useState([])
 console.log("hello",Data)
    
    
      
    useEffect(()=>{
        async function getOrderdetails() {
            try {
              const id = props.match.params.id;
              console.log(id);
              const  detail = await ApiService.get(orders.GET_ID+ `/${id}`);
              console.log(detail.data);
              setdetails(detail.data);
              
            } catch (error) {
                console.log(error)
            }
        }
        getOrderdetails();
    },[])
  return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Order Details <a className="add-btn" href="javascript:history.back();"><i className="fas fa-arrow-left" /> Back</a></h4>
        <ul className="links">
          <li>
            <a href="https://geniuscart.royalscripts.com/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">Orders</a>
          </li>
          <li>
            <a href="javascript:;">Order Details</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="order-table-wrap">
    <div className="alert alert-success validation" style={{display: 'none'}}>
      <button type="button" className="close alert-close"><span>×</span></button>
      <p className="text-left" /> 
    </div>
    <div className="alert alert-danger validation" style={{display: 'none'}}>
      <button type="button" className="close alert-close"><span>×</span></button>
      <ul className="text-left">
      </ul>
    </div>                            <div className="row">
      <div className="col-lg-6">
        <div className="special-box">
          <div className="heading-area">
            <h4 className="title">
              Order Details
            </h4>
          </div>
          <div className="table-responsive-sm">
            <table className="table">
              <tbody>
                <tr>
                  <th className="45%" width="45%">Order ID</th>
                  <td width="10%">:</td>
                  <td className="45%" width="45%">{Data.id}</td>
                </tr>
                <tr>
                  <th width="45%">Total Product</th>
                  <td width="10%">:</td>
                  <td width="45%">1</td>
                </tr>
                <tr>
                  <th width="45%">Total Cost</th>
                  <td width="10%">:</td>
                  <td width="45%">$130</td>
                </tr>
                <tr>
                  <th width="45%">Ordered Date</th>
                  <td width="10%">:</td>
                  <td width="45%">12-Mar-2022 18:34:04 pm</td>
                </tr>
                <tr>
                  <th width="45%">Payment Method</th>
                  <td width="10%">:</td>
                  <td width="45%">Cash On Delivery</td>
                </tr>
                <tr>
                  <th width="45%">Payment Status</th>
                  <th width="10%">:</th>
                  <td width="45%"><span className="badge badge-danger">Unpaid</span></td>
                </tr>  
              </tbody>
            </table>
          </div>
          <div className="footer-area">
            <a href="https://geniuscart.royalscripts.com/admin/order/897/invoice" className="mybtn1"><i className="fas fa-eye" /> View Invoice</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="special-box">
          <div className="heading-area">
            <h4 className="title">
              Billing Details
            </h4>
          </div>
          <div className="table-responsive-sm">
            <table className="table">
              <tbody>
                <tr>
                  <th width="45%">Name</th>
                  <th width="10%">:</th>
                  <td width="45%">User</td>
                </tr>
                <tr>
                  <th width="45%">Email</th>
                  <th width="10%">:</th>
                  <td width="45%">user@gmail.com</td>
                </tr>
                <tr>
                  <th width="45%">Phone</th>
                  <th width="10%">:</th>
                  <td width="45%">34534534534</td>
                </tr>
                <tr>
                  <th width="45%">Address</th>
                  <th width="10%">:</th>
                  <td width="45%">Test Address</td>
                </tr>
                <tr>
                  <th width="45%">Country</th>
                  <th width="10%">:</th>
                  <td width="45%">United States</td>
                </tr>
                <tr>
                  <th width="45%">City</th>
                  <th width="10%">:</th>
                  <td width="45%">Test City</td>
                </tr>
                <tr>
                  <th width="45%">Postal Code</th>
                  <th width="10%">:</th>
                  <td width="45%">1231</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="special-box">
          <div className="heading-area">
            <h4 className="title">
              Shipping Details
            </h4>
          </div>
          <div className="table-responsive-sm">
            <table className="table">
              <tbody>
                <tr>
                  <th width="45%"><strong>Name:</strong></th>
                  <th width="10%">:</th>
                  <td>User</td>
                </tr>
                <tr>
                  <th width="45%"><strong>Email:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">user@gmail.com</td>
                </tr>
                <tr>
                  <th width="45%"><strong>Phone:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">34534534534</td>
                </tr>
                <tr>
                  <th width="45%"><strong>Address:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">Test Address</td>
                </tr>
                <tr>
                  <th width="45%"><strong>Country:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">United States</td>
                </tr>
                <tr>
                  <th width="45%"><strong>City:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">Test City</td>
                </tr>
                <tr>
                  <th width="45%"><strong>Postal Code:</strong></th>
                  <th width="10%">:</th>
                  <td width="45%">1231</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 order-details-table">
        <div className="mr-table">
          <h4 className="title">Products Ordered</h4>
          <div className="table-responsiv">
            <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row btn-area"><div className="col-sm-4" /><div className="col-sm-4" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-hover dt-responsive dataTable no-footer dtr-inline" role="grid" width="100%" cellSpacing={0}>
                    <thead>
                      <tr role="row">
                      </tr><tr role="row"><th className="sorting_disabled" rowSpan={1} colSpan={1} width="10%">Product ID#</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Shop Name</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Vendor Status</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Product Title</th><th className="sorting_disabled" rowSpan={1} colSpan={1} width="20%">Details</th><th className="sorting_disabled" rowSpan={1} colSpan={1} width="10%">Total Price</th></tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0}><input type="hidden" defaultValue="100S000000" />100</td>
                        <td>
                          <a target="_blank" href="https://geniuscart.royalscripts.com/admin/vendors/13/show">Test Stores</a>
                        </td>
                        <td>
                          <span className="badge badge-warning">Pending</span>
                        </td>
                        <td>
                          <input type="hidden" defaultValue />
                          <a target="_blank" href="https://geniuscart.royalscripts.com/item/physical-product-title-title-will-be-here-100-qqz100nzi">Physical Product Title Title w...</a>
                        </td>
                        <td>
                          <p>
                            <strong>Size :</strong> S
                          </p>
                          <p>
                            <strong>color :</strong> <span style={{width: '20px', height: '20px', display: 'inline-block', verticalAlign: 'middle', background: '#000000'}} />
                          </p>
                          <p>
                            <strong>Price :</strong> $130
                          </p>
                          <p>
                            <strong>Qty :</strong> 1 
                          </p>
                        </td>
                        <td>$130</td>
                      </tr></tbody>
                  </table></div></div><div className="row"><div className="col-sm-12 col-md-5" /><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example2_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 text-center mt-2">
        <a className="btn sendEmail send" href="javascript:;" data-email="user@gmail.com" data-toggle="modal" data-target="#vendorform">
          <i className="fa fa-send" /> Send Email
        </a>
      </div>
    </div>
  </div>
</div>

  </Layout>
}

export default OrderDetails