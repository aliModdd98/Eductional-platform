
import HeadPage from '../ThirdSec/HeadPage';
import './EighthSecStyle.css'

function EighthSec({pricing}) {
 const title="Pricing";


 
 return (
    <div className='eighth-sec'>
        <HeadPage titlePage={title}/>
    
    <div className="pricing">{
pricing.map((e,index)=>(
<div className="itemPrice" key={index}
>
<h2>{e.title}</h2>
    <div className="row"><h2>{e.price}</h2>/month</div>
<p>
    {e.paragraph}
</p>
<button>{e.button}</button>

</div>

))

    }
    
    </div>
    </div>
  )
}

export default EighthSec