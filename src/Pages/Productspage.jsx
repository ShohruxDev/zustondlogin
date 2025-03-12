import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (page) => {
  const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
  return res.data;
};

const loginUser = async (userData) => {
  const res = await axios.post("https://dummyjson.com/auth/login", userData);
  return res.data;
};

function Productspage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful", data);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  if (isLoading) return <h2>Yuklanmoqda...</h2>;
  if (isError) return <h2>Xatolik yuz berdi!</h2>;

  return (
    <div>
      <h2>Mahsulotlar</h2>
      <ul>
        {data?.products?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>Oldingi</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Keyingi</button>

      <h2>Login</h2>
      <button
        onClick={() => mutation.mutate({ username: "kminchelle", password: "0lelplR" })}
      >
        Login
      </button>
    </div>
  );
}

export default Productspage;
