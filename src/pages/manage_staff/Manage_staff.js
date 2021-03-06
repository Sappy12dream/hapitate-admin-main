import React, { useEffect, useState } from "react";
import { Button, Modal ,Container} from "react-bootstrap"
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
import { addstaff, delete_staff, editstaff, stafflist } from "../../api";
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
const Manage_staff = ({ authorized }) => {

  const [isActive, setActive] = useState("false");
  
  const Toggle = () => {
    setActive(!isActive);
    
  };
  const [Staff, setStaff] = useState([]);
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
  /* details  */
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  /* Backend Code */
  async function getAllStaff() {
    try {
      const staff = await ApiService.get(stafflist.GET)
      console.log(staff.data)
      setStaff(staff.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllStaff()
  }, [])

  /* Backend Code*/


  const temp = {
    Staff_Profile_Image: "",
    Name: "",
    Email	: "",
    Phone: "",
    Role: "",
    Password: "",
  }

  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    console.log(e)
    let { type, name, value } = e.target
    console.log(e.target, name, value, type)
    if (type === 'file') {

      return setValues({ ...values, Staff_Profile_Image: e.target.files[0] })

    }
    setValues({ ...values, [name]: value })
  }
  console.log(values, 'values')

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const formData = new FormData()
    formData.append('Staff_Profile_Image', values.Staff_Profile_Image, values.Staff_Profile_Image.name)
    formData.append('Name', values.Name)
    formData.append('Email', values.Email)
    formData.append('Phone', values.Phone)
    formData.append('Role', values.Role)
    formData.append('Password', values.Password)

    const res = await ApiService.post(addstaff.POST, formData)
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
         
          toast.success("New Staff added Successfully");
          handleClose();
          getAllStaff();



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

    const editedsubCategory = {

      Name: editFormData.Name,
      Email: editFormData.Email,
      Phone: editFormData.Phone,
      Role: editFormData.Role,
      Password: editFormData.Password,
    
      
    };

    const response = await ApiService.patch(editstaff.PATCH(deleteid), editedsubCategory)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
       
          toast.success("Staff details Edited Successfully");
          handleClose2();
          getAllStaff();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });

  };


  





  const deleteservices = async (e, id) => {
    e.preventDefault();
    const response = await ApiService.delete(delete_staff.DEL(id)).then(res => {
      
      toast.success("Staff deleted Successfully");
      handleClose1();
      getAllStaff();
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
            
            <div class="row">
              <div class="col-lg-4">
                <div class="left-area">
                  <h4 class="heading">Staff Profile Image*</h4>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="img-upload">
                  <div class="img-preview" >
                    <label for="image-upload" class="img-label" id="image-label"><i class="icofont-upload-alt"></i>Upload Image</label>
                    <input type="file" name="Staff_Profile_Image" class="img-upload" id="image-upload"  onChange={handleEditFormChange} />
                  </div>
                  <p class="text">Prefered Size: (600x600) or Square Sized Image</p>
                </div>

              </div>
            </div>
            
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Name*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Name" value={editFormData.Name}  onChange={handleEditFormChange}  placeholder="User Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Email*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Email" value={editFormData.Email}  onChange={handleEditFormChange} placeholder="Email Address" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Phone*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Phone"  value={editFormData.Phone}  onChange={handleEditFormChange}  placeholder="Phone Number" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Role*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="Role" value={editFormData.Role}  onChange={handleEditFormChange}  >
                <option>Select Role</option>
                <option value={"Manager"}>Manager</option>
                <option value={"Moderator"}>Moderator</option>
                <option value={"Staff"}>Staff </option>
              </select>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Password*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="Password" className="form-control" name="Password" value={editFormData.Password}  onChange={handleEditFormChange} placeholder="password" />
            </div>
          </div>

            <Button type="submit" className="float-right" variant="secondary" > Update Staff Details</Button>


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
        <Button variant="danger" onClick={(e) => deleteservices(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Staffs</h4>
            <ul className="links">
              <li>
                <a href="#admin">Dashboard </a>
              </li>
              <li>
                <a href="#admin/staff">Manage Staffs</a>
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
                      <div id="geniustable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="geniustable" /></label></div>
                    </div>
                    <div className="col-sm-4 text-right"><a className="add-btn" data-href="#admin/staff/create" id="add-data" data-toggle="modal" onClick={handleShow} data-target="#modal1"><i className="fas fa-plus" /> Add New Staff</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '88px' }}>Name</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '168px' }}>Email</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '112px' }}>Phone</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '97px' }}>Role</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '307px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Staff?.results?.map((data, i) => {
                              return (<tr role="row" className="odd">
                                <td tabIndex={0}>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Phone}</td>
                                <td>{data.Role}</td>
                                <td>
                                  <div className="action-list"><a   onClick={() => {setid(data.id)
                                      handleShow3()
                                      setEditFormData(data)}} className="view details-width" data-toggle="modal" data-target="#modal1"> <i className="fas fa-eye" />Details</a>
                                  <a onClick={() => {
                                      setid(data.id)
                                      handleShow2()
                                      setEditFormData(data)
                                    }}data-href="#admin/staff/edit/5" className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                  <a onClick={() => {
                                        setid(data.id)
                                        handleShow1()
                                      }} href="javascript:;" data-href="#admin/staff/delete/5" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                </td>
                              </tr>)

                            }
                            )
                          }
                        
                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#assets/images/1564224329loading3.gif" /></div>
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
        <Modal.Title>ADD NEW STAFF</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit} >
          <div className="row py-2">
            
            <div class="row">
              <div class="col-lg-4">
                <div class="left-area">
                  <h4 class="heading">Staff Profile Image*</h4>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="img-upload">
                  <div class="img-preview" >
                    <label for="image-upload" class="img-label" id="image-label"><i class="icofont-upload-alt"></i>Upload Image</label>
                    <input type="file" name="Staff_Profile_Image" class="img-upload" id="image-upload" onChange={onChangeHandler} />
                  </div>
                  <p class="text">Prefered Size: (600x600) or Square Sized Image</p>
                </div>

              </div>
            </div>
            
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Name*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Name" onChange={onChangeHandler}  placeholder="User Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Email*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Email" onChange={onChangeHandler} placeholder="Email Address" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Phone*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Phone" onChange={onChangeHandler}  placeholder="Phone Number" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Role*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="Role" onChange={onChangeHandler}  >
                <option>Select Role</option>
                <option value={"Manager"}>Manager</option>
                <option value={"Moderator"}>Moderator</option>
                <option value={"Staff"}>Staff </option>
              </select>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-right">Password*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="Password" className="form-control" name="Password" onChange={onChangeHandler} placeholder="password" />
            </div>
          </div>
          <Button className="float-right" variant="secondary" type="submit" > Create</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

    <Modal size="lg" show={show3} onHide={handleClose3}>
      <Modal.Header closeButton>
        <Modal.Title>STAFF DETAILS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="modal-content">
      
      <div className="modal-body"><div className="content-area no-padding">
          <div className="add-product-content1">
              <div className="col-lg-12">
                <div className="product-description">
                  <div className="body-area">
                    <div className="table-responsive ">
                      <table className="table">
                        <tbody>
                          
                          <tr>
                            <th>Staff ID#</th>
                            <td>{editFormData.id}</td>
                          </tr>
                          <tr>
                            <th>Staff Photo</th>
                            <td>
                              <img src={editFormData.Staff_Profile_Image} alt="No Image" />
                            </td>
                          </tr>
                          <tr>
                            <th>Staff Name</th>
                            <td>{editFormData.Name}</td>
                          </tr>
                          <tr>
                            <th>Staff Role</th>
                            <td>{editFormData.Role}</td>
                          </tr>
                          <tr>
                            <th>Staff Email</th>
                            <td>{editFormData.Email}</td>
                          </tr>
                          <tr>
                            <th>Staff Phone</th>
                            <td>{editFormData.Phone}</td>
                          </tr>
                          <tr>
                            <th>Joined</th>
                            <td>2 years ago</td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

   


  </Layout>
}

export default Manage_staff;