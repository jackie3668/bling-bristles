import React from 'react'
import './Collapsible.css'
import add from '../assets/add.png'
import remove from '../assets/remove.png'
import ruler from '../assets/ruler.png'
import shipped from '../assets/shipped.png'
import nail from '../assets/nail.png'
import manicure from '../assets/manicure.png'

const Collapsible = () => {


  const handleClick = (e) => {
    console.log(e.target);
    e.target.src = e.target.src === add ? remove: add;
    const paragraph = e.target.parentNode.nextElementSibling;
    paragraph.classList.toggle('hidden');
  };


  return (
    <div className="collapsible">
      <hr />
      <div>
        <p className='collapsible-header'><p><img src={ruler} alt="" />Sizing</p><img onClick={handleClick} src={add} alt="" /></p>
        <p className='collapsible-content hidden'>To determine your nail size, measure the width of your natural nails. Use the provided sizing chart and choose the closest size for each nail to ensure a perfect fit.</p>
        <hr />
      </div>
      <div>
        <p className='collapsible-header'><p><img src={manicure} alt="" />Application</p><img onClick={handleClick} src={add} alt="" /></p>
        <p className='collapsible-content hidden'>Apply nail glue sparingly on the press-on nail's back. Align with your cuticle and press firmly. Hold for a few seconds to secure. Enjoy salon-quality nails without the wait!</p>
        <hr />
      </div>
      <div>
        <p className='collapsible-header'><p><img src={nail} alt="" />Removal</p><img onClick={handleClick} src={add} alt="" /></p>
        <p className='collapsible-content hidden'>To remove press-on nails, soak them in warm, soapy water for a few minutes. Gently peel from one side, applying oil if needed. Embrace easy, damage-free removal for reusable nails.</p>
        <hr />
      </div>
      <div>
        <p className='collapsible-header'><p><img src={shipped} alt="" />Shipping</p> <img onClick={handleClick} src={add} alt="" /></p>
        <p className='collapsible-content hidden'>Our shipping process takes 7-10 days. We ensure safe and timely delivery of your press-on nails to your doorstep. Experience hassle-free shipping and eagerly await your fabulous nail transformation!</p>
        <hr />
      </div>
    </div>
  )
}

export default Collapsible