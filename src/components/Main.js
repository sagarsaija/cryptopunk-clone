import React, { useState, useEffect } from 'react';
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])}, [punkListData, selectedPunk]);

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk?.image_original_url} alt='Active Punk' />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                        <span className='itemNumber'>·#{activePunk.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img src={activePunk.owner.profile_img_url} alt='Owner' />
                        </div>
                        <div className='ownerDetails'>
                            <div className="ownerNameAndHandle">
                                <div className='ownerName'>
                                    {activePunk.owner.address}
                                </div>
                                <div className='ownerHandle'>
                                    @cryptopunksclone
                                </div>
                            </div>
                            <div className='ownerLink'>
                                <img src={instagramLogo} alt='Instagram Logo' />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='Twitter Logo' />
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt='More Icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
