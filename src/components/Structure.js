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

  const types = props.types;

  function urlBeautifier(url) {
    if (url.slice(0, 8) === "https://") {
      return url.slice(8, -1)
    } else {
      return url.slice(7, -1)
    }
  }

  function getTypeName(ids) {
    for (let i = 0 ; i < types ; i++) {
      if (ids[0] === types[i].id) {
        return types[i].name
      }
    }
  }

  console.log(types)

  for (let i = 0 ; i < types ; i++) {
    if (structure_types.includes(types[i].id)) {
      console.log('YOYO')
    }
  }

  const displayTypes = structure_types.map(structure_type => (
    <span className="badge text-bg-light me-2">{structure_type}</span>
  ))

  return (
    <div className="card reveal border border-1 border-secondary text-bg-dark mt-4">
      <div className="card-body">
        <div className="row align-items-end mt-2">
          <div className="col-md-6 col-sm-12">
            {
              name &&
              <h3><b>{name}</b></h3>
            }
          </div>
          <div className="col-md-3 col-sm-12">
            {
              structure_types && displayTypes
            }
          </div>
          <div className="col-md-3 col-sm-12 text-md-end text-sm-start">
            {
              postcode && city &&
              <h5>{postcode}, {city}</h5>
            }
          </div>
        </div>
        {
          description &&
          <p className="text-bg-dark mt-2">{description}</p>
        }
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-2">
            {
              website &&
              <a className="btn btn-sm btn-outline-light" target="_blank" href={website} rel="noreferrer"><i className="fa-solid fa-globe"></i> {urlBeautifier(website)}</a>
            }
          </div>
          <div className="col-lg-4 col-md-12 mt-2">
            {
              email &&
              <a className="btn btn-sm btn-outline-light" href={`mailto:${email}`}><i className="fa-solid fa-envelope"></i> {email}</a>
            }
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
        
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-3">
              { 
                address && 
                <span><i className="fa-solid fa-location-dot"></i> {address}, {postcode}, {city}</span>
              }
            </div>
            <div className="col-lg-6 col-md-12 mt-3">
              {
                telephone &&
                <span><i className="fa-solid fa-phone"></i> {telephone}</span>
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Structure;