import React, { useRef, useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FaceIcon from '@material-ui/icons/Face';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import SingleBedOutlinedIcon from '@material-ui/icons/SingleBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import sampleData from '../main-pages/comp/sampleData';
import NavbarFixed from './../essentials/NavbarFixed';
import starFilled from '../images/star-rated.svg';
import starUnfilled from '../images/star-unrated.svg';
import imgSrc from "../main-pages/comp/imgSrc";
import './RentalPreview.scss';
import ImagePopup from './../pop-ups/ImagePopup';
import sampleReviews from './../main-pages/comp/sampleReviews';
import ContactOwnerPopup from './../pop-ups/ContactOwnerPopup';
import Footer from './../essentials/Footer';


const RentalPreview = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
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
                  if(imgSrc.length>1){
                    var temp = activeIndex.current;
                    var max = imgSrc.length;
                    activeIndex.current=(temp===1)?max:(temp-1);
                    document.getElementById(activeIndex.current).scrollIntoView({
                      behavior:activeIndex.current===max?'auto':'smooth',
                      inline: 'center', 
                      block: 'center'
                    });
                  }
                }}
                >
                <NavigateBeforeIcon id='prev'/>
              </div>
              <div className="rental-preview-wrapper-gallery-container" id='scroll'>
              <img className={imgSrc.length>1?'rental-preview-wrapper-gallery-container-pseudo':'rental-preview-wrapper-gallery-container-pseudo-hide'} src={imgSrc.find((image) => image.key===imgSrc.length).img} alt="images"/>
                {imgSrc.map((imgs, key)=>{
                    return(
                        <img 
                          className='rental-preview-wrapper-gallery-container-imgs' 
                          id={imgs.key} 
                          src={imgs.img} 
                          alt="images"
                          onClick={() => {setIsImageOpen(true);imgToPreview.current=imgs.img;}}
                        />
                    );
                })}
                <img className={imgSrc.length>1?'rental-preview-wrapper-gallery-container-pseudo':'rental-preview-wrapper-gallery-container-pseudo-hide'} src={imgSrc.find((image) => image.key===1).img} alt="images"/>
              </div>
              <div 
                className="rental-preview-wrapper-gallery-buttons-next" 
                id='button-next' 
                onClick={()=>{
                  if(imgSrc.length>1){
                    var temp = activeIndex.current;
                    var max = imgSrc.length;
                    activeIndex.current=(temp===max)?1:(temp+1);
                    document.getElementById(activeIndex.current).scrollIntoView({
                      behavior:activeIndex.current===1?'auto':'smooth', 
                      inline: 'center', 
                      block: 'center'
                    });
                  }
                }}
                >
                <NavigateNextIcon id='next'/>
              </div>
            </div>
            <div className="rental-preview-wrapper-container">
              <div className="rental-preview-wrapper-container-inline-1">
                <div className="rental-preview-wrapper-container-inline-1-block-left">
                  <h1>{data.name+" "+data.categoryName}</h1>
                  <div className="rental-preview-wrapper-container-inline-1-block-left-location-container">
                    <LocationOnIcon/> <h3>{data.value}</h3>
                  </div>
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
                      <div className="rental-preview-wrapper-container-inline-1-block-right-inner-price-max">
                        <h2 class="max-price">{"- "+data.maxPrice.toFixed(2)}</h2>
                        <h3 class="max-price">{"/"+data.units}</h3>
                      </div>
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
                  <h2>Amenities</h2>
                  <div className="rental-preview-wrapper-container-inline-2-block-1-container">
                    {
                      data.amenities.map((data, key)=>{
                        return(
                          <div className="rental-preview-wrapper-container-inline-2-block-1-container-amenities">
                            <TvOutlinedIcon id={data==='TV set'?'show-icon':'hide-icon'}/>
                            <SingleBedOutlinedIcon id={data==='Single Bed'?'show-icon':'hide-icon'}/>
                            <BathtubOutlinedIcon id={data==='Bathtub'?'show-icon':'hide-icon'}/>
                            <RssFeedOutlinedIcon id={data==='Wi-fi'?'show-icon':'hide-icon'}/>
                            <LocalLaundryServiceOutlinedIcon id={data==='Laundromat'?'show-icon':'hide-icon'}/>
                            <h4>{data}</h4>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="rental-preview-wrapper-container-inline-2-block-2">
                  <h1>Description</h1>
                  <div className="rental-preview-wrapper-container-inline-2-block-2-description">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div> 
              <div className="rental-preview-wrapper-container-inline-3">
                <h3>Reviews</h3>
                <div className="rental-preview-wrapper-container-inline-3-review">
                  {
                    sampleReviews.filter((data) => 
                    {return data.id.includes(data_id);}
                    ).map((reviews, key)=>{
                      return(
                        <div className="rental-preview-wrapper-container-inline-3-review-container">
                          <FaceIcon id='face-icon'/>
                          <p>{reviews.review}</p>
                          <FormatQuoteRoundedIcon id='quote-icon'/>
                        </div>
                      );
                    })
                  }
                  <div className={
                    sampleReviews.filter((data) => 
                    {return data.id.includes(data_id);}
                    ).length===0?
                    "rental-preview-wrapper-container-inline-3-review-container-show":
                    "rental-preview-wrapper-container-inline-3-review-container-hide"
                  }>
                    <SentimentVeryDissatisfiedIcon id="sad-icon"/>
                    <p>--- No Reviews Yet ---</p>
                  </div>
                </div>
                <span id='contact-owner-button' onClick={()=>setIsContactOpen(true)}>Contact Owner</span>
              </div>
            </div>
          </div>
          <Footer/>
          <ImagePopup open={isImageOpen}
            onClose={() => {setIsImageOpen(false);showScroll();}}
            imgSource={imgToPreview.current}
          />
          <ContactOwnerPopup open={isContactOpen}
            onClose={() => {setIsContactOpen(false);showScroll();}}
            data = {data}
          />
        </div>
    )
}

export default RentalPreview;
