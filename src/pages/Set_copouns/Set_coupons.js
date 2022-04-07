import React, { useEffect, useState } from "react";
import Layout from "../../Component/layout/Layout";
import { addSetCoupons, delete_setcoupon, SetCoupons } from "../../api";
import ApiService from "../../services/api.service";
import toast from "react-hot-toast";
import { Button, Container, Modal } from "react-bootstrap";

const Set_coupons = ({ authorized }) => {
  const [show, setShow] = useState(false);
  const [deleteid, setid] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [Setcoupon, setSetcoupon] = useState([]);
  async function getAllList() {
    try {
      const coupon = await ApiService.get(SetCoupons.GET);
      setSetcoupon(coupon.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllList();
  }, []);

  const temp = {
    Code: " ",
    Amount: " ",
    Used: "1",
    Type: "",
    Quantity: " ",
    Status: " ",
    Start_Date: " ",
    End_Date: " ",
  };

  const [values, setValues] = useState(temp);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    await ApiService.post(addSetCoupons.POST, values)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("New Coupon added Successfully");
          handleClose();
          getAllList();
        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  const deleteservices = async (e, id) => {
    e.preventDefault();
    await ApiService.delete(delete_setcoupon.DEL(id))
      .then((res) => {
        toast.success("Service Data deleted Successfully");
        handleClose1();
        getAllList();
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  return (
    <Layout>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You are about to delete this Service Plan. Everything under this
            category will be deleted.
          </p>
          <p>Do you want to proceed?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => deleteservices(e, deleteid)}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <form onSubmit={onSubmit}>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label
                    className="text-dark text-right"
                    style={{ whiteSpace: "break-spaces" }}
                  >
                    Code* in any Language
                  </label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <input
                    type="text"
                    name="Code"
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="Enter Subscription title"
                  />
                </div>
              </div>

              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">Type*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <select name="Type" onChange={onChangeHandler}>
                    <option>Select an Option</option>
                    <option value={"Discount by Percentage"}>
                      Discount By Percentage
                    </option>
                    <option value={"Discount by Amount"}>
                      Discount By Amount
                    </option>
                  </select>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">Amount*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <input
                    type="text"
                    name="Amount"
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="Enter Currency Symbol"
                  />
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">Quantity*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <select name="Quantity" onChange={onChangeHandler}>
                    <option>Select an Option</option>
                    <option value={"Unlimited"}>Unlimited</option>
                    <option value={"Limited"}>Limited</option>
                  </select>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">Status*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <select name="Status" onChange={onChangeHandler}>
                    <option>Select an Option</option>
                    <option value={1}>Active</option>
                    <option value={0}>Disable</option>
                  </select>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">Start Date*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <input
                    type="date"
                    name="Start_Date"
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="Enter Start date"
                  />
                </div>
              </div>
              <div className="row py-2">
                <div className="col-lg-4 col-sm-6">
                  <label className="text-dark text-center">End Date*</label>
                </div>
                <div className="col-lg-8 col-sm-6">
                  <input
                    type="date"
                    name="End_Date"
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="Enter End Date"
                  />
                </div>
              </div>
              <Button type="submit" className="float-right" variant="secondary">
                {" "}
                Create Plan
              </Button>
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="content-area">
        <div className="mr-breadcrumb">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="heading">Coupons</h4>
              <ul className="links">
                <li>
                  <a href="#admin">Dashboard </a>
                </li>
                <li>
                  <a href="#admin/coupon">Coupons</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="mr-table allproduct">
                <div
                  className="alert alert-success validation"
                  style={{ display: "none" }}
                >
                  <button type="button" className="close alert-close">
                    <span>×</span>
                  </button>
                  <p className="text-left" />
                </div>
                <div className="table-responsiv">
                  <div
                    id="geniustable_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row btn-area">
                      <div className="col-sm-4">
                        <div
                          className="dataTables_length"
                          id="geniustable_length"
                        >
                          <label>
                            Show{" "}
                            <select
                              name="geniustable_length"
                              aria-controls="geniustable"
                              className="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div
                          id="geniustable_filter"
                          className="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              className="form-control form-control-sm"
                              placeholder
                              aria-controls="geniustable"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-4 table-contents">
                        <a className="add-btn" onClick={handleShow} href="/">
                          <i className="fas fa-plus" /> Add New Coupon
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="geniustable"
                          className="table table-hover dt-responsive dataTable no-footer dtr-inline"
                          cellSpacing={0}
                          width="100%"
                          role="grid"
                          aria-describedby="geniustable_info"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "118px" }}
                              >
                                Code
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "194px" }}
                              >
                                Type
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "86px" }}
                              >
                                Amount
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "57px" }}
                              >
                                Used
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "141px" }}
                              >
                                Status
                              </th>
                              <th
                                className="sorting_disabled"
                                rowSpan={1}
                                colSpan={1}
                                style={{ width: "139px" }}
                              >
                                Options
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Setcoupon?.results?.map((child, i) => {
                              return (
                                <tr role="row" className="odd">
                                  <td tabIndex={0}>rererere</td>
                                  <td>Discount By Amount</td>
                                  <td>9$</td>
                                  <td>1</td>
                                  <td>
                                    <div className="action-list">
                                      <select
                                        className="process select droplinks drop-success"
                                        style={{ display: "none" }}
                                      >
                                        <option
                                          data-val={1}
                                          value="#admin/coupon/status/6/1"
                                          selected
                                        >
                                          Activated
                                        </option>
                                        &lt;
                                        <option
                                          data-val={0}
                                          value="#admin/coupon/status/6/0"
                                        >
                                          Deactivated
                                        </option>
                                        /select&gt;
                                      </select>
                                      <div
                                        className="nice-select process select droplinks drop-success"
                                        tabIndex={0}
                                      >
                                        <span className="current">
                                          Activated
                                        </span>
                                        <ul className="list">
                                          <li
                                            data-value="#admin/coupon/status/6/1"
                                            className="option selected"
                                          >
                                            Activated
                                          </li>
                                          <li
                                            data-value="#admin/coupon/status/6/0"
                                            className="option"
                                          >
                                            Deactivated
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action-list">
                                      <a href="#admin/coupon/edit/6">
                                        {" "}
                                        <i className="fas fa-edit" />
                                        Edit
                                      </a>
                                      <a
                                        onClick={() => {
                                          setid(child.id);
                                          handleShow1();
                                        }}
                                        className="delete"
                                        href="/"
                                      >
                                        <i className="fas fa-trash-alt" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div
                          id="geniustable_processing"
                          className="dataTables_processing card"
                          style={{ display: "none" }}
                        >
                          <img
                            src="#assets/images/1564224329loading3.gif"
                            alt="pro"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="geniustable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 6 of 6 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="geniustable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="geniustable_previous"
                            >
                              <a
                                href="/"
                                aria-controls="geniustable"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="/"
                                aria-controls="geniustable"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next disabled"
                              id="geniustable_next"
                            >
                              <a
                                href="/"
                                aria-controls="geniustable"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
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
  );
};

export default Set_coupons;
