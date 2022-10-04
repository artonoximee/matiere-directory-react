import React from 'react';

function Structure(props) {
  const { 
    name, 
    description, 
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

  function urlBeautifier(url) {
    if (url.slice(0, 8) === "https://") {
      return url.slice(8, -1)
    } else {
      return url.slice(7, -1)
    }
  }

  return (
    <div className="card reveal border border-1 border-secondary text-bg-dark mt-4">
      <div className="card-body">
        <div className="row align-items-end mt-2">
          <div className="col-12">
            {
              name &&
              <h3 className="text-success"><b>{name}</b></h3>
            }
          </div>
          <div className="col-12">
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
          <div className="col-12 mt-2">
            {
              website &&
              <a className="btn btn-sm btn-outline-light" target="_blank" href={website} rel="noreferrer"><i className="fa-solid fa-globe text-success"></i> {urlBeautifier(website)}</a>
            }
          </div>
          <div className="col-12 mt-2">
            {
              email &&
              <a className="btn btn-sm btn-outline-light" href={`mailto:${email}`}><i className="fa-solid fa-envelope text-success"></i> {email}</a>
            }
          </div>
          <div className="col-12 mt-2">
            {
              facebook_url &&
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={facebook_url} rel="noreferrer"><i className="fa-brands fa-facebook text-success"></i></a>
            }
            {
              instagram_url && 
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={instagram_url} rel="noreferrer"><i className="fa-brands fa-instagram text-success"></i></a>
            }
            {
              twitter_url && 
              <a className="btn btn-sm btn-outline-light me-2" target="_blank" href={twitter_url} rel="noreferrer"><i className="fa-brands fa-twitter text-success"></i></a>
            }
            
          </div>
        </div>

        
        
          <div className="row">
              { 
                address && 
                <div className="col-8 mt-3">
                  <a className="btn btn-sm btn-outline-light" target="_blank" href={`https://www.google.com/maps?q=${address}+${postcode}+${city}}`} rel="noreferrer"><i className="fa-solid fa-location-dot text-success"></i> {address}, {postcode}, {city}</a>
                </div>
              }
              {
                telephone &&
                <div className="col-4 mt-3">
                  <a className="btn btn-sm btn-outline-light" href={`tel:${telephone}}`}><i className="fa-solid fa-phone text-success"></i> {telephone}</a>
                </div>
              }
          </div>
      </div>
    </div>
  )
}

export default Structure;