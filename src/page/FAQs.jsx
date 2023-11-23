import React from 'react';
import './css/FAQs.css';
import add from '../component/assets/add.png';
import remove from '../component/assets/remove.png';
import heart from '../component/assets/circle-heart.png';

const FAQs = () => {
  const handleTextClick = (e) => {
    console.log(e.target);
    const icon = e.target.nextElementSibling
    console.log(icon);
    icon.src = icon.src === add ? remove : add;
    // e.target.src = e.target.src === add ? remove : add;
    const paragraph = e.target.parentNode.nextElementSibling;
    paragraph.classList.toggle('hidden');
  };

  const handleClick = (e) => {
    console.log(e.target);
    e.target.src = e.target.src === add ? remove: add;
    const paragraph = e.target.parentNode.nextElementSibling;
    paragraph.classList.toggle('hidden');
  };

  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />What are press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          Press-on nails are artificial nails that come pre-designed and can be easily applied without the need for professional salon services.
          They offer a convenient and temporary way to enhance the appearance of your natural nails.
        </p>
      </div>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />Why choose press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          Press-on nails are a popular choice for their affordability, versatility, and ease of application.
          They allow you to change your nail look quickly without the commitment of traditional acrylic or gel nails.
        </p>
      </div>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />How to apply press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          1. Clean your natural nails. 
          <br />
          2. Select the appropriate size of press-on nails for each finger.
          <br />
          3. Apply adhesive to the back of the press-on nail.
          <br />
          4. Press the nail onto your natural nail, holding it in place for a few seconds.
          <br />
          5. Repeat for all nails.
        </p>
      </div>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />How to remove press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          To remove press-on nails, soak your nails in warm, soapy water for a few minutes to loosen the adhesive.
          Gently pry the nails off using a cuticle stick or your fingers. Avoid forceful removal to prevent damage to your natural nails.
        </p>
      </div>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />How to care for press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          Avoid exposing press-on nails to excessive moisture, such as prolonged water immersion.
          Be gentle with your hands to prevent accidental damage. Store unused nails in a cool, dry place.
        </p>
      </div>

      <div className="faq">
        <p className='collapsible-header'><p onClick={handleTextClick}><img src={heart} alt="" />Where to store press-on nails?</p><img onClick={handleClick} src={add} alt="" /></p>

        <p className='collapsible-content hidden'>
          Store your press-on nails in their original packaging or in a nail storage container.
          Keep them in a cool, dry place away from direct sunlight to maintain their quality.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
