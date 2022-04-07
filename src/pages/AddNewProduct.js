import React, { Component, useEffect, useState } from "react";
import Layout from "../Component/layout/Layout";
import axios from "axios";
import ApiService from "../services/api.service";
import { Redirect } from 'react-router-dom';
import {
    auth,
    mainCategory,
    subCategory,
    childCategory,
    addProduct,
} from "../api";

const tempValues = {
    Product_Sku: "",
    Name: "",
    Slug: "",
    Product_Estimated_Shipping_Time: "",
    Product_Stock: "",
    Product_Description: "",
    Product_Buy_Return_Policy: "",
    meta_description: "",
    allow: false,
    // featured_image: "",
    youtube_video_url: "",
    Product_Current_Price: "",
    Product_Previous_Price: "",
    Tags: "",
    is_active: "",
    category: "",
    sub_category: "",
    child_category: "",
};

const AddProducts = ({authorized}) => {
   
    const [Category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    const [ChildCategory, setChildCategory] = useState([]);
    const [values, setValues] = useState(tempValues);

    async function getAllCategory() {
        try {
            
            const mainres = await ApiService.get(mainCategory.GET);
            const subres = await ApiService.get(subCategory.GET);
            const childres = await ApiService.get(childCategory.GET);

            console.log(mainres.data, "res");
            setCategory(mainres.data);
            setSubCategory(subres.data);
            setChildCategory(childres.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("lol");
        getAllCategory();
    }, []);

    const onChangeHandler = (e) => {
        let { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            return setValues({ ...values, [name]: checked });
        }
        return setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await ApiService.post(addProduct.POST, {
            Product_Sku: this.state.Product_Sku,
            Name: this.state.Name,
            Slug: this.state.Slug,
            Product_Estimated_Shipping_Time:
                this.state.Product_Estimated_Shipping_Time,
            Product_Stock: this.state.Product_Stock,
            Product_Description: this.state.Product_Description,
            Product_Buy_Return_Policy: this.state.Product_Buy_Return_Policy,
            meta_description: this.state.meta_description,
            featured_image: this.state.featured_image,
            youtube_video_url: this.state.youtube_video_url,
            Product_Current_Price: this.state.Product_Current_Price,
            postcode_zip: this.state.postcode_zip,
            Product_Previous_Price: this.state.Product_Previous_Price,
            Tags: this.state.Tags,
            is_active: this.state.is_active,
            main_category: this.state.category,
            sub_category: this.state.sub_category,
            child_category: this.state.child_category,
        });
    };
    if(!authorized)
    {
      return <Redirect to="/"/>
    }
    return (
        <Layout>
            <div className="content-area">
                <div className="mr-breadcrumb">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="heading">
                                Physical Product{" "}
                                <a
                                    className="add-btn"
                                    href="/vendor/products/types"
                                >
                                    <i className="fas fa-arrow-left" /> Back
                                </a>
                            </h4>
                            <ul className="links">
                                <li>
                                    <a href="/vendor/dashboard">Dashbord</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Products </a>
                                </li>
                                <li>
                                    <a href="/vendor/products">All Products</a>
                                </li>
                                <li>
                                    <a href="/vendor/products/types">
                                        Add New Product
                                    </a>
                                </li>
                                <li>
                                    <a href="/vendor/products/physical/create">
                                        Physical Product
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form
                    method="POST"
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                >
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="add-product-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product-description">
                                            <div className="body-area">
                                                <div
                                                    className="gocover"
                                                    style={{
                                                        background:
                                                            "url(/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)",
                                                    }}
                                                ></div>
                                                <div
                                                    className="alert alert-success validation"
                                                    style={{
                                                        display: "none",
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="close alert-close"
                                                    >
                                                        <span>×</span>
                                                    </button>
                                                    <p className="text-left" />
                                                </div>
                                                <div
                                                    className="alert alert-danger validation"
                                                    style={{
                                                        display: "none",
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="close alert-close"
                                                    >
                                                        <span>×</span>
                                                    </button>
                                                    <ul className="text-left"></ul>
                                                </div>
                                                <TextInput
                                                    label={"Product Name*"}
                                                    name="Name"
                                                    value={values.Name}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                <TextInput
                                                    label={"Product Slug*"}
                                                    name="Slug"
                                                    value={values.Slug}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                <TextInput
                                                    label={"Product Sku*"}
                                                    name="Product_Sku"
                                                    value={values.Product_Sku}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                <CheckButton
                                                    label={
                                                        "Allow Product Condition"
                                                    }
                                                    checked={
                                                        values.allow_product_condition
                                                    }
                                                    name="allow_product_condition"
                                                    onChange={onChangeHandler}
                                                />
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product
                                                                Category*{" "}
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (In Any
                                                                Language)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            type="text"
                                                            className="input-field"
                                                            placeholder="Product Slug"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    main_category:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product
                                                                SubCategory*{" "}
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (In Any
                                                                Language)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            type="text"
                                                            className="input-field"
                                                            placeholder="Product Slug"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    sub_category:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                youtube_video_url*{" "}
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (In Any
                                                                Language)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            type="text"
                                                            className="input-field"
                                                            placeholder="Product Slug"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    youtube_video_url:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <TextInput
                                                    label={"Featured Image*"}
                                                    name="featured_image "
                                                    value={values.featured_image}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Product
                                                                    Condition*
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <select name="product_condition">
                                                                <option
                                                                    value={2}
                                                                >
                                                                    New
                                                                </option>
                                                                <option
                                                                    value={1}
                                                                >
                                                                    Used
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Category*
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <select
                                                            name="category_id"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    category:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        >
                                                            <option value>
                                                                Select Category
                                                            </option>

                                                            {/*  {Category.map(
                                              (cate, i) => {
                                              return (
                                              <option value={cate.Name}>
                                                  {
                                                  cate.Name
                                                  }
                                              </option>
                                              );
                                              }
                                              )} */}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Sub Category*
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <select
                                                            name="subcategory_id"
                                                            disabled
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    sub_category:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        >
                                                            <option value>
                                                                Select Sub
                                                                Category
                                                            </option>

                                                            {/* {SubCategory.map(
                                              (subcat, i) => {
                                              return (
                                              <option value={subcat.Name}>
                                                  {
                                                  subcat.Name
                                                  }
                                              </option>
                                              );
                                              }
                                              )} */}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Child Category*
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <select
                                                            name="childcategory_id"
                                                            disabled
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    child_category:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        >
                                                            <option value>
                                                                Select Child
                                                                Category
                                                            </option>
                                                            {/*  {ChildCategory.map(
                                              (childcat, i) => {
                                              return (
                                              <option value>
                                                  {
                                                  childcat.Name
                                                  }
                                              </option>
                                              );
                                              }
                                              )} */}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div id="catAttributes" />
                                                <div id="subcatAttributes" />
                                                <div id="childcatAttributes" />
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area"></div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <ul className="list">
                                                            <li>
                                                                <input
                                                                    className="checkclick1"
                                                                    name="shipping_time_check"
                                                                    type="checkbox"
                                                                    id="check1"
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <label htmlFor="check1">
                                                                    Allow
                                                                    Estimated
                                                                    Shipping
                                                                    Time
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <TextInput
                                                    label={"Featured Image*"}
                                                    name="featured_image "
                                                    value={values.featured_image}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area"></div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <ul className="list">
                                                            <li>
                                                                <input
                                                                    name="size_check"
                                                                    type="checkbox"
                                                                    id="size-check"
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <label htmlFor="size-check">
                                                                    Allow
                                                                    Product
                                                                    Sizes
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div
                                                    className="showbox"
                                                    id="size-display"
                                                >
                                                    <div className="row">
                                                        <div className="col-lg-12"></div>
                                                        <div className="col-lg-12">
                                                            <div
                                                                className="product-size-details"
                                                                id="size-section"
                                                            >
                                                                <div className="size-area">
                                                                    <span className="remove size-remove">
                                                                        <i className="fas fa-times" />
                                                                    </span>
                                                                    <div className="row">
                                                                        <div className="col-md-4 col-sm-6">
                                                                            <label>
                                                                                Size
                                                                                Name
                                                                                :
                                                                                <span>
                                                                                    (eg.
                                                                                    S,M,L,XL,XXL,3XL,4XL)
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="size[]"
                                                                                className="input-field"
                                                                                placeholder="Size Name"
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-4 col-sm-6">
                                                                            <label>
                                                                                Size
                                                                                Qty
                                                                                :
                                                                                <span>
                                                                                    (Number
                                                                                    of
                                                                                    quantity
                                                                                    of
                                                                                    this
                                                                                    size)
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="number"
                                                                                name="size_qty[]"
                                                                                className="input-field"
                                                                                placeholder="Size Qty"
                                                                                defaultValue={
                                                                                    1
                                                                                }
                                                                                min={
                                                                                    1
                                                                                }
                                                                            />
                                                                        </div>
                                                                        
                                                                        <div className="col-md-4 col-sm-6">
                                                                            <label>
                                                                                Size
                                                                                Price
                                                                                :
                                                                                <span>
                                                                                    (This
                                                                                    price
                                                                                    will
                                                                                    be
                                                                                    added
                                                                                    with
                                                                                    base
                                                                                    price)
                                                                                </span>
                                                                            </label>
                                                                            <input
                                                                                type="number"
                                                                                name="size_price[]"
                                                                                className="input-field"
                                                                                placeholder="Size Price"
                                                                                defaultValue={
                                                                                    0
                                                                                }
                                                                                min={
                                                                                    0
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="javascript:;"
                                                                id="size-btn"
                                                                className="add-more"
                                                            >
                                                                <i className="fas fa-plus" />
                                                                Add More Size{" "}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area"></div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <ul className="list">
                                                            <li>
                                                                <input
                                                                    className="checkclick1"
                                                                    name="color_check"
                                                                    type="checkbox"
                                                                    id="check3"
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <label htmlFor="check3">
                                                                    Allow
                                                                    Product
                                                                    Colors
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Product
                                                                    Colors*
                                                                </h4>
                                                                <p className="sub-heading">
                                                                    (Choose Your
                                                                    Favorite
                                                                    Colors)
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div
                                                                className="select-input-color"
                                                                id="color-section"
                                                            >
                                                                <div className="color-area">
                                                                    <span className="remove color-remove">
                                                                        <i className="fas fa-times" />
                                                                    </span>
                                                                    <div className="input-group colorpicker-component cp colorpicker-element">
                                                                        <input
                                                                            type="text"
                                                                            name="color[]"
                                                                            defaultValue="#000000"
                                                                            className="input-field cp colorpicker-element"
                                                                        />
                                                                        <span className="input-group-addon">
                                                                            <i
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        "rgb(0, 0, 0)",
                                                                                }}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="javascript:;"
                                                                id="color-btn"
                                                                className="add-more mt-4 mb-3"
                                                            >
                                                                <i className="fas fa-plus" />
                                                                Add More Color{" "}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area"></div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <ul className="list">
                                                            <li>
                                                                <input
                                                                    className="checkclick1"
                                                                    name="whole_check"
                                                                    type="checkbox"
                                                                    id="whole_check"
                                                                    defaultValue={
                                                                        1
                                                                    }
                                                                />
                                                                <label htmlFor="whole_check">
                                                                    Allow
                                                                    Product
                                                                    Whole Sell
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area"></div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="featured-keyword-area">
                                                                <div
                                                                    className="feature-tag-top-filds"
                                                                    id="whole-section"
                                                                >
                                                                    <div className="feature-area">
                                                                        <span className="remove whole-remove">
                                                                            <i className="fas fa-times" />
                                                                        </span>
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <input
                                                                                    type="number"
                                                                                    name="whole_sell_qty[]"
                                                                                    className="input-field"
                                                                                    placeholder="Enter Quantity"
                                                                                    min={
                                                                                        0
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <input
                                                                                    type="number"
                                                                                    name="whole_sell_discount[]"
                                                                                    className="input-field"
                                                                                    placeholder="Enter Discount Percentage"
                                                                                    min={
                                                                                        0
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href="javascript:;"
                                                                    id="whole-btn"
                                                                    className="add-fild-btn"
                                                                >
                                                                    <i className="icofont-plus" />{" "}
                                                                    Add More
                                                                    Field
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="row"
                                                    id="stckprod"
                                                >
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product Stock*
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (Leave Empty
                                                                will Show Always
                                                                Available)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            name="stock"
                                                            type="text"
                                                            className="input-field"
                                                            placeholder="e.g 20"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    Product_Stock:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        />
                                                        <div className="checkbox-wrapper">
                                                            <input
                                                                type="checkbox"
                                                                name="measure_check"
                                                                className="checkclick"
                                                                id="allowProductMeasurement"
                                                                defaultValue={1}
                                                            />
                                                            <label htmlFor="allowProductMeasurement">
                                                                Allow Product
                                                                Measurement
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Product
                                                                    Measurement*
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select id="product_measure">
                                                                <option value>
                                                                    None
                                                                </option>
                                                                <option value="Gram">
                                                                    Gram
                                                                </option>
                                                                <option value="Kilogram">
                                                                    Kilogram
                                                                </option>
                                                                <option value="Litre">
                                                                    Litre
                                                                </option>
                                                                <option value="Pound">
                                                                    Pound
                                                                </option>
                                                                <option value="Custom">
                                                                    Custom
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div
                                                            className="col-lg-6 hidden"
                                                            id="measure"
                                                        >
                                                            <input
                                                                name="measure"
                                                                type="text"
                                                                id="measurement"
                                                                className="input-field"
                                                                placeholder="Enter Unit"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product
                                                                Description*
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="enter description"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                Product_Description:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product
                                                                Buy/Return
                                                                Policy*
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="enter Return policy"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                Product_Buy_Return_Policy:
                                                                    e.target
                                                                        .value,
                                                            });
                                                        }}
                                                    />{" "}
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="checkbox-wrapper">
                                                            <input
                                                                type="checkbox"
                                                                name="seo_check"
                                                                defaultValue={1}
                                                                className="checkclick"
                                                                id="allowProductSEO"
                                                            />
                                                            <label htmlFor="allowProductSEO">
                                                                Allow Product
                                                                SEO
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Meta Tags *
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <ul
                                                                id="metatags"
                                                                className="myTags tagit ui-widget ui-widget-content ui-corner-all"
                                                            >
                                                                <li className="tagit-new">
                                                                    <input
                                                                        type="text"
                                                                        className="ui-widget-content ui-autocomplete-input"
                                                                        autoComplete="off"
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Meta
                                                                    Description
                                                                    *
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="text-editor">
                                                                <textarea
                                                                    name="meta_description"
                                                                    className="input-field"
                                                                    placeholder="Meta Description"
                                                                    defaultValue={
                                                                        ""
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 text-center">
                                                        <button
                                                            type="submit"
                                                            className="addProductSubmit-btn"
                                                        >
                                                            Create Product
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="add-product-content">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product-description">
                                            <div className="body-area">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Current Featured
                                                                Image *
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="img-upload custom-image-upload">
                                                            <div
                                                                id="image-preview"
                                                                className="img-preview"
                                                                style={{
                                                                    background:
                                                                        "url(https://geniuscart.royalscripts.com/assets/vendor/images/upload.png)",
                                                                }}
                                                            >
                                                                <label
                                                                    htmlFor="image-upload"
                                                                    className="img-label"
                                                                    id="image-label"
                                                                >
                                                                    <i className="icofont-upload-alt" />
                                                                    Upload Image
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="photo"
                                                                    className="img-upload-p"
                                                                    id="image-upload"
                                                                />
                                                            </div>
                                                            <p className="img-alert mt-2 text-danger d-none" />
                                                            <p className="text">
                                                                Prefered Size:
                                                                (800x800) or
                                                                Square Size.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input
                                                    type="file"
                                                    name="gallery[]"
                                                    className="hidden"
                                                    id="uploadgallery"
                                                    accept="image/*"
                                                    multiple
                                                />
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product Gallery
                                                                Images *
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <a
                                                            href="#"
                                                            className="set-gallery"
                                                            data-toggle="modal"
                                                            data-target="#setgallery"
                                                        >
                                                            <i className="icofont-plus" />{" "}
                                                            Set Gallery
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product Current
                                                                Price*
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (In USD)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            name="price"
                                                            step="0.1"
                                                            type="number"
                                                            className="input-field"
                                                            placeholder="e.g 20"
                                                            min={0}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Product Previous
                                                                Price*
                                                            </h4>
                                                            <p className="sub-heading">
                                                                (Optional)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            name="previous_price"
                                                            step="0.1"
                                                            type="number"
                                                            className="input-field"
                                                            placeholder="e.g 20"
                                                            min={0}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="featured-keyword-area">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Feature Tags
                                                                </h4>
                                                            </div>
                                                            <div
                                                                className="feature-tag-top-filds"
                                                                id="feature-section"
                                                            >
                                                                <div className="feature-area">
                                                                    <span className="remove feature-remove">
                                                                        <i className="fas fa-times" />
                                                                    </span>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <input
                                                                                type="text"
                                                                                name="features[]"
                                                                                className="input-field"
                                                                                placeholder="Enter Your Keyword"
                                                                            />
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="input-group colorpicker-component cp colorpicker-element">
                                                                                <input
                                                                                    type="text"
                                                                                    name="colors[]"
                                                                                    defaultValue="#000000"
                                                                                    className="input-field cp colorpicker-element"
                                                                                />
                                                                                <span className="input-group-addon">
                                                                                    <i
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgb(0, 0, 0)",
                                                                                        }}
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a
                                                                href="javascript:;"
                                                                id="feature-btn"
                                                                className="add-fild-btn"
                                                            >
                                                                <i className="icofont-plus" />{" "}
                                                                Add More Field
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="left-area">
                                                            <h4 className="heading">
                                                                Tags *
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <ul
                                                            id="tags"
                                                            className="myTags tagit ui-widget ui-widget-content ui-corner-all"
                                                        >
                                                            <li className="tagit-new">
                                                                <input
                                                                    type="text"
                                                                    className="ui-widget-content ui-autocomplete-input"
                                                                    autoComplete="off"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AddProducts;

const TextInput = ({ name, label, value, onChange, subheading, ...props }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="left-area">
                        <label htmlFor={label} className="heading">
                            {label}
                        </label>

                        <p className="sub-heading">{subheading}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <input
                        type="text"
                        name={name}
                        id={label}
                        value={value}
                        onChange={onChange}
                        className="input-field"
                        {...props}
                    />
                </div>
            </div>
        </>
    );
};

const CheckButton = ({ name, label, value, onChange, ...props }) => {
    return (
        <>
            <div className="checkbox-wrapper">
                <input
                    className="checkclick"
                    name={name}
                    type="checkbox"
                    onChange={onChange}
                    {...props}
                />
                <label htmlFor={name}>{label}</label>
            </div>
        </>
    );
};
