import Layout from "../../Component/layout/Layout";
import { Redirect, useHistory } from 'react-router-dom';
import { adminfooter, Editadminfooter } from "../../api";
import ApiService from '../../services/api.service'
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";

const G_Footer = ({ authorized }) => {
  const [deleteid, setid] = useState();
  const history = useHistory()


  const temp = {
    footer_text: " ",
    copyright_text: " ",

  }
  const [Footer, setFooter] = useState([]);

  async function getcontent() {
    try {
      const footer = await ApiService.get(adminfooter.GET);
      setid(1)
      
      console.log(footer.data)
      setFooter(footer.data)


    } catch (error) {
      console.log(error)
    }
  }
  const [onLoadText, setText] = useState("");

    const onScreenLoad = () => {
      
    }
  
  useEffect(async() => {
     let result = await ApiService.get(adminfooter.GET);
     result = await result.json();
     setEditFormData(result)
  }, [])

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

    const edit = {

      footer_text: editFormData.footer_text,
      copyright_text: editFormData.copyright_text,

    };

    const response = await ApiService.patch(Editadminfooter.PATCH(1), edit)
      .then((response) => {
        console.log(response)
        if (response.status == 202) {
         
          toast.success("Footer Changed Successfully");
          history.push('/')


        }
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });

  };


  if (!authorized) {
    return <Redirect to="/" />
  }

  return <Layout>
    
    <div className="content-area">
      <div className="mr-breadcrumb">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading">Website Footer</h4>
            <ul className="links">
              <li>
                <a href="#/admin">Dashboard </a>
              </li>
              <li>
                <a href="javascript:;">General Settings</a>
              </li>
              <li>
                <a href="#/admin/general-settings/footer">Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="add-product-content1" >
        <div className="row">
          <div className="col-lg-12">
            <div className="product-description">
              <div className="body-area">
                <div className="gocover" style={{ background: 'url(#/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)' }} />
        
                <form onSubmit={handleEditFormSubmit} method="POST">
                  <div className="alert alert-success validation" style={{ display: 'none' }}>
                    <button type="button" className="close alert-close"><span>×</span></button>
                    <p className="text-left" />
                  </div>
                  <div className="alert alert-danger validation" style={{ display: 'none' }}>
                    <button type="button" className="close alert-close"><span>×</span></button>
                    <ul className="text-left">
                    </ul>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-3">
                      <div className="left-area">
                        <h4 className="heading">
                          Footer Text *
                          <p className="sub-heading">(In Any Language)</p>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tawk-area">
                        <textarea className="input-field" name="footer_text" value={editFormData.footer_text} onChange={handleEditFormChange} required defaultValue={" Enter footer text here .... "} />
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-3">
                      <div className="left-area">
                        <h4 className="heading">
                          Copyright text *
                          <p className="sub-heading">(In Any Language)</p>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tawk-area">
                        <textarea className="input-field" name="copyright_text" value={editFormData.copyright_text} onChange={handleEditFormChange} required defaultValue={" Enter copyright_text here ... "} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-3">
                      <div className="left-area">
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button className="addProductSubmit-btn" type="submit">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default G_Footer;