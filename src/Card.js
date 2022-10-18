import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
  
    <div>
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.cardDetails.planName}</h5>
            <h6 class="card-price text-center">{props.cardDetails.price}<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
            
                { props.cardDetails.features.map((item)=>{
                  return <li><FontAwesomeIcon icon={ faCheck } />{item.name}</li>
                })}
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Card