import React, { useEffect, useState } from "react";
import Layout from "../../Component/layout/Layout";
import { Link, Redirect } from 'react-router-dom';
import ApiService from '../../services/api.service'
import { DeleteVendor, EditVendor, Vendorlist } from "../../api";
import { Button, Container, Modal } from 'react-bootstrap';
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TokenService } from "../../services/storage.service";
// import "./vendor.css"
const Vendor_list = ({ authorized }) => {
    const [deleteid, setid] = useState();

    /* delete  */
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    /* Edit  */
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const temp = {
        password: "",
        name: "",
        phone: "",
        email: "",
        store_name: "",
        address1: "",
        address2: "",
        country: "",
        state: " ",
        city_town: "",
        postcode_zip: "",
        Store_Phone: "",
  

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

        const editcustomer = {

            password: editFormData.password,
            name: editFormData.name,
            phone: editFormData.phone,
            email: editFormData.email,
            store_name: editFormData.store_name,
            address1: editFormData.address1,
            address2: editFormData.address2,
            country: editFormData.country,
            state: editFormData.state,
            city_town: editFormData.city_town,
            postcode_zip: editFormData.postcode_zip,
            Store_Phone: editFormData.Store_Phone,

        };

        const response = await ApiService.patch(EditVendor.PATCH(deleteid), editcustomer)
            .then((response) => {
                console.log(response)
                if (response.status == 202) {
                  
                    toast.success("Vendor Details Edited Successfully");
                    handleClose2();
                    getAllVendor();
                }
            })
            .catch((error) => {
                toast.error("Something Went Wrong!");
            });

    };

    const [Vendor, setVendor] = useState([])
    async function getAllVendor() {
        try {
            const Vendor = await ApiService.get(Vendorlist.GET)
            console.log(Vendor.data)
            setVendor(Vendor.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        getAllVendor()
    }, [])





    const DeletePickup = async (e, id) => {
        e.preventDefault();
        const response = await ApiService.delete(DeleteVendor.DEL(id)).then(res => {
            if (response.status == 204) {

            toast.success("Vendor deleted Successfully");
            handleClose1();
            getAllVendor();
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
                <Modal.Title>EDIT VENDOR DETAILS</Modal.Title>
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
                                <input type="text" className="form-control" name="phone" value={editFormData.phone} onChange={handleEditFormChange} placeholder="Enter phone" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Address1* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="address1" value={editFormData.address1} onChange={handleEditFormChange} placeholder="Enter Address1" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Address2* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="address2" value={editFormData.address2} onChange={handleEditFormChange} placeholder="Enter Address2" />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">City* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="city_town" value={editFormData.city_town} onChange={handleEditFormChange} placeholder="Enter City" />
                            </div>
                         </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">state * </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="state" value={editFormData.state} onChange={handleEditFormChange} placeholder="Enter state" />
                            </div>
                         </div>
                        <div className="row py-2">
                            <div className="col-lg-4 col-sm-6">
                                <label className="text-dark text-center">Postal Code* </label>
                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <input type="text" className="form-control" name="postcode_zip" value={editFormData.postcode_zip} onChange={handleEditFormChange} placeholder="Enter Postal Code" />
                            </div>
                         </div>

                        <Button type="submit" className="float-right" variant="secondary" > Update Vendor Details</Button>


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

        <div className="content-area">
            <div className="mr-breadcrumb">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="heading">Vendors</h4>
                        <ul className="links">
                            <li>
                                <a href="#admin">Dashboard </a>
                            </li>
                            <li>
                                <a href="javascript:;">Vendors</a>
                            </li>
                            <li>
                                <a href="#admin/vendors">Vendors List</a>
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
                                Vendor Registration :
                            </h4>
                            <div className="action-list">
                                <select className="process select1 vdroplinks drop-success" style={{ display: 'none' }}>
                                    <option data-val={1} value="#admin/general-settings/vendor-registration/1" selected>Activated</option>
                                    <option data-val={0} value="#admin/general-settings/vendor-registration/0">Deactivated</option>
                                </select>
                                <div className="nice-select process select1 vdroplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                    <ul className="list">
                                        <li data-value="#admin/general-settings/vendor-registration/1" className="option selected">Activated</li>
                                        <li data-value="#admin/general-settings/vendor-registration/0" className="option">Deactivated</li>
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
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '153px' }}>Store Name</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '227px' }}>Vendor Email</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '134px' }}>Mobile Number</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '137px' }}>Status</th>
                                                        <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '120px' }}>Options</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                         Vendor?.results?.map((data, i) => {
                                                            return (<tr role="row" className="odd">
                                                                <td tabIndex={0}>{data.name}</td>
                                                                <td>{data.email}</td>
                                                                <td>{data.phone}</td>
                                                                <td>
                                                                    <div className="action-list">
                                                                        <div className={`nice-select process select droplinks  ${data.Status === "Active" ? "drop-success" : "drop-danger"}`}>
                                                                            <span className={`current `}>{data.Status === "Active" ? "Activated" : "Deactivated"}</span>

                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                                        <div className="action-list"><a href="javascript:;" data-href="#admin/vendor/verify/305" className="verify" data-toggle="modal" data-target="#verify-modal"> <i className="fas fa-question" /> Ask For Verification</a>
                                                                        <Link to={`/Vendor-details/${data.id}`}> <i className="fas fa-eye" /> Details</Link>

                                                                            <a onClick={() => {
                                                                                setid(data.id)
                                                                                handleShow2()
                                                                                setEditFormData(data)
                                                                            }}> <i className="fas fa-edit" /> Edit</a>
                                                                            <a onClick={() => {
                                                                                setid(data.id)
                                                                                handleShow1()
                                                                            }} data-href="#admin/vendors/delete/305" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Delete</a></div>
                                                                    </div>
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
                                            <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 81 entries</div>
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
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="geniustable" data-dt-idx={7} tabIndex={0} className="page-link">9</a></li>
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
export default Vendor_list;