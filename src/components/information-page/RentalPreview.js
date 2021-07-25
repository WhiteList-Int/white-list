import React, { useRef, useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import sampleData from '../main-pages/comp/sampleData';
import NavbarFixed from './../essentials/NavbarFixed';
import starFilled from '../images/star-rated.svg';
import starUnfilled from '../images/star-unrated.svg';
import imgSrc from "../main-pages/comp/imgSrc";
import './RentalPreview.scss';
import ImagePopup from './../pop-ups/ImagePopup';
import { NavLink } from "react-router-dom";


const RentalPreview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const imgToPreview = useRef("");
    const data_id = window.location.hash;
    const activeIndex= useRef(1);

    const data = sampleData.filter((data) => {
      return data.id.includes(data_id);
     })[0];

    const showScroll = () => {
      document.body.setAttribute('style','overflow-y:scroll;');
    }

    return (
        <div className="rental-preview">
          <NavbarFixed/>
          <div className="rental-preview-wrapper">
            <div className="rental-preview-wrapper-gallery">
              <div 
                className="rental-preview-wrapper-gallery-buttons-prev" 
                id='button-prev' 
                onClick={()=>{
                  var temp = activeIndex.current;
                  var max = imgSrc.length;
                  activeIndex.current=temp===1?max:(temp-1);
                  document.getElementById(activeIndex.current).scrollIntoView({
                      behavior:activeIndex.current===max?'auto':'smooth', 
                      inline: 'center', 
                      block: 'center'
                    });
                }}
              >
                <NavigateBeforeIcon id='prev'/>
              </div>
              <div className="rental-preview-wrapper-gallery-container" id='scroll'>
                {imgSrc.map((imgs, key)=>{
                    return(
                        <img 
                          className='rental-preview-wrapper-gallery-container-imgs' 
                          id={imgs.key} 
                          src={imgs.img} 
                          alt="images"
                          onClick={() => {setIsOpen(true);imgToPreview.current=imgs.img;}}
                        />
                    );
                })}
              </div>
              <div 
                className="rental-preview-wrapper-gallery-buttons-next" 
                id='button-next' 
                onClick={()=>{
                    var temp = activeIndex.current;
                    var max = imgSrc.length;
                    activeIndex.current=temp===max?1:(temp+1);
                    document.getElementById(activeIndex.current).scrollIntoView({
                    behavior:activeIndex.current===1?'auto':'smooth', 
                    inline: 'center', 
                    block: 'center'
                  });
                }}
              >
                <NavigateNextIcon id='next'/>
              </div>
            </div>
            <div className="rental-preview-wrapper-container">
              <div className="rental-preview-wrapper-container-inline-1">
                <div className="rental-preview-wrapper-container-inline-1-block-left">
                  <h1>{data.name+" "+data.categoryName}</h1>
                  <div className="rental-preview-wrapper-container-inline-1-block-left-stars-container">
                    <img src={(data.stars)>=1?starFilled:starUnfilled} alt="*"/>
                    <img src={(data.stars)-1>=1?starFilled:starUnfilled} alt="*"/>
                    <img src={(data.stars)-2>=1?starFilled:starUnfilled} alt="*"/>
                    <img src={(data.stars)-3>=1?starFilled:starUnfilled} alt="*"/>
                    <img src={(data.stars)-4>=1?starFilled:starUnfilled} alt="*"/>
                    <div id="stars-value"><h6>({data.stars.toFixed(2)})</h6></div>
                  </div>
                </div>
                <div className="rental-preview-wrapper-container-inline-1-block-right">
                  <div className="rental-preview-wrapper-container-inline-1-block-right-inner">
                    <div className="rental-preview-wrapper-container-inline-1-block-right-inner-price">
                      <h1 class="min-price">{"PHP "+data.minPrice.toFixed(2)}</h1>
                      <h2 class="max-price">{"- "+data.maxPrice.toFixed(2)}</h2>
                      <h3 class="max-price">{"/"+data.units}</h3>
                    </div>
                    <div className="rental-preview-wrapper-container-inline-1-block-right-inner-head-count">
                      <VpnKeyIcon className="rental-preview-wrapper-container-inline-1-block-right-inner-head-count-capacity-icon"/>
                      <h3>{data.capacity}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rental-preview-wrapper-container-inline-2">
                <div className="rental-preview-wrapper-container-inline-2-block-1">
                  <h1>Description</h1>
                  <div className="rental-preview-wrapper-container-inline-2-block-1-description">
                    <p>{data.description}</p>
                  </div>
                </div>
                <NavLink to='/contact-owner' id='contact-owner-button'>Contact Owner</NavLink>
              </div> 
            </div>
          </div>
          <ImagePopup open={isOpen}
            onClose={() => {setIsOpen(false);showScroll();}}
            imgSource={imgToPreview.current}
          />
        </div>
    )
}

export default RentalPreview;
