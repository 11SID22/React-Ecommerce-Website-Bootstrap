import React from 'react';
import CustomHeader from '../components/Layout/CustomHeader';
import CustomAlbum from '../components/Albums/CustomAlbum';
import CustomFooter from '../components/Layout/CustomFooter';

const Store = () => {
    return (
        <div>
            <CustomHeader />
            <CustomAlbum />
            <CustomFooter showSocialIcons={true}/>
        </div>
    );
};

export default Store;
