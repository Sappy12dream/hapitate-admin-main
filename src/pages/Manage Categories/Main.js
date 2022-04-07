import Modal from 'react-bootstrap/Modal'
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
import ApiService from '../../services/api.service'
import { addMainCategory, deleteMainCategory, editMainCategory, mainCategory, SearchMainCategory } from "../../api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
import { Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import slugify from 'slugify';




const Main = ({ authorized }) => {




  const [Category, setCategory] = useState([]);
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
  async function getAllCategory() {
    try {
      const Category = await ApiService.get(mainCategory.GET)
      console.log(Category.data)
      setCategory(Category.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {

    getAllCategory()
    getslug()
  }, [])

  /* Backend Code*/


  const temp = {
    Name: "",
    Slug: "",
    Status: "",
  }


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
      Slug: editFormData.Slug,
      Status: editFormData.Status,
    };

    const response = await ApiService.patch(editMainCategory.PATCH(deleteid), editedsubCategory)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
        
          toast.success("Pacakge plan Edited Successfully");
          handleClose2();
          getAllCategory();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });

  };


  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    const response = await ApiService.post(addMainCategory.POST, {...values,Slug:slugdata})
      .then((response) => {
        console.log(response)
        if (response.status == 201) {

          toast.success("Sub Category added Successfully");
         
          handleClose();
          getAllCategory();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };





  const deleteservices = async (e, id) => {
    e.preventDefault();
    const response = await ApiService.delete(deleteMainCategory.DEL(id)).then(res => {
     
      toast.success("Category deleted Successfully");
      handleClose1();
      getAllCategory();
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  const searchItems = async (e, result) => {
    e.preventDefault();
    const response = await ApiService.get(SearchMainCategory.Search(result)).then(res => {
     
      // toast.success("Category deleted Successfully");
      console.log(res.data)
      setCategory(res.data)
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  const [slugdata,setslug] = useState(" ");

  const getslug =  (e, value) => {
    if(value){
      setslug(slugify(value))
      console.log(slugify(value))
      setValues({ ...values, Slug: value})
  
    }

}

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
              <label className="text-dark text-center">Name* (In Any Language)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Name" value={editFormData.Name} onChange={handleEditFormChange} placeholder="Enter Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Slug*</label>
              <label >(In English)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Slug" value={editFormData.Slug} onChange={handleEditFormChange}placeholder="Enter Slug" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Status *</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="Status"  value={editFormData.Status} onChange={handleEditFormChange} >
                <option >Status</option>
                <option value={"Active"}>Active</option>
                <option value={"Disabled"}>Disabled</option>

              </select>
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
        <Button variant="danger" onClick={(e) => deleteservices(e, deleteid)}>delete</Button>
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
              <label className="text-dark text-center">Name* (In Any Language)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Name" onChange={(e) =>{ getslug(e,e.target.value)
                                                      onChangeHandler(e)}}          placeholder="Enter Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Slug*</label>
              <label >(In English)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
            <input type="text" className="form-control"  onChange={onChangeHandler}  value={slugdata} name="Slug"  />
              
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Status *</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="Status" label="Product Category*" onChange={onChangeHandler} >
                <option >Status</option>
                <option value={"Active"}>Active</option>
                <option value={"Disabled"}>Disabled</option>

              </select>
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
            <h4 className="heading">Main Categories</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li><a href="javascript:;">Manage Categories</a></li>
              <li>
                <a href="#/admin/category">Main Categories</a>
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
                      <div id="geniustable_filter" className="dataTables_filter"><label>Search:<input className="form-control form-control-sm"  icon='search'
                placeholder='Search...' 
                onChange={(e) => searchItems(e,e.target.value)}
            /></label></div>
                    </div>
                    <div className="col-sm-4 table-contents"><a className="add-btn" data-href="#/admin/category/create" id="add-data" onClick={handleShow}><i className="fas fa-plus" /> Add New Category</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th width="20%" className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '345px' }}>Name</th>
                            <th width="20%" className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '345px' }}>Slug</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '345px' }}>Status</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '345px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>

                          {
                            Category?.results?.map((category, i) => {
                              return (
                                <tr role="row" className="odd">
                                  <td tabIndex={0}>{category.Name}</td>
                                  <td>{category.Slug}</td>

                                  <td>
                                    <div className="action-list">
                                      <div className={`nice-select process select droplinks  ${category.Status === "Active" ? "drop-success" : "drop-danger"}`}>
                                        <span className={`current `}>{category.Status === "Active" ? "Activated" : "Deactivated"}</span>

                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action-list"><a onClick={() => {
                                      setid(category.id)
                                      handleShow2()
                                      setEditFormData(category)
                                    }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                      <a onClick={() => {
                                        setid(category.id)
                                        handleShow1()
                                      }} data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                  </td>
                                </tr>
                              )
                            })
                          }


                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#/assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 15 entries</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" id="geniustable_paginate">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="geniustable_previous"><a href="#" aria-controls="geniustable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                          <li className="paginate_button page-item active"><a href="#" aria-controls="geniustable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                          <li className="paginate_button page-item next" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={3} tabIndex={0} className="page-link">Next</a></li>
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
export default Main;