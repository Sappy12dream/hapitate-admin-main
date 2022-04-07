
import Layout from "../../Component/layout/Layout";

import { Button, Container, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { delete_packaging, editpackaging, packaging, packaginglist } from "../../api";
import ApiService from "../../services/api.service";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { useHistory } from "react-router-dom";
const Packagings = ({ authorized }) => {

  const [deleteid, setid] = useState();
  /* add  */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  /* delete  */
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  /* Edit  */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  
  const [Package, setPackage] = useState([])
  async function getAllList() {
    try {
      const Package = await ApiService.get(packaginglist.GET)
      console.log(Package.data)
      setPackage(Package.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllList()
  }, [])


  const temp = {
    Title: " ",
    Subtitle: " ",
    Price: " ",
  }

  const [values, setValues] = useState(temp)
  const history = useHistory()

  const [editFormData, setEditFormData] = useState(temp);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  console.log(editFormData, 'edit')

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedsubCategory = {
      Title: editFormData.Title,
      Subtitle: editFormData.Subtitle,
      Price: editFormData.Price,
    };

    const response = await ApiService.patch(editpackaging.PATCH(deleteid), editedsubCategory)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
         
          toast.success("Pacakge plan Edited Successfully");
          handleClose2();
          getAllList();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });

  };


  const onChangeHandler = (e) => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    const res = await ApiService.post(packaging.POST, values)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
         
          toast.success("Pacakge Data added Successfully");
          handleClose();
          getAllList();



        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  const deletepackage = async (e, id) => {
    e.preventDefault();
    await ApiService.delete(delete_packaging.DEL(id)).then(res => {

      toast.success("Packaging Data deleted Successfully");
      handleClose1();
      getAllList();
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
        <p>You are about to delete this Packaging Plan. Everything under this Package will be deleted.</p>
        <p>
          Do you want to proceed?


        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
          Close
        </Button>
        <Button variant="danger" onClick={(e) => deletepackage(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Packagings</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">General Settings</a>
              </li>
              <li>
                <a href="#/admin/package">Packagings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product-area">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-area">
              <h4 className="title">
                Multiple Packaging :
              </h4>
              <div className="action-list">
                <select className="process select droplinks drop-success" style={{ display: 'none' }}>
                  <option data-val={1} value="#/admin/general-settings/multiple/packaging/1" selected>Activated</option>
                  <option data-val={0} value="#/admin/general-settings/multiple/packaging/0">Deactivated</option>
                </select>
                <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                  <ul className="list">
                    <li data-value="#/admin/general-settings/multiple/packaging/1" className="option selected">Activated</li>
                    <li data-value="#/admin/general-settings/multiple/packaging/0" className="option">Deactivated</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mr-table allproduct">
              <div className="alert alert-success validation" style={{ display: 'none' }}>
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
                    <div className="col-sm-4 table-contents"><a className="add-btn" data-href="#/admin/package/create" onClick={handleShow} id="add-data" data-toggle="modal" data-target="#modal1"><i className="fas fa-plus" /> Add New Packaging</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '345px' }}>Title</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '162px' }}>Price</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '335px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Package?.results?.map((pack, i) => {
                              return (<>

                                <tr role="row" className="odd">
                                  <td tabIndex={0}>{pack.Title} </td>
                                  <td>Rs.{pack.Price}</td>
                                  <td>
                                    <div className="action-list"><a onClick={() => {
                                      setid(pack.id)
                                      handleShow2()
                                      setEditFormData(pack)
                                    }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                      <a onClick={() => {
                                        setid(pack.id)
                                        handleShow1()
                                      }} className="delete"><i className="fas fa-trash-alt" /></a></div>
                                  </td>
                                </tr>
                              </>)

                            })
                          }





                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#/assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 2 of 2 entries</div>
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD NEW PACKAGING</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container >
          <form onSubmit={onSubmit} method="POST">
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-right">Title*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Title" className="form-control" onChange={onChangeHandler} placeholder="Enter title" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Subtitle **</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Subtitle" className="form-control" onChange={onChangeHandler} placeholder="Enter Subtitle" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Price*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Price" className="form-control" onChange={onChangeHandler} placeholder="Enter Price" />
              </div>
            </div>

            <Button type="submit" className="float-right" variant="secondary" > Create package</Button>


          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title>Edit PACKAGING PLAN</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container >
          <form onSubmit={handleEditFormSubmit} method="POST">
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-right">Title*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Title" className="form-control" value={editFormData.Title} onChange={handleEditFormChange} placeholder="Enter title" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Subtitle **</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Subtitle" className="form-control" value={editFormData.Subtitle} onChange={handleEditFormChange} placeholder="Enter Subtitle" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Price*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Price" className="form-control" value={editFormData.Price} onChange={handleEditFormChange} placeholder="Enter Price" />
              </div>
            </div>

            <Button type="submit" className="float-right" variant="secondary" > Update package</Button>


          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  </Layout>
}

export default Packagings;