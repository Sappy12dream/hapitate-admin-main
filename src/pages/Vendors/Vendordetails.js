import React,{useState,useEffect} from 'react'
import {  Customerdetails, Vendorlist } from '../../api';
import Layout from '../../Component/layout/Layout'
import ApiService from '../../services/api.service'

function Vendordetails(props) {
    const[Data,setdetails] = useState([]);
    async function getCustomerdetails() {
        try {
          const id = props.match.params.id;
          console.log(id);
          const  detail = await ApiService.get(Vendorlist.GET_ID+ `/${id}`);
          console.log(detail.data);
          setdetails(detail.data);
          
        } catch (error) {
            console.log(error)
        }
    }
      
        
      useEffect(()=>{
        getCustomerdetails();
      })
  return <Layout>
      <div className="content-area">
    <div className="mr-breadcrumb">
        <div className="row">
            <div className="col-lg-12">
                <h4 className="heading">Vendor Details <a className="add-btn" href="/Vendor_list"><i className="fas fa-arrow-left" /> Back</a></h4>
                <ul className="links">
                    <li>
                        <a href="/admin">Dashboard </a>
                    </li>
                    <li>
                        <a href="/admin/vendors">Vendors</a>
                    </li>
                    <li>
                        <a href="/admin/vendors/334/show">Details</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="add-product-content1 customar-details-area">
        <div className="row">
            <div className="col-lg-12">
                <div className="product-description">
                    <div className="body-area">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="user-image">
                                    <img src="/assets/images/noimage.png" alt="No Image" />
                                    <a href="javascript:;" className="mybtn1 send" data-email="joyella@gmail.com" data-toggle="modal" data-target="#vendorform">Send Message</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="table-responsive show-table" style={{width:"110%"}}>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Vendor ID#</th>
                                                <td>{Data.id}</td>
                                            </tr>
                                            <tr>
                                                <th>Store Name</th>
                                                <td>{Data.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Owner Name</th>
                                                <td>John Clez</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{Data.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Shop Contact Number</th>
                                                <td>{Data.Strore_phone}</td>
                                            </tr>
                                            <tr>
                                                <th>Registration Number</th>
                                                <td>163663</td>
                                            </tr>
                                            <tr>
                                                <th>Shop Address</th>
                                                <td>{Data.address1}amp;{Data.address2}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="table-responsive show-table">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Message</th>
                                                <td>Hi</td>
                                            </tr>
                                            <tr>
                                                <th>Total Product(s)</th>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <th>Joined</th>
                                                <td>4 days ago</td>
                                            </tr>
                                            <tr>
                                                <th width="35%">Shop Details</th>
                                                <td />
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a className="badge badge-danger verify-link" href="javascript:;">Unverified</a>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-table-wrap">
                        <div className="order-details-table">
                            <div className="mr-table">
                                <h4 className="title">Products Added</h4>
                                <div className="table-responsive">
                                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="row btn-area">
                                            <div className="col-sm-4" />
                                            <div className="col-sm-4" />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table id="example2" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid">
                                                    <thead>
                                                        <tr role="row">
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1}>Product ID</th>
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1}>Type</th>
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1}>Stock</th>
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1}>Price</th>
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1}>Status</th>
                                                            <th className="sorting_disabled" rowSpan={1} colSpan={1} />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="odd">
                                                            <td valign="top" colSpan={6} className="dataTables_empty">No data available in table</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5" />
                                            <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                                    <ul className="pagination">
                                                        <li className="paginate_button page-item previous disabled" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                                                        <li className="paginate_button page-item next disabled" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">Next</a></li>
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
        </div>
    </div>
</div>
  </Layout>
}

export default Vendordetails