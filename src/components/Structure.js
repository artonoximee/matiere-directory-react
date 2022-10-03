import React from 'react';

function Structure(props) {
  const { 
    name, 
    description, 
    structure_types,
    address,
    postcode,
    city,
    email,
    telephone,
    website,
    facebook_url,
    twitter_url,
    instagram_url
  } = props.structure

  return (
    <div className="card reveal border border-1 border-secondary text-bg-dark mt-4">
      <div className="card-body">
        <div className="row align-items-end mt-2">
          <div className="col-md-6 col-sm-12">
            <h3><b>{name}</b></h3>
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="badge text-bg-light me-2">{structure_types}</h2>
          </div>
          <div className="col-md-3 col-sm-12 text-md-end text-sm-start">
            <h5>{postcode}, {city}</h5>
          </div>
        </div>
        <p className="text-bg-dark mt-2">
          {description}
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-2">
            <a className="btn btn-sm btn-outline-light" target="_blank" href={website} rel="noreferrer"><i className="fa-solid fa-globe"></i> {website}</a>
          </div>
          <div className="col-lg-4 col-md-12 mt-2">
            <a className="btn btn-sm btn-outline-light" href={`mailto:${email}`}><i className="fa-solid fa-envelope"></i> {email}</a>
          </div>
          <div className="col-lg-2 col-md-12 mt-2 text-lg-end text-md-start">
            {
              facebook_url &&
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={facebook_url} rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
            }
            {
              instagram_url && 
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={instagram_url} rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            }
            {
              twitter_url && 
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={twitter_url} rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
            }
            
          </div>
        </div>
        { 
          address && 
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-3">
              <span><i className="fa-solid fa-location-dot"></i> {address}, {postcode}, {city}</span>
            </div>
            <div className="col-lg-6 col-md-12 mt-3">
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Structure;