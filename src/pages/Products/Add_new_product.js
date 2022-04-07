import React, { Component, useEffect, useState } from "react";
import Layout from "../../Component/layout/Layout";
import ApiService from "../../services/api.service";
import { Button, Container, Modal } from 'react-bootstrap';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import slugify from 'slugify';
import { v4 as uuid } from 'uuid';


import {
    mainCategory,
    subCategory,
    childCategory,
    AdminaddProduct,
    Deleteproduct,
} from "../../api";
import toast from "react-hot-toast";
import { TokenService } from "../../services/storage.service";
import { Link, useHistory } from "react-router-dom";
import "./addproduct.css"
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
    featured_image: "",
    youtube_video_url: "",
    Product_Current_Price: "",
    Product_Previous_Price: "",
    Tags: "",
    is_active: "true",
    category: "",
    subcategory: "",
    child_category: "",
};

const AddProducts = () => {
    const unique_id = uuid();
    
    const[skuid,setskuid]=useState();
    const [ChildCategory, setChildCategory] = useState([]);
    const [values, setValues] = useState(tempValues);
    const [Category, setCategory] = useState([]);
    const [SubCategory, setSubCategory] = useState([]);
    async function GetMainCategory() {
        try {
            const mainres = await ApiService.get(mainCategory.GET);
            console.log(mainres, 'mainres')

            setCategory(mainres.data);
            if (mainres.data.length > 0) {
                GetSubCategory(mainres.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function GetSubCategory(id) {
        try {
            const subres = await ApiService.get(subCategory.GET_ID + `/${id}`);
            console.log(subres, 'subres')
            setSubCategory(subres.data);
            if (subres.data.results.length > 0) {
                GetChildCategory(subres.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function GetChildCategory(id) {
        try {
            const childres = await ApiService.get(childCategory.GET_ID + `/${id}`
            );
            setChildCategory(childres.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetMainCategory();
        setskuid(unique_id.slice(0, 18));
    }, []);



    const history = useHistory()

    const onChangeHandler = (e) => {
        console.log(e)
        let { type, name, value } = e.target
        console.log(e.target, name, value, type)
        if (type === 'file') {

            return setValues({ ...values, featured_image: e.target.files[0] })

        }
        setValues({ ...values, [name]: value })
    }
    console.log(values, 'values')
    const onSubmit = async (e) => {
        console.log('submit')
        e.preventDefault();

        const formData = new FormData()
        formData.append('featured_image', values.featured_image, values.featured_image.name)
        formData.append('Product_Sku', values.Product_Sku)
        formData.append('Name', values.Name)
        formData.append('Slug', {...values,Slug:slugdata}
        )
        formData.append('Product_Estimated_Shipping_Time', values.Product_Estimated_Shipping_Time)
        formData.append('Product_Stock', values.Product_Stock)
        formData.append('Product_Description', values.Product_Description)
        formData.append('Product_Buy_Return_Policy', values.Product_Buy_Return_Policy)
        formData.append('meta_description', values.meta_description)
        formData.append('youtube_video_url', values.youtube_video_url)
        formData.append('Product_Current_Price', values.Product_Current_Price)
        formData.append('Product_Previous_Price', values.Product_Previous_Price)
        formData.append('Tags', values.Tags)
        formData.append('is_active', values.is_active)
        formData.append('allow', values.allow)
        formData.append('category', values.category)
        formData.append('subcategory', values.subcategory)
        formData.append('child_category', values.child_category)

        const res = await ApiService.post(AdminaddProduct.POST, formData)
            .then((response) => {
                console.log(response)
                if (response.status == 201) {

                    history.push('/All_product')
                    toast.success("Product Added  Successfully");
                }
            })
            .catch((error) => {
                toast.error("Something Went Wrong!");
            });
    };


    const [inputList, setInputList] = useState([{ Keyword: "", colorcode: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { Keyword: "", colorcode: "" }]);
    };

    const [slugdata,setslug] = useState(" ");

  const getslug =  (e, value) => {
    if(value){
      setslug(slugify(value))
      console.log(slugify(value))
      setValues({ ...values, Slug: value})
  
    }

}


    return (
        <Layout>


            <div className="content-area">
                <div className="mr-breadcrumb">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="heading">
                                Add New Product{" "}
                                <Link
                                    className="add-btn"
                                    to="/vendor/products/types"
                                >
                                    <i className="fas fa-arrow-left" /> Back
                                </Link>
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
                                    <a href="/vendor/products/physical/create">
                                        Add New Product
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form method="POST" onSubmit={onSubmit}>
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

                                                    onChange={(e) =>{ getslug(e,e.target.value)
                                                        onChangeHandler(e)}} 
                                                    subheading="(In Any
                                                            Language)"
                                                />

                                                <TextInput
                                                    label={"Product Slug*"}
                                                    name="Slug"
                                                    value={slugdata}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                <TextInput
                                                    label={"Product Sku*"}
                                                    name="Product_Sku"
                                                    value={skuid}
                                                    onChange={onChangeHandler}
                                                    subheading="(In Any
                                                            Language)"
                                                />
                                                {/* <CheckButton
                                                    label={
                                                        "Allow Product Condition"
                                                    }
                                                    checked={
                                                        values.allow_product_condition
                                                    }
                                                    name="allow_product_condition"
                                                    onChange={onChangeHandler}
                                                /> */}
                                                <SelectInput
                                                    name="category"
                                                    label="Product Category*"

                                                    onChange={(e) => {
                                                        onChangeHandler(e);

                                                        GetSubCategory(
                                                            e.target.value
                                                        );

                                                    }}
                                                    value={values.category}
                                                ><option>Select Category</option>
                                                    {Category?.results?.reverse().map(
                                                        (cat) => (
                                                            <option
                                                                value={cat.id}
                                                            >
                                                                {cat.Name}
                                                            </option>
                                                        )
                                                    )}
                                                </SelectInput>
                                                <SelectInput
                                                    name="subcategory"
                                                    label="Product Sub Category*
                                                    "
                                                    value={values.subcategory}
                                                    onChange={onChangeHandler}

                                                    onChange={(e) => {
                                                        onChangeHandler(e);

                                                        GetChildCategory(
                                                            e.target.value
                                                        );
                                                    }}
                                                ><option>Select Category</option>
                                                    {SubCategory.reverse().map(
                                                        (cat) => (
                                                            <option
                                                                value={cat.id}
                                                            >
                                                                {cat.name}
                                                            </option>
                                                        )
                                                    )}
                                                </SelectInput>
                                                <SelectInput
                                                    onChange={onChangeHandler}

                                                    name="child_category"
                                                    label="Product child Category*"
                                                    onChange={(e) => {
                                                        onChangeHandler(e);


                                                    }}
                                                    value={
                                                        values.child_category
                                                    }
                                                ><option>Select Category</option>
                                                    {ChildCategory.reverse().map(
                                                        (cat) => (
                                                            <option
                                                                value={cat.id}
                                                            >
                                                                {cat.Name}
                                                            </option>
                                                        )
                                                    )}
                                                </SelectInput>

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
                                                                        0
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
                                                            name="Product_Stock"
                                                            type="text"
                                                            className="input-field"
                                                            placeholder="e.g 20"
                                                            onChange={onChangeHandler}
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
                                                    <div className="col-lg-12">
                                                        <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                                                            <Editor
                                                                name="Product_Description" onChange={onChangeHandler} />
                                                        </div>
                                                       
                                                    </div>

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
                                                    </div><div className="col-lg-12">
                                                        <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                                                            <Editor
                                                                name="Product_Description" onChange={onChangeHandler}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="showbox">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">Meta Tags *</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <ul id="metatags" className="myTags tagit ui-widget ui-widget-content ui-corner-all">
                                                                <li className="tagit-new"><input type="text" className="ui-widget-content ui-autocomplete-input" autoComplete="off" /></li></ul>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="left-area">
                                                                <h4 className="heading">
                                                                    Meta Description *
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="text-editor">
                                                                <textarea name="meta_description" className="input-field" placeholder="Meta Description" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                            <input
                                                                name="metatagsुु"
                                                                type="text"
                                                                onChange={onChangeHandler}

                                                                className="input-field"
                                                                placeholder="Enter Meta Tags"
                                                                min={0}
                                                            />
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
                                                                    onChange={onChangeHandler}
                                                                    className="input-field"
                                                                    placeholder="Meta Description"

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
                                                                id="image-preview" className="img-preview" style={{ background: 'url(/assets/images/1584934329adv-banner.jpg)' }}
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
                                                                    type="file" name="featured_image" className="img-upload" id="image-upload" onChange={onChangeHandler}
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
                                                                (In RS.)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input
                                                            name="Product_Current_Price"
                                                            step="0.1"
                                                            type="number"
                                                            onChange={onChangeHandler}

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
                                                            name="Product_Previous_Price"
                                                            onChange={onChangeHandler}

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
                                                                Tags *
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">

                                                        <li className="tagit-new">
                                                            <input
                                                                onChange={onChangeHandler}
                                                                name="Tags"
                                                                value={values.Tags}
                                                                type="text"
                                                                className="input-field"
                                                                autoComplete="off"
                                                            />
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="left-area">
                                                    <h4 className="heading">
                                                        Feature Tags
                                                    </h4>
                                                </div>
                                                {inputList.map((x, i) => {

                                                    return (
                                                        <div className="row">
                                                            <div className="col-lg-12" style={{ height: 30 }}>
                                                                <div className="featured-keyword-area">


                                                                    <div
                                                                        className="feature-tag-top-filds"
                                                                        id="feature-section"
                                                                    >
                                                                        <div className="feature-area"> {inputList.length !== 1 &&
                                                                            <span className="remove feature-remove">
                                                                                <i onClick={() => handleRemoveClick(i)} className="fas fa-times" />
                                                                            </span>}
                                                                            <div className="row">
                                                                                <div className="col-lg-6">
                                                                                    <input
                                                                                        type="text"
                                                                                        name="features[]"
                                                                                        value={x.Keyword}
                                                                                        onChange={e => handleInputChange(e, i)}
                                                                                        className="input-field"
                                                                                        placeholder="Enter Your Keyword"
                                                                                    />
                                                                                </div>
                                                                                <div className="col-lg-6">
                                                                                    <div className="input-group colorpicker-component cp colorpicker-element">
                                                                                        <input
                                                                                            type="text"
                                                                                            name="colors[]"
                                                                                            // value={x.colorcode}
                                                                                            onChange={e => handleInputChange(e, i)}
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
                                                                    {inputList.length - 1 === i &&

                                                                        <a
                                                                            onClick={handleAddClick}
                                                                            id="feature-btn"
                                                                            className="add-fild-btn"
                                                                        >
                                                                            <i className="icofont-plus" />{" "}
                                                                            Add More Field
                                                                        </a>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}


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

const SelectInput = ({ name, label, value, onChange, children, ...props }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="left-area">
                        <label className="heading">{label}</label>
                    </div>
                </div>
                <div className="col-lg-12">
                    <select name={name} onChange={onChange} {...props}>
                        {children}
                    </select>
                </div>
            </div>
        </>
    );
};