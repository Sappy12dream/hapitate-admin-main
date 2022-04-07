

/* main category */
export const mainCategory = {
    GET: "maincategory/",
};
export const addMainCategory = {
    POST: "main-category",

};
export const deleteMainCategory = {
    DEL: (id) => { return (`main-category/${id}`) },
}

export const editMainCategory = {
    PATCH: (id) => { return (`main-category/${id}`) },

};
export const SearchMainCategory = {
    Search: (value) => { return (`maincategory/?search=${value}`) },

};
/* Order */
export const orders = {
    GET: "/add-to-cart/",
    GET_ID:"order",};
export const AddOrder = {
    POST: "/order/",

};
export const DeleteOrder = {
    DEL: (id) => { return (`main-category/${id}`) },
}

export const EditOrder = {
    PATCH: (id) => { return (`main-category/${id}`) },

};

/* Sub Category */
export const subCategory = {
    GET: "subcategory/",
    GET_ID: "sub-category-list",
};
export const subCategorylist = {
    GET: "subcategory/",
};
export const addSubCategory = {
    POST: "sub-category",
};
export const Serachsubcategory = {
    Search: (value) => { return (`subcategory/?search=${value}`) },

};
export const updateSubCategory = {
    PATCH: (id) => { return (`/sub-category/${id}`) },

};
export const editsubcatID = {
    PATCH: (id) => { return (`/sub-category/${id}`) },

};



/* child category */
export const childCategory = {
    GET: "childcategory/",
    GET_ID: "child-category-list",
};

export const childCategorylist = {
    GET: "childcategory/",
};
export const addChildCategory = {
    POST: "child-category",

};
export const deletechildcategory = {
    DEL: (id) => { return (`child-category/${id}`) },

};
export const editChildCategory = {
    PATCH: (id) => { return (`child-category/${id}`) },

};

export const Searchchildcategory = {
    Search: (value) => { return (`childcategory/?search=${value}`) },

};





export const SetCoupons = {
    GET: "/accounts/admin-coupon/",
};

export const addSetCoupons = {
    POST: "/accounts/admin-coupon",
};
export const auth = {
    POST: "accounts/login",
};


export const packaging = {
    POST: "adminpackaging",
}

export const packaginglist = {
    GET: "adminpackaging/",
}
export const delete_packaging = {
    DEL: (id) => { return (`adminpackaging/${id}`) },
}
export const editpackaging = {
    PATCH: (id) => { return (`adminpackaging/${id}`) },

};





export const Subscriptionplan = {
    POST: "accounts/vendor-subscription",
}
export const Subscription_list = {
    GET: "accounts/vendor-subscription/",

}
export const deleteSubscriptionPlan = {
    DEL: (id) => { return (`accounts/vendor-subscription/${id}`) },
}
export const editSubscriptionplan = {
    PATCH: (id) => { return (`accounts/vendor-subscription/${id}`) },

};

export const servicelist = {
    GET: "adminservices/",
}
export const delete_services = {
    DEL: (id) => { return (`adminservices/${id}`) },
}

export const service = {
    POST: "adminservices",
}
export const EditService = {
    PATCH: (id) => { return (`/adminservices/${id}`) },

};

export const AddSocialLink = {
    POST: "/adminsocial-links",
};
export const EditSocialLink = {
    PATCH: (id) => { return (`/adminservices/${id}`) },
};


export const delete_setcoupon = {
    DEL: (id) => { return (`accounts/admin-coupon/${id}`) },
}


export const deleteChildCategory = {
    DEL: (id) => { return (`child-category/${id}`) },
}
export const deleteSubCategory = {
    DEL: (id) => { return (`sub-category/${id}`) },
}




export const stafflist = {
    GET: "/adminadmin-staff/",
}
export const delete_staff = {
    DEL: (id) => { return (`/adminadmin-staff/${id}`) },
}

export const addstaff = {
    POST: "/adminadmin-staff",
}
export const editstaff = {
    PATCH: (id) => { return (`/adminadmin-staff/${id}`) },

};


