import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Modal } from 'react-bootstrap';
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';
// import "./child.css"
import { addChildCategory, childCategory, childCategorylist, deletechildcategory, deleteChildCategory, editChildCategory, mainCategory, Searchchildcategory, subCategory } from "../../api";
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
import slugify from 'slugify';

const Child = ({ authorized }) => {



  /* backend code */


  const [ChildCate, setchild_Category] = useState([]);
  // const [ChildCategory, setChildCategory] = useState([]);


  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [ChildCategory, setChildCategory] = useState([]);


  async function GetMainCategory() {
    try {
        const mainres = await ApiService.get(mainCategory.GET);

        setCategory(mainres.data);
        if (mainres.data.length > 0) {
            GetSubCategory(mainres.data[0]?.id);
        }
    } catch (error) {
        console.log(error);
    }
}

async function GetSubCategory(id) {
    try {
        const subres = await ApiService.get(subCategory.GET_ID + `/${id}`);
        setSubCategory(subres.data);
        if (subres.data.length > 0) {
            GetChildCategory(subres.data[0]?.id);
        }
    } catch (error) {
        console.log(error);
    }
}
async function GetChildCategory(id) {
    try {
        const childres = await ApiService.get( childCategory.GET_ID + `/${id}`
        );
        setChildCategory(childres.data);
    } catch (error) {
        console.log(error);
    }
}

  useEffect(() => {
    GetMainCategory();
    getAll_Category();
  }, []);

  async function getAll_Category() {
    try {
      const child_Category = await ApiService.get(childCategorylist.GET);
      console.log(child_Category.data)
      setchild_Category(child_Category.data)
    } catch (error) {
      console.log(error)
    }
  }
 


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


  const temp = {
    Name: " ",
    Slug: " ",
    Status: " ",
    category: " ",
    sub_category: " ",
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
  // console.log(editFormData, 'edit')

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editchildCate = {
   
      Name: editFormData.Name,
      Slug: editFormData.Slug,
      Status: editFormData.Status,
      category: Number(editFormData.category),
      sub_category: Number(editFormData.sub_category),
    };

    const response = await ApiService.patch(editChildCategory.PATCH(deleteid), editchildCate)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
      
          toast.success("Category Edited Successfully");
          handleClose2();
          getAll_Category();
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
    const res = await ApiService.post(addChildCategory.POST, {...values,Slug:slugdata})
      .then((response) => {
        console.log(response)
        if (response.status == 201) {
          toast.success("Child Category added Successfully");

          handleClose();
          getAll_Category();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  const deleteChildCategory = async (e, id) => {
    e.preventDefault();
    await ApiService.delete(deletechildcategory.DEL(id)).then(res => {

      toast.success("Child Category deleted Successfully");
      handleClose1();
      getAll_Category();
    }
    ).catch((error) => {
      toast.error("Something Went Wrong!");
    });

  };

  const[tabledata,settabledata]=useState("false")
  const searchItems = async (e, result) => {
    e.preventDefault();
    const response = await ApiService.get(Searchchildcategory.Search(result)).then(res => {
     
      // toast.success("Category deleted Successfully");
      setchild_Category(res.data)
      if (res.data.results.length>0||result.length===0) {
        settabledata("true")
        console.log(res.data.results)

        console.log(tabledata)

      }else{
        settabledata("false")
                console.log(tabledata)

      }
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
        <Modal.Title>EDIT CHILD CATEGORY</Modal.Title>
      </Modal.Header>
      <Modal.Body >
          <form onSubmit={handleEditFormSubmit} method="POST">

          
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
              <label className="text-dark text-center">SubCategory*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="sub_category" value={editFormData.sub_category} onChange={handleEditFormChange} placeholder="Enter Name" />
            </div>
            
          </div>
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
              <select name="Status" label="Product Category*" value={editFormData.Status} onChange={handleEditFormChange}>
                <option >Status</option>
                <option value={"Active"}>Active</option>
                <option value={"Disabled"}>Disabled</option>

              </select>
            </div>
          </div>

            <Button type="submit" className="float-right" variant="secondary" > Update Category</Button>


          </form>
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
        <Button variant="danger" onClick={(e) => deleteChildCategory(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD NEW CHILD CATEGORY</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Category*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="category"
                onChange={(e) => {
                  onChangeHandler(e);

                  GetSubCategory(
                    e.target.value
                  );
                }}
                value={values.category}
              >
                <option >Select Category</option>
                {Category?.results?.reverse().map(
                  (data) => (
                    <option value={data.id}>
                      {data.Name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label className="text-dark text-center">Sub Category*</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <select name="sub_category"
                value={values.sub_category}
                onChange={(e) => {
                  onChangeHandler(e);
                  //   GetChildCategory(
                  //     e.target.value
                  // );
                }}
              >
                <option >Select Category</option>
                {SubCategory.reverse().map(
                  (data) => (
                    console.log("sadasd",data.id),
                    <option value={data.id}>
                      {data.name}
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
              <input type="text" className="form-control" name="Name" onChange={(e) =>{ getslug(e,e.target.value)
                                                      onChangeHandler(e)}}  placeholder="Enter Name" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
              <label >Slug*</label>
              <label >(In English)</label>
            </div>
            <div className="col-lg-8 col-sm-6">
              <input type="text" className="form-control" name="Slug" value={slugdata} onChange={onChangeHandler} placeholder="Enter Slug" />
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
            <h4 className="heading">Child Categories</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li><a href="javascript:;">Manage Categories</a></li>
              <li>
                <a href="#/admin/childcategory">Child Categories</a>
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
                    <div className="col-sm-4 table-contents"><a className="add-btn" data-href="#/admin/childcategory/create" onClick={handleShow} id="add-data" data-toggle="modal" data-target="#modal1"><i className="fas fa-plus" /> Add New Child Category</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Category</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Sub Category</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Name</th>
                           <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Status</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '200px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody> <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Slug</th>
                            

                          {
                            ChildCate?.results?.map((data, i) => {
                              if(tabledata){
                                return (
                              
                              
                                  <tr role="row" className="odd">
                                    <td tabIndex={0}>{data.category.Name}</td>
                                    <td>{data.sub_category.name}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Slug}</td>
    
                                    <td>
                                      <div className="action-list">
                                        <div className={`nice-select process select droplinks  ${data.Status === "Active" ? "drop-success" : "drop-danger"}`}>
                                          <span className={`current `}>{data.Status === "Active" ? "Activated" : "Deactivated"}</span>
    
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="action-list"><a  onClick={() => {
                                          setid(data.id)
                                          handleShow2()
                                          setEditFormData(data)
                                        }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a>
                                        <a onClick={() => {
                                          setid(data.id)
                                          handleShow1()
                                        }} data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a></div>
                                    </td>
                                  </tr>)
                              }
                              else if(!tabledata){
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Category</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Sub Category</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Name</th>
                           <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Status</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '200px' }}>Options</th>
                          </tr>
                        </thead>

                              }
                              

                            }
                            )
                          }


                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#/assets/images/1564224329loading3.gif" /></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 17 entries</div>
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
export default Child;