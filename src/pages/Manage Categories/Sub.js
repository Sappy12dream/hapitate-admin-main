import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import axios from "axios";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
import { addSubCategory, deleteSubCategory, editsubcatID, mainCategory, Serachsubcategory, subCategorylist, updateSubCategory } from "../../api";
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import slugify from 'slugify';



const Sub = ({ authorized }) => {

  const [deleteid, setid] = useState();
  /* add product */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  /* delete product */
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  /* Edit product */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  /* Backend Code */
  const [SubCategory, setSubCategory] = useState([]);
  const [Category, setCategory] = useState([]);

  async function MainCategory() {
    try {
      const mainres = await ApiService.get(mainCategory.GET);
      setCategory(mainres.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getAll_Category() {
    try {
      const sub_Category = await ApiService.get(subCategorylist.GET);
      console.log(sub_Category.data)
      setSubCategory(sub_Category.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getAll_Category();
    MainCategory();
  }, [])

  const temp = {
    name: " ",
    slug: " ",
    Status: " ",
    category: " ",
  }
  const [editFormData, setEditFormData] = useState(temp);
  const [values, setValues] = useState(temp)
  const history = useHistory()

  const onChangeHandler = (e) => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();

    const res = await ApiService.post(addSubCategory.POST, {...values,slug:slugdata})
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
          toast.success("Sub Category added Successfully");

          handleClose();
          getAll_Category();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };


  const deleteCategory = async (e, id) => {
    e.preventDefault();
    await ApiService.delete(deleteSubCategory.DEL(id)).then(res => {
      toast.success("Sub Category deleted Successfully");
      handleClose1();
      getAll_Category();
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });
  }



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
      name: editFormData.name,
      slug: editFormData.slug,
      Status: editFormData.Status,
      category: Number(editFormData.category),
    };

    const response = await ApiService.patch(editsubcatID.PATCH(deleteid), editedsubCategory)
    .then((response) => {
      console.log(response)
      if (response.status == 202) {
        toast.success("Sub Category Edited Successfully");

        handleClose2();
        getAll_Category();
      }
    })
    .catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  const updateCategoryStatus = async (e, id) => {
    console.log(e, id)
    const response = await ApiService.patch(editsubcatID.PATCH(id), { Status: e.target.value })
    console.log(response)
  }


  
  const searchItems = async (e, result) => {
    e.preventDefault();
    const response = await ApiService.get(Serachsubcategory.Search(result)).then(res => {
     
      // toast.success("Category deleted Successfully");
      console.log(res.data)
      setSubCategory(res.data)
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

  /* Backend Code*/
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
        <Button variant="danger" onClick={(e) => deleteCategory(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>

    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Sub Categories</h4>
            <ul className="links">
              <li>
                <a href="/admin">Dashboard </a>
              </li>
              <li><a href="javascript:;">Manage Categories</a></li>
              <li>
                <a href="/admin/subcategory">Sub Categories</a>
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
            />
</label></div>
                    </div>
                    <div className="col-sm-4 table-contents"><a className="add-btn" data-href="/admin/subcategory/create" id="add-data" data-toggle="modal" data-target="#modal1" onClick={handleShow}><i className="fas fa-plus" /> Add New Sub Category</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '131px' }}>Category</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '86px' }}>Name</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '112px' }}>Slug</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '182px' }}>Attributes</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '106px' }}>Status</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '104px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            SubCategory?.results?.map((data, i) => {
                              return (<tr role="row" className="odd">
                                <td tabIndex={0}>{data.category.Name}</td>
                                <td>{data.name}</td>
                                <td>{data.slug}</td>
                                <td>
                                  <div className="action-list"><a data-href="/admin/attribute/17/attrCreateForSubcategory" className="attribute" data-toggle="modal" data-target="#attribute"> <i className="fas fa-edit" />Create</a></div>
                                </td>
                                <td>
                                  <div className="action-list">
                                    <div className={`nice-select process select droplinks  ${data.Status === "Active" ? "drop-success" : "drop-danger"}`}>
                                      <span className={`current `}>{data.Status === "Active" ? "Activated" : "Deactivated"}</span>

                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="action-list"><a onClick={() => {
                                    setid(data.id)
                                    handleShow2()
                                    setEditFormData(data)
                                  }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                    <a onClick={() => {
                                      setid(data.id)
                                      handleShow1()
                                    }} href="javascript:;" data-href="/admin/subcategory/delete/17" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
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
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 16 entries</div>
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD NEW SUB CATEGORY</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Category*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="category"
                label="Product Category*"
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              >
                <option >Select Category</option>
                {Category?.results?.map(
                  (cat) => (
                    <option value={cat.id}>
                      {cat.Name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Name* (In Any Language)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="name" onChange={(e) =>{ getslug(e,e.target.value)
                                                      onChangeHandler(e)}} placeholder="Enter Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Slug*</label>
              <label >(In English)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="slug" onChange={onChangeHandler} value={slugdata} placeholder="Enter Slug" />
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
    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title>Edit  SUB CATEGORY</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleEditFormSubmit}>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Category*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="category" value={editFormData.category} onChange={handleEditFormChange} placeholder="Enter Name" />
            </div>
            
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Name* (In Any Language)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="name" value={editFormData.name} onChange={handleEditFormChange} placeholder="Enter Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Slug*</label>
              <label >(In English)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="slug" value={editFormData.slug} onChange={handleEditFormChange} placeholder="Enter Slug" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Status *</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="Status" label="Product Category*" value={editFormData.Status} onChange={handleEditFormChange} >
                <option >Status</option>
                <option value={"Active"}>Active</option>
                <option value={"Disabled"}>Disabled</option>

              </select>
            </div>
          </div>
          <Button type="submit" className="float-right" variant="secondary" > Update</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Close
        </Button>

      </Modal.Footer>
    </Modal>

  </Layout >
}
export default Sub;