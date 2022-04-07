import React, { useState } from 'react'
import Layout from '../../Component/layout/Layout'
import Switch from './switch'
import "./Switch.css"
import toast from "react-hot-toast";
import ApiService from "../../services/api.service";
import { useHistory } from "react-router-dom";
import { AddSocialLink } from '../../api';
function Social_Links() {
    const [fb, setfb] = useState(false);
    const [gp, setgp] = useState(false);
    const [tw, settw] = useState(false);
    const [lk, setlk] = useState(false);
    console.log(gp)

    const temp = {
        facebook: "",
        is_active_fb: "true",
        google_plus: "",
        is_active_google_plus: "true",
        twitter: "",
        is_active_twitter: "true",
        linkedin: "",
        is_active_linkedin: "true",
    }




    const [values, setValues] = useState(temp)
    const history = useHistory()

    const onChangeHandler = (e) => {
        let { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const onSubmit = async (e) => {
        console.log('submit')
        e.preventDefault();
        const res = await ApiService.post(AddSocialLink.POST, values)
            .then((response) => {
                console.log(response)
                if (response.status == 201) {

                    history.push(`/SociallinkUpdate/${0}`);
                    toast.success("Social Links Successfully Saved");

                }
            })
            .catch((error) => {
                toast.error("Invalid Credentials!");
            });
    };


    return <Layout>
        <div className="content-area" style={{ paddingRight: 300 }}>
            <div className="mr-breadcrumb">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="heading">Social Links</h4>
                        <ul className="links">
                            <li>
                                <a href="/admin">Dashboard </a>
                            </li>
                            <li>
                                <a href="javascript:;">Social Settings</a>
                            </li>
                            <li>
                                <a href="/admin/social">Social Links</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="add-product-content1">
                <div className="product-description">
                    <div className="body-area">
                        <div className="gocover" style={{ background: 'url(/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)' }} />
                        <form id="geniusform" className="form-horizontal" onSubmit={onSubmit} method="POST">
                            <div className="alert alert-success validation" style={{ display: 'none' }}>
                                <button type="button" className="close alert-close"><span>×</span></button>
                                <p className="text-left" />
                            </div>
                            <div className="alert alert-danger validation" style={{ display: 'none' }}>
                                <button type="button" className="close alert-close"><span>×</span></button>
                                <ul className="text-left">
                                </ul>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-3" htmlFor="facebook">Facebook *</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="facebook" id="facebook" onChange={onChangeHandler} placeholder="http://facebook.com/" required type="text" />
                                </div>
                                <div className="col-sm-3">
                                    <label className="switch">
                                        <input type="checkbox" name="is_active_fb" onClick={() => setfb(!fb)} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-3" htmlFor="gplus">Google Plus *</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="gplus" id="gplus" placeholder="http://google.com/" onChange={onChangeHandler} required type="text" />
                                </div>
                                <div className="col-sm-3">
                                    <label className="switch">
                                        <input type="checkbox" name="is_active_google_plus" onClick={() => setgp(!gp)} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>

                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-3" htmlFor="twitter">Twitter *</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="twitter" id="twitter" placeholder="http://twitter.com/" required type="text" onChange={onChangeHandler} />
                                </div>
                                <div className="col-sm-3">
                                    <label className="switch">
                                        <input type="checkbox" name="is_active_twitter" onClick={() => setgp(!gp)} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-3" htmlFor="linkedin">Linkedin *</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="linkedin" id="linkedin" placeholder="http://linkedin.com/" required type="text" onChange={onChangeHandler} />
                                </div>
                                <div className="col-sm-3">
                                    <label className="switch">
                                        <input type="checkbox" name="is_active_linkedin" onClick={() => setgp(!gp)} onChange={onChangeHandler} />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-3">
                                    <div className="left-area">
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <button type="submit" className="submit-btn">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
}

export default Social_Links