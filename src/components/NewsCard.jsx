import moment from 'moment';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({category}) => {
    const {_id,category_id,rating,total_view,title,author,image_url,details} = category || {}
    const {name,published_date,img} = author || {}
    return (
        <>
            <div className='mt-3 mb-3 border border-1'>
                <div className=' bg-light' style={{display:'flex',justifyContent:'space-between',height:'85px',alignItems:'center'}}>
                    <div className='p-3' style={{display:'flex',alignItems:'center',height:'80px'}}>
                        <img  src={img} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt={title} />
                        <div className='px-4'>
                            <h6>{name}</h6>
                            <b style={{color:'gray'}}>{moment(published_date).format('YYY-MM-D')}</b>
                        </div>
                    </div>
                    <ul style={{display:'flex',gap:'20px'}} className='px-3'>
                        <li style={{listStyle:'none'}}><i style={{color:'gray'}} className="fa-sharp fa-solid fa-bookmark"></i></li>
                        <li style={{listStyle:'none'}}><i style={{color:'gray'}} className="fa-sharp fa-solid fa-share-nodes"></i></li>
                    </ul>
                </div>
                {/* content  */}
                <img src={image_url} className='img-fluid' alt="" />
                <p className='mt-4 p-2' style={{color:'gray'}}>{details?.slice(0,200)}<Link style={{textDecoration:'none'}} className='text-warning' to={`/news/${_id}`}>Read More</Link></p> <hr />
                <div style={{display:'flex',justifyContent:'space-between'}} className='px-4'>
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<i className="text-warning fa-regular fa-star"></i>}
                    placeholderSymbol={<i className="text-warning fa-solid fa-star"></i>}
                    fullSymbol={<i className="text-warning fa-solid fa-star"></i>}
                    />
                    <div className='d-flex g-3'>
                    <i style={{color:'gray'}} className="mt-1 fa-regular fa-eye"></i> <p style={{color:'gray'}}>{total_view}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCard;