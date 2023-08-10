import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TourModel from "../models/TourModel";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("trường này là bắt buộc"),
  price: Yup.string().required("trường này là bắt buộc"),
});

function TourAdd(props) {
  const navigate = useNavigate();
  const form = {
    name: "",
    price: "",
    description: "",
  };

  const handleSubmit = (data) => {
    TourModel.store(data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Xảy ra lổi :", err);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Tour</h1>
      <Formik
        initialValues={form}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name : </label>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="price">Price : </label>
              <Field name="price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div>
              <label htmlFor="description">Description : </label>
              <Field name="description" as="textarea" />
            </div>
            <button type="submit">Submit</button>
            <Link to="/">Back</Link>

          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TourAdd;
