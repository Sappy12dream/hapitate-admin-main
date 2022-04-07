import React, { useEffect, useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";
import Layout from "../../Component/layout/Layout";
// import "./Customer_list.css"
import { Customerlist, EditCustomer, DeleteCustomer } from "../../api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
import { Button, Container, Modal } from 'react-bootstrap';
import ApiService from '../../services/api.service'


const Customer_list = ({ authorized }) => {
    const [loading,setloading]= useState(true)
    const [Customer, setCustomer] = useState([])
    
    async function getAllCustomer() {
        try {
            const Customer = await ApiService.get(Customerlist.GET)
            console.log(Customer.data)
            setCustomer(Customer.data)
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getAllCustomer()
        

    }, [])

    if(loading){
        <h1>loading..</h1>
    }
    const temp = {
        image: " ",
        password: " ",
        name: " ",
        Phone: " ",
        email: " ",
        permissions: " ",
  

    }

    const [deleteid, setid] = useState();

    const [editFormData, setEditFormData] = useState(temp);
    /* delete  */
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    /* Edit  */
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


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

        const editcustomer = {

            Profile_image: editFormData.Profile_image,
            Name: editFormData.Name,
            Email: editFormData.Email,
            Phone: editFormData.Phone,
            Fax: editFormData.Fax,
            City: editFormData.City,
            Country: editFormData.Country,
            Zip: editFormData.Zip,
            location: editFormData.location,
            Address: editFormData.Address,

        };

        const response = await ApiService.patch(EditCustomer.PATCH(deleteid), editcustomer)
            .then((response) => {
                console.log(response)
                if (response.status == 202) {
                  
                    toast.success("Customer Details Edited Successfully");
                    handleClose2();
                    getAllCustomer();
                }
            })
            .catch((error) => {
                toast.error("Something Went Wrong!");
            });

    };



    const Deletecustomer = async (e, id) => {
        e.preventDefault();
        const response = await ApiService.delete(DeleteCustomer.DEL(id)).then(res => {
            if(response.status===204){
                
                toast.success("Customer Account deleted Successfully");
                handleClose1();
                getAllCustomer();
            }
            
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
                <Modal.Title>Edit Customer Details</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Container >
                    <form onSubmit={handleEditFormSubmit} method="POST">
                        

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
                                <label className="text-dark text-center">Email* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="email" value={editFormData.email} onChange={handleEditFormChange} placeholder="Enter email" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Phone*</label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="Phone" value={editFormData.Phone} onChange={handleEditFormChange} placeholder="Enter phone" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Address* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="Address" value={editFormData.Address} onChange={handleEditFormChange} placeholder="Enter Address" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">City* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="City" value={editFormData.City} onChange={handleEditFormChange} placeholder="Enter City" />
                            </div>
                         </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Fax* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="Fax" value={editFormData.Fax} onChange={handleEditFormChange} placeholder="Enter Fax" />
                            </div>
                         </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Postal Code* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="Zip" value={editFormData.Zip} onChange={handleEditFormChange} placeholder="Enter Postal Code" />
                            </div>
                         </div>


                            <Button type="submit" className="float-right" variant="secondary" > Edit Customer Details</Button>


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
                <Button variant="danger" onClick={(e) => Deletecustomer(e, deleteid)}>delete</Button>
            </Modal.Footer>
        </Modal>
        <div className="content-area">
            <div className="mr-breadcrumb">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="heading">Customers</h4>
                        <ul className="links">
                            <li>
                                <a href="#/admin">Dashboard </a>
                            </li>
                            <li>
                                <a href="#/admin/users">Customers</a>
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
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '150px' }}>Name</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '220px' }}>Email</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '472px' }}>Options</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        Customer?.results?.map((data, i) => {
                                                            return (<tr role="row" className="odd">
                                                                <td tabIndex={0}>{data.name}</td>
                                                                <td>{data.email}</td>
                                                                <td>
                                                                    <div className="action-list"><Link to={`/customer-details/${data.id}`}> <i className="fas fa-eye" /> Details</Link>
                                                                        <a onClick={() => {
                                                                            setid(data.id)
                                                                            handleShow2()
                                                                            setEditFormData(data)
                                                                        }} className="edit" data-toggle="modal" data-target="#modal1"> <i className="fas fa-edit" />Edit</a><a href="javascript:;" className="send" data-email="vendor@gmail.com" data-toggle="modal" data-target="#vendorform"><i className="fas fa-envelope" /> Send</a><select className="process select droplinks drop-success" style={{ display: 'none' }}>
                                                                            <option data-val={0} value="#/admin/users/ban/13/1">Block</option>
                                                                            <option data-val={1} value="#/admin/users/ban/13/0" selected>UnBlock</option>
                                                                        </select>
                                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">UnBlock</span>
                                                                            <ul className="list">
                                                                                <li data-value="#/admin/users/ban/13/1" className="option">Block</li>
                                                                                <li data-value="#/admin/users/ban/13/0" className="option selected">UnBlock</li>
                                                                            </ul>
                                                                        </div><a onClick={() => {
                                                                            setid(data.id)
                                                                            handleShow1()
                                                                        }} data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /></a>
                                                                    </div>
                                                                </td>
                                                            </tr>)

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
                                            <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 281 entries</div>
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
                                                    <li className="paginate_button page-item disabled" id="geniustable_ellipsis"><a href="#" aria-controls="geniustable" data-dt-idx={6} tabIndex={0} className="page-link">…</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={7} tabIndex={0} className="page-link">29</a></li>
                                                    <li className="paginate_button page-item next" id="geniustable_next"><a href="#" aria-controls="geniustable" data-dt-idx={8} tabIndex={0} className="page-link">Next</a></li>
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
export default Customer_list;