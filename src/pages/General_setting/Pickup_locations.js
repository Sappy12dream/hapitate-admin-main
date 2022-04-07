import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
import ApiService from '../../services/api.service'
import { AddPickupLocation, DeletePickupLocation, EditPickupLocation, PickupLocationList } from "../../api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
import { Button, Container,Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

const Pickup_locations = ({ authorized }) => {


  const [PickupLocation, setPickupLocation] = useState([]);
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

  /* Backend Code */
  async function getAllPickuplist() {
    try {
      const pickuplocation = await ApiService.get(PickupLocationList.GET);
      console.log(pickuplocation.data)
      setPickupLocation(pickuplocation.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllPickuplist()
  }, [])

  /* Backend Code*/


  const temp = {
    location: "",

  }


  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    const response = await ApiService.post(AddPickupLocation.POST, values)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
          toast.success("Pickup Location added Successfully");
         
          handleClose();
          getAllPickuplist();
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

    const response = await ApiService.patch(EditPickupLocation.PATCH(deleteid), editpickup)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
         
          toast.success("Pacakge plan Edited Successfully");
          handleClose2();
          getAllPickuplist();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });

  };



  const DeletePickup = async (e, id) => {
    e.preventDefault();
    const response = await ApiService.delete(DeletePickupLocation.DEL(id)).then(res => {
   
      toast.success("Category deleted Successfully");
      handleClose1();
      getAllPickuplist();
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };


  if (!authorized) {
    return <Redirect to="/" />
  }

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
                <label className="text-dark text-center">Location* (In Any Language)</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" className="form-control" name="location" value={editFormData.location} onChange={handleEditFormChange} placeholder="Enter Name" />
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
        <p>You are about to delete this Category. Everything under this category will be deleted.</p>
        <p>
          Do you want to proceed?


        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
          Close
        </Button>
        <Button variant="danger" onClick={(e) => DeletePickup(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD NEW CATEGORY</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>

          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Location* (In Any Language)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="location" onChange={onChangeHandler} placeholder="Enter Location" />
            </div>
          </div>

          <Button type="submit" className="float-right" variant="secondary" > Create</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Close
        </Button>

      </Modal.Footer>
    </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Pickup Locations</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">General Settings </a>
              </li>
              <li>
                <a href="#/admin/pickup">Pickup Locations</a>
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
                <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                  <div className="row btn-area">
                    <div className="col-sm-4">
                      <div className="dataTables_length" id="example_length"><label>Show <select name="example_length" aria-controls="example" className="custom-select custom-select-sm form-control form-control-sm">
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select> entries</label></div>
                    </div>
                    <div className="col-sm-4">
                      <div id="example_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="example" /></label></div>
                    </div>
                    <div className="col-sm-4 text-right"><a onClick={handleShow} className="add-btn" data-href="#/admin/pickup/create" id="add-data" data-toggle="modal" data-target="#modal1"><i className="fas fa-plus" /> Add New Pickup Location</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="example" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="example_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '355px' }}>location</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '523px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            PickupLocation?.results?.map((data, i) => {
                              return (<tr role="row" className="odd">
                                <td tabIndex={0}>{data.location}</td>
                                <td>
                                  <div className="action-list">
                                    
                                    <a onClick={() => {
                                      setid(data.id)
                                      handleShow1()
                                      setEditFormData(data)
                                    }} data-href="#/admin/pickup/edit/6" className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                  
                                  <a onClick={() => {
                                        setid(data.id)
                                        handleShow1()
                                      }}href="javascript:;" data-href="#/admin/pickup/delete/6" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                </td>
                              </tr>)

                            }
                            )
                          }
                         
                        </tbody>
                      </table>
                      <div id="example_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#/assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="example_previous"><a href="#" aria-controls="example" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                          <li className="paginate_button page-item active"><a href="#" aria-controls="example" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                          <li className="paginate_button page-item next disabled" id="example_next"><a href="#" aria-controls="example" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li>
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

export default Pickup_locations;