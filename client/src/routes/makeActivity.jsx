import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
"use client";
import { APIProvider, Map, useMapsLibrary, useMap,} from "@vis.gl/react-google-maps";

/*This is the actual part that gets the data*/
const makeActivity = ({userId}) => {

 const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const{ getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newActivity) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/activities`, newActivity, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) =>{
      toast.success("Activity created successfully!");
      //navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      origin: formData.get("origin"),
      destination: formData.get("destination"),
    };
    console.log(data);
    mutation.mutate(data);
  };
  return (
    <div>
        <h1 className="my-8 flex items-center text-4xl font-semibold">Activity Tracker</h1>
        <p className="text-gray-500 mb-4">
            
        </p>
        <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
            <textarea name= "origin" placeholder="Write the origin of your route:" className="w-full p-4 rounded-xl" />
            <textarea name= "destination" placeholder="Write the destination of your route:" className="w-full p-4 rounded-xl" />
            <button className="bg-blue-800 px-4 py-3 text-white fondt-medium rounded-xl">Send</button>
        </form>
    </div>

  );
};

export default makeActivity;