import RenderIcons from "./RenderIcons";

export default function Mobile(){
    return(
        <div class="fundo-mobile">
        {RenderIcons("home")}
        {RenderIcons("search-outline")}
        {RenderIcons("add-circle-outline")}
        {RenderIcons("heart-outline")}
        {RenderIcons("person-outline")}
      </div>
    )
}