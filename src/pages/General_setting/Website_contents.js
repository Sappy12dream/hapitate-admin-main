import React from "react";
import Layout from "../../Component/layout/Layout";
import { Redirect } from 'react-router-dom';

const Website_contents =({authorized})=>{
  if(!authorized)
  {
    return <Redirect to="/"/>
  }

    return <Layout>
      <div className="content-area">
  <div className="mr-breadcrumb">
    <div className="row">
      <div className="col-lg-12">
        <h4 className="heading">Website Contents</h4>
        <ul className="links">
          <li>
            <a href="#/admin">Dashboard </a>
          </li>
          <li>
            <a href="javascript:;">General Settings</a>
          </li>
          <li>
            <a href="#/admin/general-settings/contents">Website Contents</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="add-product-content1">
    <div className="row">
      <div className="col-lg-12">
        <div className="product-description">
          <div className="body-area">
            <div className="gocover" style={{background: 'url(#/assets/images/1564224329loading3.gif) no-repeat scroll center center rgba(45, 45, 45, 0.5)'}} />
            <form action="#/admin/general-settings/update/all" id="geniusform" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_token" defaultValue="EQe5MF7u0LektEgWn1hg6NGv2UmPvYFIuO9AwYHU" />
              <div className="alert alert-success validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <p className="text-left" />
              </div>
              <div className="alert alert-danger validation" style={{display: 'none'}}>
                <button type="button" className="close alert-close"><span>×</span></button>
                <ul className="text-left">
                </ul>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Website Title *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="text" className="input-field" placeholder="Write Your Site Title Here" name="title" defaultValue="Hapitate" required />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Whole Sale Max Quantity *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <input type="number" className="input-field" placeholder="Whole Sale Max Quantity" name="wholesell" defaultValue={6} required min={0} />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Theme Color *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group colorpicker-component cp colorpicker-element">
                      <input type="text" className="input-field color-field" name="colors" defaultValue="#0f78f2" />
                      <span className="input-group-addon"><i style={{backgroundColor: 'rgb(15, 120, 242)'}} /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Footer Color *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group colorpicker-component cp colorpicker-element">
                      <input type="text" className="input-field color-field" name="footer_color" defaultValue="#143250" />
                      <span className="input-group-addon"><i style={{backgroundColor: 'rgb(20, 50, 80)'}} /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">Copyright Color *</h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="input-group colorpicker-component cp colorpicker-element">
                      <input className="input-field color-field" type="text" name="copyright_color" defaultValue="#02020c" />
                      <span className="input-group-addon"><i style={{backgroundColor: 'rgb(2, 2, 12)'}} /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Use HTTPS
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/security/1" selected>Yes</option>
                      <option data-val={0} value="#/admin/general-settings/security/0">No</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Yes</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/security/1" className="option selected">Yes</li>
                        <li data-value="#/admin/general-settings/security/0" className="option">No</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Home Link On Menu
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-danger" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/home/1">Activated</option>
                      <option data-val={0} value="#/admin/general-settings/home/0" selected>Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-danger" tabIndex={0}><span className="current">Deactivated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/home/1" className="option">Activated</li>
                        <li data-value="#/admin/general-settings/home/0" className="option selected">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Capcha
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/capcha/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/capcha/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/capcha/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/capcha/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Sign Up Verification
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-danger" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/email-verify/1">Activated</option>
                      <option data-val={0} value="#/admin/general-settings/email-verify/0" selected>Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-danger" tabIndex={0}><span className="current">Deactivated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/email-verify/1" className="option">Activated</li>
                        <li data-value="#/admin/general-settings/email-verify/0" className="option selected">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Display Stock Number
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/vendor/general-settings/stock/1" selected>Activated</option>
                      <option data-val={0} value="#/vendor/general-settings/stock/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/vendor/general-settings/stock/1" className="option selected">Activated</li>
                        <li data-value="#/vendor/general-settings/stock/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Tawk.to
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-success" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/talkto/1" selected>Activated</option>
                      <option data-val={0} value="#/admin/general-settings/talkto/0">Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/talkto/1" className="option selected">Activated</li>
                        <li data-value="#/admin/general-settings/talkto/0" className="option">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Tawk.to Widget Code *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tawk-area">
                    <textarea name="talkto" defaultValue={"<script type=\"text/javascript\">\nvar Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();\n(function(){\nvar s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];\ns1.async=true;\ns1.src='https://embed.tawk.to/5bc2019c61d0b77092512d03/default';\ns1.charset='UTF-8';\ns1.setAttribute('crossorigin','*');\ns0.parentNode.insertBefore(s1,s0);\n})();\n</script>"} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Disqus
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="action-list">
                    <select className="process select droplinks drop-danger" style={{display: 'none'}}>
                      <option data-val={1} value="#/admin/general-settings/disqus/1">Activated</option>
                      <option data-val={0} value="#/admin/general-settings/disqus/0" selected>Deactivated</option>
                    </select>
                    <div className="nice-select process select droplinks drop-danger" tabIndex={0}><span className="current">Deactivated</span>
                      <ul className="list">
                        <li data-value="#/admin/general-settings/disqus/1" className="option">Activated</li>
                        <li data-value="#/admin/general-settings/disqus/0" className="option selected">Deactivated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Disqus Universal Code *
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tawk-area">
                    <textarea name="disqus" defaultValue={"<div id=\"disqus_thread\">         \n    <script>\n    /**\n    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.\n    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/\n    /*\n    var disqus_config = function () {\n    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable\n    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n    };\n    */\n    (function() { // DON'T EDIT BELOW THIS LINE\n    var d = document, s = d.createElement('script');\n    s.src = 'https://junnun.disqus.com/embed.js';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n    })();\n    </script>\n    <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>\n    </div>"} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="left-area">
                    <h4 className="heading">
                      Cronjob URL *
                    </h4>
                    <p className="sub-heading">(Copy This URL and paste this to cron job.) <a target="_blank" href="https://www.youtube.com/watch?v=Hw0fbM7E80Q">Check Tutorial</a> </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <textarea className="input-field" readOnly defaultValue={"#/vendor/subscription/check"} />
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

export default Website_contents;