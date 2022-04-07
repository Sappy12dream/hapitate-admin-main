import React from 'react';
import Layout from '../Component/layout/Layout';
import { Redirect } from 'react-router-dom';
function Dashboard({authorized}) {
  if(!authorized)
  {
    return <Redirect to="/"/>
  }
  return <Layout>

<div className="content-area">
  <div className="row row-cards-one">
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg1">
        <div className="left">
          <h5 className="title">Orders Pending! </h5>
          <span className="number">0</span>
          <a href="/vendor/orders" className="link">View All</a>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-dollar" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg2">
        <div className="left">
          <h5 className="title">Orders Procsessing!</h5>
          <span className="number">0</span>
          <a href="/vendor/orders" className="link">View All</a>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-truck-alt" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg3">
        <div className="left">
          <h5 className="title">Orders Completed!</h5>
          <span className="number">0</span>
          <a href="/vendor/orders" className="link">View All</a>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-check-circled" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg4">
        <div className="left">
          <h5 className="title">Total Products!</h5>
          <span className="number">0</span>
          <a href="/vendor/products" className="link">View All</a>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-cart-alt" />
          </div>
        </div>
      </div>
    </div>  
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg5">
        <div className="left">
          <h5 className="title">Total Item Sold!</h5>
          <span className="number">0</span>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-shopify" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 col-lg-6 col-xl-4">
      <div className="mycard bg6">
        <div className="left">
          <h5 className="title">Total Earnings!</h5>
          <span className="number">$0</span>
        </div>
        <div className="right d-flex align-self-center">
          <div className="icon">
            <i className="icofont-dollar-true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </Layout>
}

export default Dashboard;
