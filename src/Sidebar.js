import RenderImg from "./RenderImg";
import Sugestions from "./Sugestions";

export default function Sidebar(){
    return(
        <div class="sidebar">
        <div class="usuario">
            {RenderImg("catanacomics.svg")}
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
        <Sugestions name ="bad.vibes.memes" segue="Segue você"/>
        <Sugestions name ="chibirdart" segue="Segue você"/>
        <Sugestions name ="razoesparaacreditar" segue="Novo no instagram"/>
        <Sugestions name ="adorable_animals" segue="Segue você"/>
        <Sugestions name ="smallcutecats" segue="Segue você"/>
            
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        </div>
    )
};