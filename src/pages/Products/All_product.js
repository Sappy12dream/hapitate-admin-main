import Layout from "../../Component/layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Deleteproduct, product, Searchallproduct } from "../../api";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { Link, useHistory } from "react-router-dom";
import { Button, Container, Modal } from 'react-bootstrap';
import ApiService from '../../services/api.service'

const All_product = () => {

  const [Allproduct, setallproduct] = useState([])
  async function getAllList() {
    try {
      const allproduct = await ApiService.get(product.GET)
      console.log(allproduct.data)
      setallproduct(allproduct.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllList()
  }, [])
  const [deleteid, setid] = useState();

  /* delete  */
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
 



  const DeleteProduct = async (e, id) => {
      e.preventDefault();
      const response = await ApiService.delete(Deleteproduct.DEL(id)).then(res => {
         
          toast.success("Product deleted Successfully");
          handleClose1();
          getAllList();
         
      }
      ).catch((error) => {
          toast.error("Something Went Wrong!");
      });

  };
  
  const searchItems = async (e, result) => {
    e.preventDefault();
    const response = await ApiService.get(Searchallproduct.Search(result)).then(res => {
     
      // toast.success("Category deleted Successfully");
      console.log(res.data)
      setallproduct(res.data)
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  return <Layout>
     <Modal
            show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title >Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>You are about to delete this Category. Everything under this category will be deleted.</p>
                <p>
                    Do you want to proceed?


                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                <Button variant="danger" onClick={(e) => DeleteProduct(e, deleteid)}>delete</Button>
            </Modal.Footer>
        </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Products</h4>
            <ul className="links">
              <li>
                <a href="/admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">Products </a>
              </li>
              <li>
                <a href="/admin/products">All Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-area">
        <div className="row">
          <div className="col-lg-12">
            <div className="mr-table allproduct">
              <div className="alert alert-success validation" style={{ display: 'none' }}>
                <button type="button" className="close alert-close"><span>??</span></button>
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
                      <div id="geniustable_filter" className="dataTables_filter"><label>Search:<input className="form-control form-control-sm"  icon='search'
                placeholder='Search...' 
                onChange={(e) => searchItems(e,e.target.value)}
            /></label></div>
                    </div>
                    <div className="col-sm-4 table-contents"><a className="add-btn" href="/add-product"><i className="fas fa-plus" /> <span className="remove-mobile">Add New Product<span /></span></a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '350px' }}>Name</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '46px' }}>Type</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '80px' }}>Stock</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '44px' }}>M.R.P.</th>

                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '44px' }}>Price</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '115px' }}>Status</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '101px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Allproduct?.results?.map((data, i) => {
                              return (<tr role="row" className="odd">
                                <td tabIndex={0}>{data.Name}<br /><small>ID: <a href="/item/pfd" target="_blank">{data.id}</a></small><small className="ml-2"> SKU: <a href="/item/physical-product-title-title-will-be-here-99u-myy7236gfd" target="_blank">{data.Product_Sku}</a><small className="ml-2"> VENDOR: <a href="/admin/vendors/13/show" target="_blank">{ }</a></small></small></td>
                                <td>Physical</td>
                                <td>{data.Product_Stock}</td>
                                <td>Rs.{data.Product_Previous_Price}</td>
                                <td>Rs.{data.Product_Current_Price}</td>
                                <td>
                                  <div className="action-list">
                                    <div className={`nice-select process select droplinks  ${data.is_active === "true" ? "drop-success" : "drop-danger"}`}>
                                      <span className={`current `}>{data.is_active == "true" ? "Activated" : "Deactivated"}</span>

                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                    <div className="action-list">
                                      <Link to={`/Edit-product/${data.id}`} > <i className="fas fa-edit" /> Edit</Link><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={180} /><i className="fas fa-eye" /> View Gallery</a>
                                      <a data-href="/admin/products/feature/180" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a>
                                      <a onClick={() => {
                                        setid(data.id)
                                        handleShow1()
                                      }} data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Delete</a></div>
                                  </div>
                                </td>
                              </tr>)

                            }
                            )
                          }



                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="/assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 44 entries</div>
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
                          <li className="paginate_button page-item next" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={6} tabIndex={0} className="page-link">Next</a></li>
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
export default All_product;