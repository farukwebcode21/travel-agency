import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const { register,formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully Added");
        reset();
      }
    });
  };
  return (
    <div className="container">
      <div className="add-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("country", { required: true, maxLength: 20 })}
            placeholder="country name"/>
            {errors.country && "Country name Max-Length 20 Word Required"}
          <input
            {...register("day", { required: true })}
                      placeholder="Offer Day & night" />
          <input
            {...register("descrip", { required: true, maxLength: 150 })}
            placeholder="description"
          />
          {errors.descrip && "Max-Length 150 Word Required"}
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
          />
          <input
            {...register("img", { required: true })}
            placeholder="image url"
          />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
