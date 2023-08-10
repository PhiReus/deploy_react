import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TourModel from "../models/TourModel";

function TourDelete(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [tour, setTour] = useState({});

  useEffect(() => {
    TourModel.find(id)
    .then((res) => {
        setTour(res)
    })
    .catch((err) =>{
      console.err("lổi xảy ra : ",err)
    })
  }, [id]);

  const handleDelete = () => {
    TourModel.delete(id)
      .then((res) => {
          alert("Xóa tour thành công !")
          navigate("/");
      })
      .catch((err) => {
        console.error("Lỗi khi xóa :", err);
      });
  };

  return (
    <div>
      <h1>Tour Delete</h1>
      <h3>Bạn có muốn xóa tour này ?</h3>
      <h3>Tour du lịch {tour.name}</h3>
      <p>Giới thiệu : {tour.description}</p>
      <button onClick={handleDelete}>Yes</button>
      <Link to="/">Back</Link>
    </div>
  );
}

export default TourDelete;