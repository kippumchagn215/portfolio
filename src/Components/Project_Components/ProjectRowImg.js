import React from "react"

export default function ProjectRowImg(props){
    return(
            <img
                class="d-block img limit-size"
                src={props.imgInfo.src}
                alt={props.imgInfo.alt}
            />
    );
}