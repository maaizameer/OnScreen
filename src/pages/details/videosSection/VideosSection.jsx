import React, { useState, useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../PlayButton";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
    const carouselContainer = useRef();
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    const navigation = (dir) => {
        const container = carouselContainer.current;
    
        const scrollAmount = dir === 'left' ? container.scrollLeft - (container.offsetWidth + 10)
        : container.scrollLeft + (container.offsetWidth + 10)
    
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        })
      }

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                <BsFillArrowLeftCircleFill 
                    className="carouselLeftNav arrow"
                    onClick={() => navigation('left')}
                />
                <BsFillArrowRightCircleFill 
                    className="carouselRightNav arrow"
                    onClick={() => navigation('right')}
                />
                {!loading ? (
                    <div ref={carouselContainer} className="videos">
                        {data?.results?.map((video) => (
                            <div key={video.id} className="videoItem" onClick={() => {
                                setVideoId(video.key)
                                setShow(true)
                            }}>
                                <div className="videoThumbnail">
                                    <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg` || loadingSkeleton()}/>
                                    <PlayIcon />
                                </div>
                                <div className="videoTitle">{video.name}</div>  
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;