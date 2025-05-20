import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';





export default function Home() {
let [movie,setMovie]=useState([]);
  async function movieTrend(){

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`);
   
   console.log(data.results);
   setMovie(data.results)
  }
    {useEffect(()=>{movieTrend()},[])}

  return<>
  <div className="container"><div className="row">
    
{movie.map((x,index)=><div className="col-md-3" key={index}>
  <Link to={`/movie/${x.id}`} className='text-decoration-none text-white'>
  <div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500/'+x.poster_path} className='w-100' alt="" />

<div className='imglayer'>
<div className='imginfo'><h6>{x.title}</h6></div>

</div>
{x.vote_average ? (
  <div className='position-absolute top-0 end-0 bg-info p-2'>
    {x.vote_average.toFixed(1)}
  </div>
) : ""}
</div>



<h2 className='text-white'>{x.title}</h2>

</Link>
</div>)}


    
    
    
    
    </div></div>
  
  </>
}