/* adminpickup-location */

export const PickupLocationList = {
    GET_ID: "adminpickup-location",
    GET: "/adminpickup-location/",
}

export const AddPickupLocation = {
    POST: "/adminpickup-location",
}
export const DeletePickupLocation = {
    DEL: (id) => { return (`adminpickup-location/${id}`) },
}
export const EditPickupLocation = {
    PATCH: (id) => { return (`adminpickup-location/${id}`) },

};

/* adminshipping-method */

export const ShipingMethodList = {
    GET: "adminshipping-method/",
}

export const AddShipingMethod = {
    POST: "adminshipping-method",
}
export const DeleteShipingMethod = {
    DEL: (id) => { return (`adminshipping-method/${id}`) },
}
export const EditShipingMethod = {
    PATCH: (id) => { return (`adminshipping-method/${id}`) },

};

/* Disputes*/

export const DisputesList = {
    GET: "adminshipping-method/",
}

export const AddDisputes = {
    POST: "adminshipping-method",
}
export const DeleteDisputes = {
    DEL: (id) => { return (`adminshipping-method/${id}`) },
}
export const EditDisputes = {
    PATCH: (id) => { return (`adminshipping-method/${id}`) },

};

/* Customer*/
export const Customerlist = {
    GET: "/accounts/customer",
}
export const Customerdetails = {
    GET_ID: "/accounts/customer",
}

export const DeleteCustomer = {
    DEL: (id) => { return (`/accounts/customer/${id}`) },
}
export const EditCustomer = {
    PATCH: (id) => { return (`/accounts/customer/${id}`) },

};
/* Vendor*/

export const Vendorlist = {
    GET: "accounts/vendor",
     GET_ID:"accounts/vendor",
}
export const DeleteVendor = {
    DEL: (id) => { return (`accounts/vendor/${id}`) },
}
export const EditVendor = {
    PATCH: (id) => { return (`accounts/vendor/${id}`) },

};
/* adminfooter-content*/

export const adminfooter = {
    GET: "/adminfooter-content/",
}
export const Deleteadminfooter = {
    DEL: (id) => { return (`adminfooter-content/${id}`) },
}
export const Editadminfooter = {
    PATCH: (id) => { return (`/adminfooter-content/${id}`) },

};
/* adminloaders*/

export const adminloaders = {
    GET_ID: "/adminloaders",
}
export const Addadminloaders = {
    POST: "adminloaders",
}
export const Deleteadminloaders = {
    DEL: (id) => { return (`adminloaders/${id}`) },
}
export const Editadminloaders = {
    PATCH: (id) => { return (`adminloaders/${id}`) },

};

/* Admin popupbanner*/

export const popupbanner = {
    GET_ID: "/adminpopup-banner",
}
export const Addpopupbanners = {
    POST: "/adminpopupbanner",
}

export const Editpopupbanner = {
    PATCH: (id) => { return (`adminpopup-banner/${id}`) },

};
/* Admin errorbanner*/

export const errorbanner = {
    GET_ID: "/adminpopup-banner",
}
export const Adderrorbanner = {
    POST: "/adminerrorbanner",
}

export const Editerrorbanner = {
    PATCH: (id) => { return (`adminpopup-banner/${id}`) },

};

/* Admin SLIDER*/

export const AddSliders = {
    POST: "/accounts/sliders",
}
export const GetSlider = {
    GET: "/accounts/sliders",
}

/* Admin Product*/
export const product = {
    GET: "/adminproducts/",
    GET_ID: "/adminadd-product",
}


export const AdminaddProduct = {
    POST: "/adminadd-product",
};
export const Deleteproduct = {
    DEL: (id) => { return (`adminadd-product/${id}`) },
}
export const Editproduct = {
    PATCH: (id) => { return (`adminadd-product/${id}`) },
};
export const Searchallproduct = {
    Search: (value) => { return (`adminproducts/?search=${value}`) },

};