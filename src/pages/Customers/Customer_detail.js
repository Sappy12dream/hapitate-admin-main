import React,{useState,useEffect} from 'react'
import { Customerdetails } from '../../api';
import Layout from '../../Component/layout/Layout'
import ApiService from '../../services/api.service'

function Customer_detail(props) {
  const[Data,setdetails] = useState([])

  async function getCustomerdetails() {
    try {
      const id = props.match.params.id;
      console.log(id);
      const  detail = await ApiService.get(Customerdetails.GET_ID+ `/${id}`);
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
        <h4 className="heading">Customer Details <a className="add-btn" href="/customer-list"><i className="fas fa-arrow-left" /> Back</a></h4>
        <ul className="links">
          <li>
            <a href="admin">Dashboard </a>
          </li>
          <li>
            <a href="admin/users">Customers</a>
          </li>
          <li>
            <a href="admin/user/13/show">Details</a>
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
                  <img src="assets/images/users/1557677677bouquet_PNG62.png" alt="No Image" />                                            
                  <a href="javascript:;" className="mybtn1 send" data-email="vendor@gmail.com" data-toggle="modal" data-target="#vendorform">Send Message</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="table-responsive show-table">
                  <table className="table">
                    <tbody><tr>
                        <th>ID#</th>
                        <td>{Data.id}</td>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <td>{Data.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{Data.email}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>{Data.phone}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>Space Needle 400 Broad St, Seattles</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="table-responsive show-table">
                  <table className="table">
                    <tbody><tr>
                        <th>City</th>
                        <td>Washington, DC</td>
                      </tr>
                      <tr>
                        <th>Fax</th>
                        <td>23123121</td>
                      </tr>
                      <tr>
                        <th>Zip Code</th>
                        <td>1234</td>
                      </tr>
                      <tr>
                        <th>Joined</th>
                        <td>3 years ago</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
          <div className="order-table-wrap">
            <div className="order-details-table">
              <div className="mr-table">
                <h4 className="title">Products Ordered</h4>
                <div className="table-responsive">
                  <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row btn-area"><div className="col-sm-4" /><div className="col-sm-4" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid">
                          <thead>
                            <tr role="row"><th className="sorting_disabled" rowSpan={1} colSpan={1}>Order ID</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Purchase Date</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Amount</th><th className="sorting_disabled" rowSpan={1} colSpan={1}>Status</th><th className="sorting_disabled" rowSpan={1} colSpan={1} /></tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td tabIndex={0}><a href="admin/order/414/invoice">00000414</a></td>
                              <td>2021-06-10 05:42:52 am</td>
                              <td>$260</td>
                              <td>pending</td>
                              <td>
                                <a href=" admin/order/414/show" className="view-details">
                                  <i className="fas fa-check" />Details
                                </a>
                              </td>
                            </tr></tbody>
                        </table></div></div><div className="row"><div className="col-sm-12 col-md-5" /><div className="col-sm-12 col-md-7" /></div></div>
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

export default Customer_detail