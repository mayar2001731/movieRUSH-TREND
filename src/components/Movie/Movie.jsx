import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Movie() {
const [detailes,setDetailes]=useState({});

let {id}=useParams();

  async  function getItemDetailes(id) {
        let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data);
    setDetailes(data)
    
    }

    useEffect(()=>{
        getItemDetailes(id)
    },[])
  return <>
  <div className="container">
  <div className="row">
    <div className="col-md-3">
     <img src={'https://image.tmdb.org/t/p/w500/'+detailes.poster_path} className='w-100 h-100 rounded rounded-5 pinkborder' alt="" />
    </div>
    <div className="col-md-8 mt-5 text-white">
            <h3 className="">TiTle : <span className="pinklabel">{detailes.title}</span></h3>
    <p className="py-2 h5">TagLine : <span className="pinklabel">{detailes.tagline}</span></p>
    <ul className=" list-unstyled d-flex">{detailes.genres?.map((x)=><div className="p-3 mx-2 rounded rounded-2 pinktitle" key={detailes.id}>{x.name}</div>)}</ul>
    <p className="py-2 h5">Vote_Average : <span className="pinklabel">{detailes.vote_average?.toFixed(1)}</span></p>
    
    <p className="py-2 h5">Date : <span className="pinklabel">{detailes.release_date}</span></p>
    <p className="py-2 h5">Overview : <span className="pinklabel">{detailes.overview}</span></p>
  </div>
  
  </div>
  </div>
  
  </>
    
  
}
