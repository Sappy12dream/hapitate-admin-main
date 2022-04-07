import Layout from "../../Component/layout/Layout";
import React, { useEffect, useState } from "react";
import { deleteSubscriptionPlan, editSubscriptionplan, Subscriptionplan, Subscription_list } from "../../api";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { useHistory } from "react-router-dom";
import { Button, Container, Modal } from 'react-bootstrap';
import ApiService from '../../services/api.service'

const Subscription_plan = ({ authorized }) => {
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

  const [Subscription, setSubscription] = useState([])
  async function getAllList() {
    try {
      const subscription = await ApiService.get(Subscription_list.GET)
      console.log(subscription.data)
      setSubscription(subscription.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getAllList()
  }, [])


  const temp = {
    Title: " ",
    Currency_Symbol: " ",
    currency_code: " ",
    Cost: " ",
    Days: " ",
    Product_Limitations: " ",
    Details: " ",
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

    const editsubscription = {

     
      Title: editFormData.Title,
      Currency_Symbol: editFormData.Currency_Symbol,
      currency_code: editFormData.currency_code,
      Cost: editFormData.Cost,
      Days: editFormData.Days,
      Product_Limitations: editFormData.Product_Limitations,
      Details: editFormData.Details,
    };

    const res = await ApiService.patch(editSubscriptionplan.PATCH(deleteid), editsubscription)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
        
          toast.success("Subscription plan Edited Successfully");
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
    const res = await ApiService.post(Subscriptionplan.POST, values)
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
         
          toast.success("Subscription Plan added Successfully");
          handleClose();
          getAllList();



        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  const deletesubcription = async (e, id) => {
    e.preventDefault();
    const response = await ApiService.delete(deleteSubscriptionPlan.DEL(id)).then(res => {
      console.log(res.status);
     if(res.status == 204){
    
      toast.success("Subscription deleted Successfully");
      handleClose1();
      getAllList();
     }
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
                <input type="text" name="Title" value={editFormData.Title} onChange={handleEditFormChange} className="form-control" placeholder="Enter Subscription title" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Currency Sysmbol*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Currency_Symbol" value={editFormData.Currency_Symbol} onChange={handleEditFormChange} className="form-control" placeholder="Enter Currency Symbol" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Currency Code*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="currency_code" value={editFormData.currency_code} onChange={handleEditFormChange}  className="form-control" placeholder="Enter Currency Code" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Cost*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Cost" value={editFormData.Cost} onChange={handleEditFormChange} className="form-control" placeholder="Enter Subscription Cost" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Days*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Days" value={editFormData.Days} onChange={handleEditFormChange}  className="form-control" placeholder="Enter Subscription Days" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Product Limitations*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <select name="Product_Limitations" value={editFormData.Product_Limitations} onChange={handleEditFormChange}  >
                  <option >Select an Option</option>
                  <option value={"Unlimited"}>Unlimited</option>
                  <option value={"Limited"}>Limited</option>
                </select>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Details*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <textarea name="Details" value={editFormData.Details} onChange={handleEditFormChange}  col="6" rows="4"></textarea>
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
        <Button variant="danger" onClick={(e) => deletesubcription(e, deleteid)}>delete</Button>
      </Modal.Footer>
    </Modal>
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Vendor Subscription Plans</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li>
                <a href="#/admin/subscription">Vendor Subscription Plans</a>
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
                    <div className="col-sm-4 table-contents"><a className="add-btn" onClick={handleShow} id="add-data" data-toggle="modal" data-target="#modal1"><i className="fas fa-plus" /> Add New Subscription</a></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{ width: '100%' }}>
                        <thead>
                          <tr role="row">
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '80px' }}>Title</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '178px' }}>Currency Symbol</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '57px' }}>Cost</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '101px' }}>Duration</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '173px' }}>Product Allowed</th>
                            <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{ width: '148px' }}>Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            Subscription?.results?.map((data, i) => {
                              return (<tr role="row" className="odd">
                                <td tabIndex={0}>{data.Title}</td>
                                <td>{data.Currency_Symbol}</td>
                                <td>{data.Cost}</td>
                                <td>{data.Days}</td>
                                <td>{data.Product_Limitations}</td>
                                <td>
                                  <div className="action-list"><a onClick={() => {
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
                            )
                          }



                        </tbody>
                      </table>
                      <div id="geniustable_processing" className="dataTables_processing card" style={{ display: 'none' }}><img src="#/assets/images/spinner.gif" /></div>
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
        <Modal.Title>ADD NEW SUBSCRIPTION</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container >
          <form onSubmit={onSubmit}>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-right">Title*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Title" onChange={onChangeHandler} className="form-control" placeholder="Enter Subscription title" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Currency Sysmbol*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Currency_Symbol" onChange={onChangeHandler} className="form-control" placeholder="Enter Currency Symbol" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Currency Code*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="currency_code" onChange={onChangeHandler} className="form-control" placeholder="Enter Currency Code" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Cost*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Cost" onChange={onChangeHandler} className="form-control" placeholder="Enter Subscription Cost" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Days*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <input type="text" name="Days" onChange={onChangeHandler} className="form-control" placeholder="Enter Subscription Days" />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Product Limitations*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <select name="Product_Limitations" onChange={onChangeHandler} >
                  <option >Select an Option</option>
                  <option value={"Unlimited"}>Unlimited</option>
                  <option value={"Limited"}>Limited</option>
                </select>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-4 col-sm-6">
                <label className="text-dark text-center">Details*</label>
              </div>
              <div className="col-lg-8 col-sm-6">
                <textarea name="password" onChange={onChangeHandler} col="6" rows="4"></textarea>
              </div>
            </div>
            <Button type="submit" className="float-right" variant="secondary" > Create Plan</Button>


          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

  </Layout>
}

export default Subscription_plan;