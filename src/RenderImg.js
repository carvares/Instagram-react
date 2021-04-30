export default function RenderImg(img){
    let src = "assets/img/" + img;
    return(
        <img src={src}  alt=""/>
    )
};