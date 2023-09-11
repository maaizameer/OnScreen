import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwtitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
const [endpoint, setEndpoint] = useState('day');
const {data, loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === 'Daily' ? 'day' : 'week')
    }
    
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwtitchTabs data={["Daily", "Weekly"]} onTabChange={onTabChange} />
        </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending