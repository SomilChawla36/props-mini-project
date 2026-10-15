import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="upper">
            <img src={props.comLogo} alt="load soon" />
            <button><b>save</b> <Bookmark size={12}/> </button>
        </div>
        <div className="xyz">
            <h3>{props.compony}</h3>
            <h2>{props.profession}</h2>
        </div>
        
        <div className="level">
            <div className="level1">
                <span>{props.level1}</span>
            </div>
            <div className="level2">
                <span>{props.level2}</span>
            </div>
        </div>
        <div className="payApply">
            <h2>{props.pay}</h2>
            <button>Apply now</button>
        </div>

        
      </div>
    </>
  )
}

export default Card
