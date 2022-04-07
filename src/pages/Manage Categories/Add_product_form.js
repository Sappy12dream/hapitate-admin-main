import React,{useEffect,useState} from "react";

import { Button,InputGroup,Form,Feedback,Row,Col} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import API from './API'
const schema = yup.object().shape({
  Name: yup.string().required(),
  Slug: yup.string().required(),
  icon: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

const Add_product_form=()=>  {

/* add movie */
const [Name, setName] = useState("");
const [Slug, setSlug] = useState("");
const [Category, setCategory] = useState([]);

useEffect(() => {
  refreshCategory();
}, []);

const refreshCategory = () => {
  API.get("/")
    .then((res) => {
      setCategory(res.data);
      // setName(res[0].name)
      // setGenre(res[0].genre)
      // setStarring(res[0].starring)
      // setMovieId(res[0].id)
    })
    .catch(console.error);
};

const onSubmit = (e) => {
  e.preventDefault();
  let category = { Name, Slug };
  API.post("/", category).then(() => refreshCategory());
};

function selectMovie(id) {
  let category = Category.filter((category) => category.id === id)[0];
  setName(category.Name);
  setSlug(category.Slug);
  /* setMovieId(item.id); */
}

/* add movie */


  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Name : '',
        Slug: '',
        icon: null,
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Name *
(In Any Language)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                /* onChange={handleChange} */
                /* isInvalid={!!errors.Name} */
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Name}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Slug *
In English</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Slug"
                name="Slug"
                value={Slug}
                onChange={(e) => setSlug(e.target.value)}
                /* value={values.Slug}
                onChange={handleChange} */
                /* isInvalid={!!errors.Slug} */
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Slug}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Set Icon *</Form.Label>
            <Form.Control
              type="file"
              name="Icon"
              onChange={handleChange}
              /* isInvalid={!!errors.Icon} */
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.Icon}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Button type="submit" onClick={onSubmit}>Create Category</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Add_product_form;