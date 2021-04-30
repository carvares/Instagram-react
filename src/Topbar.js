
import RenderIcons from "./RenderIcons";
import RenderImg from "./RenderImg";

export default function Topbar(){
    return( 
        <div class = "navbar">
        <div class="container">
          <div class="logo">
            {RenderIcons("logo-instagram")}
            <div class="separador"></div>
            {RenderImg("logo.png")}
          </div>

          <div class="logo-mobile">
            {RenderIcons("logo-instagram")}
          </div>

          <div class="instagram-mobile">
            {RenderImg("logo.png")}
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {RenderIcons("paper-plane-outline")}
            {RenderIcons("compass-outline")}
            {RenderIcons("heart-outline")}
            {RenderIcons("person-outline")}
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        </div>
    );
};


