import React from "react";

const CustomAlbumList = (props) => {
    return (
        <li>
            <div>
                <h2>Music</h2>
            </div>
            <div>
                <span>{props.title}</span>
                <span>{props.price}</span>
                <span>{props.imageUrl}</span>
            </div>
        </li>
    );
};

export default CustomAlbumList;