import React from "react";
import Layout from "../../Component/layout/Layout";

const Product_Catalogs=()=>{
    return <Layout>
        <div className="content-area">
    <div className="mr-breadcrumb">
        <div className="row">
            <div className="col-lg-12">
                <h4 className="heading">Products</h4>
                <ul className="links">
                    <li>
                        <a href="#/admin">Dashboard </a>
                    </li>
                    <li>
                        <a href="javascript:;">Products </a>
                    </li>
                    <li>
                        <a href="#/admin/products">Catalog Products</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="product-area">
        <div className="row">
            <div className="col-lg-12">
                <div className="mr-table allproduct">
                    <div className="alert alert-success validation" style={{display: 'none'}}>
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
                                    <table id="geniustable" className="table table-hover dt-responsive dataTable no-footer dtr-inline" cellSpacing={0} width="100%" role="grid" aria-describedby="geniustable_info" style={{width: '100%'}}>
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '350px'}}>Name</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '46px'}}>Type</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '80px'}}>Stock</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '44px'}}>Price</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '115px'}}>Status</th>
                                                <th className="sorting_disabled" rowSpan={1} colSpan={1} style={{width: '101px'}}>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>Physical Product Title Title will Be Here 99u<br /><small>ID: <a href="#/item/physical-product-title-title-will-be-here-99u-myy7236gfd" target="_blank">00000180</a></small><small className="ml-2"> SKU: <a href="#/item/physical-product-title-title-will-be-here-99u-myy7236gfd" target="_blank">myy7236gFD</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/180/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/180/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/180/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/180/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/180"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={180} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/180" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/180/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>Physical Product Title Title will Be Here 99<br /><small>ID: <a href="#/item/physical-product-title-title-will-be-here-99-tcv6794kxs" target="_blank">00000178</a></small><small className="ml-2"> SKU: <a href="#/item/physical-product-title-title-will-be-here-99-tcv6794kxs" target="_blank">Tcv6794KXS</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/178/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/178/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/178/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/178/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/178"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={178} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/178" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/178/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>Physical Product Title Title will Be Here 102<br /><small>ID: <a href="#/item/physical-product-title-title-will-be-here-102-9gn6494iun" target="_blank">00000175</a></small><small className="ml-2"> SKU: <a href="#/item/physical-product-title-title-will-be-here-102-9gn6494iun" target="_blank">9gn6494iUN</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/175/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/175/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/175/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/175/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/175"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={175} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/175" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/175/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>Physical Product Title Title will Be Here 0131 Tes...<br /><small>ID: <a href="#/item/physical-product-title-title-will-be-here-0131-test-bxf62830r9" target="_blank">00000174</a></small><small className="ml-2"> SKU: <a href="#/item/physical-product-title-title-will-be-here-0131-test-bxf62830r9" target="_blank">bXf62830R9</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$120</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/174/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/174/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/174/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/174/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/174"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={174} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/174" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/174/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>Top Rated product title will be here according to ...<br /><small>ID: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-6vb6172gwr" target="_blank">00000170</a></small><small className="ml-2"> SKU: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-6vb6172gwr" target="_blank">6Vb6172gWR</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/170/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/170/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/170/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/170/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/170"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={170} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/170" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/170/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>Top Rated product title will be here according to ...<br /><small>ID: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-trg5938wny" target="_blank">00000169</a></small><small className="ml-2"> SKU: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-trg5938wny" target="_blank">TRg5938WNy</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/169/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/169/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/169/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/169/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/169"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={169} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/169" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/169/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>Revel - Real Estate Huuu<br /><small>ID: <a href="#/item/revel-real-estate-huuu-tbs53803yh" target="_blank">00000168</a></small><small className="ml-2"> SKU: <a href="#/item/revel-real-estate-huuu-tbs53803yh" target="_blank">tbs53803yh</a></small></td>
                                                <td>Physical</td>
                                                <td>Out Of Stock</td>
                                                <td>$300</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/168/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/168/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/168/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/168/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/168"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={168} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/168" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/168/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>Zain - Digital Agency and Startup HTML Template<br /><small>ID: <a href="#/item/zain-digital-agency-and-startup-html-template-rxp8737le" target="_blank">00000165</a></small><small className="ml-2"> SKU: <a href="#/item/zain-digital-agency-and-startup-html-template-rxp8737le" target="_blank">RXp8737Le</a></small></td>
                                                <td>Physical</td>
                                                <td>4588</td>
                                                <td>$300</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-danger" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/165/1">Activated</option>&lt;<option data-val={0} value="#/admin/products/status/165/0" selected>Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-danger" tabIndex={0}><span className="current">Deactivated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/165/1" className="option">Activated</li>
                                                                <li data-value="#/admin/products/status/165/0" className="option selected">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/165"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={165} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/165" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/165/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0}>32 ''NAPCO D/GLASS ULTRA SLIM HD lED TV ES700E<br /><small>ID: <a href="#/item/32-napco-dglass-ultra-slim-hd-led-tv-es700e-3uz9903ofs" target="_blank">00000135</a></small><small className="ml-2"> SKU: <a href="#/item/32-napco-dglass-ultra-slim-hd-led-tv-es700e-3uz9903ofs" target="_blank">3uZ9903ofs</a></small></td>
                                                <td>Physical</td>
                                                <td>396</td>
                                                <td>$300</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/135/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/135/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/135/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/135/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/135"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={135} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/135" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/135/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td tabIndex={0}>Top Rated product title will be here according to ...<br /><small>ID: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-0af12392v" target="_blank">00000123</a></small><small className="ml-2"> SKU: <a href="#/item/top-rated-product-title-will-be-here-according-to-your-wish-123-0af12392v" target="_blank">pr608jsv</a></small></td>
                                                <td>Physical</td>
                                                <td>Unlimited</td>
                                                <td>$100</td>
                                                <td>
                                                    <div className="action-list"><select className="process select droplinks drop-success" style={{display: 'none'}}>
                                                            <option data-val={1} value="#/admin/products/status/123/1" selected>Activated</option>&lt;<option data-val={0} value="#/admin/products/status/123/0">Deactivated</option>/select&gt;
                                                        </select>
                                                        <div className="nice-select process select droplinks drop-success" tabIndex={0}><span className="current">Activated</span>
                                                            <ul className="list">
                                                                <li data-value="#/admin/products/status/123/1" className="option selected">Activated</li>
                                                                <li data-value="#/admin/products/status/123/0" className="option">Deactivated</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="godropdown"><button className="go-dropdown-toggle"> Actions<i className="fas fa-chevron-down" /></button>
                                                        <div className="action-list"><a href="#/admin/products/edit/123"> <i className="fas fa-edit" /> Edit</a><a href="javascript" className="set-gallery" data-toggle="modal" data-target="#setgallery"><input type="hidden" defaultValue={123} /><i className="fas fa-eye" /> View Gallery</a><a data-href="#/admin/products/feature/123" className="feature" data-toggle="modal" data-target="#modal2"> <i className="fas fa-star" /> Highlight</a><a href="javascript:;" data-href="#/admin/products/catalog/123/0" data-toggle="modal" data-target="#confirm-delete" className="delete"><i className="fas fa-trash-alt" /> Remove Catalog</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="geniustable_processing" className="dataTables_processing card" style={{display: 'none'}}><img src="#/assets/images/1564224329loading3.gif" /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="geniustable_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div>
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
export default Product_Catalogs;