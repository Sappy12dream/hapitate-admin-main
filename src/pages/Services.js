import './styles/Register.css';
import Layout from '../Component/layout/Layout';
import React, { Component, useEffect, useState } from "react";
import ApiService from '../services/api.service'

import toast from "react-hot-toast";
import { TokenService } from "../services/storage.service";
import { useHistory } from "react-router-dom";
import { Button, Container, Modal } from 'react-bootstrap';
import { delete_services, EditService, service, servicelist } from "../api";

function Services(props, { authorized }) {
  const [deleteid, setid] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  /* Edit  */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [Sevices, setSevices] = useState([])

  async function getAllList() {
    try {
      const Sevices = await ApiService.get(servicelist.GET)
      console.log(Sevices.data)
      setSevices(Sevices.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllList()
  }, [])


  const temp = {
    Title: "",
    Description: "",
  }

  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    console.log(e)
    let { type, name, value } = e.target
    console.log(e.target, name, value, type)
    if (type === 'file') {

      return setValues({ ...values, Current_Featured_Image: e.target.files[0] })

    }
    setValues({ ...values, [name]: value })
  }
  console.log(values, 'values')
  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const formData = new FormData()
    formData.append('Current_Featured_Image', values.Current_Featured_Image, values.Current_Featured_Image.name)
    formData.append('Title', values.Title)
    formData.append('Description', values.Description)

    const res = await ApiService.post(service.POST, formData)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
         
          toast.success("Service Data added Successfully");
          handleClose();
          getAllList();



        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };


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

    const editpickup = {

      location: editFormData.location,

    };

    const response = await ApiService.patch(EditService.PATCH(deleteid), editpickup)
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

  const deleteservices= async (e,id)=>{
    e.preventDefault();
    await ApiService.delete(delete_services.DEL(id)).then(res=>{
     
          toast.success("Service Data deleted Successfully");
          handleClose1();
          getAllList();
    } 
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  
  return <Layout>
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
                <input type="text" name="Title" className="form-control"value={editFormData.Title} onChange={handleEditFormChange} placeholder="Enter title" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="left-area">
                  <h4 class="heading">Current Featured Image *</h4>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="img-upload">
                  <div class="img-preview" >
                    <label for="image-upload" class="img-label" id="image-label"><i class="icofont-upload-alt"></i>Upload Image</label>
                    <input type="file" name="Current_Featured_Image" class="img-upload" id="image-upload" />
                  </div>
                  <p class="text">Prefered Size: (600x600) or Square Sized Image</p>
                </div>

              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Description *</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Description" className="form-control" value={editFormData.Description} onChange={handleEditFormChange} placeholder="Enter Description " />
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
        <p>You are about to delete this Service Plan. Everything under this category will be deleted.</p>
        <p>
        Do you want to proceed?


        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="danger" onClick={(e)=>deleteservices(e,deleteid)}>delete</Button>
        </Modal.Footer>
      </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Services</h4>
            <ul className="links">
              <li>
                <a href="admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">Home Page Settings </a>
              </li>
              <li>
                <a href="admin/service">Services</a>
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
                    <div className="col-sm-4 table-contents"><a className="add-btn" onClick={handleShow} ><i className="fas fa-plus" /> Add New Service</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '166px' }}>Featured Image</th>
                            <th width="30%" className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '350px' }}>Title</th>
                            <th width="40%" className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '479px' }}>Details</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '148px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Sevices?.results?.map((data, i) => {
                             
                              return (<tr role="row" className="odd">
                              

                                <td tabIndex={0}><img src={data.Current_Featured_Image} alt="Image" /></td>
                                <td>{data.Title}</td>
                                <td style={{}}>{data.Description}</td>
                                <td style={{}}>
                                  
                                  <div className="action-list">
                                    <a onClick={() => {
                                      setid(data.id)
                                      handleShow2()
                                      setEditFormData(data)
                                    }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                  
    
                                  <a  onClick={()=>{
                                   setid(data.id)
                                    handleShow1()}} href="javascript:;" data-href="admin/service/delete/5" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                </td>
                              </tr>)

                            }
                            )
                          }


                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div>
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
        <Modal.Title>ADD NEW SERVICE</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container >
          <form onSubmit={onSubmit} method="POST" >
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-right">Title*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Title" className="form-control" onChange={onChangeHandler} placeholder="Enter title" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="left-area">
                  <h4 class="heading">Current Featured Image *</h4>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="img-upload">
                  <div class="img-preview" >
                    <label for="image-upload" class="img-label" id="image-label"><i class="icofont-upload-alt"></i>Upload Image</label>
                    <input type="file" name="Current_Featured_Image" class="img-upload" id="image-upload" onChange={onChangeHandler} />
                  </div>
                  <p class="text">Prefered Size: (600x600) or Square Sized Image</p>
                </div>

              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Description *</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Description" className="form-control" onChange={onChangeHandler} placeholder="Enter Description " />
              </div>
            </div>

            <Button type="submit" className="float-right" variant="secondary" > Create Service</Button>


          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

  </Layout >;
}

export default Services;