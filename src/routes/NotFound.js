import React, { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

export default function NotFoundPage() {
  // return <Navigate to="/series-frontend/" />;
  const navigate = useNavigate();

  const params = useSearchParams();



  useEffect(() => {
    console.log(params);
    setTimeout(() => {
      navigate("/series-frontend/",{state:'Returned from not found'});
    }, 1000);
  }, []);

  return <h1>Not found</h1>;
}
