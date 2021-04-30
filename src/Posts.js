import RenderIcons from "./RenderIcons";
import RenderImg from "./RenderImg";

function RenderPosts(props){
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  {RenderImg(props.name + ".svg")}
                  {props.name}
                </div>
                <div class="acoes">
                    {RenderIcons("ellipsis-horizontal")}
                </div>
              </div>

              <div class="conteudo">
                    {RenderImg(props.img + ".svg")}
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    {RenderIcons("heart-outline")}
                    {RenderIcons("chatbubble-outline")}
                    {RenderIcons("paper-plane-outline")}
                  </div>
                  <div>
                    {RenderIcons("bookmark-outline")}
                  </div>
                </div>

                <div class="curtidas">
                  {RenderImg(props.curtidas + ".svg")}
                  <div class="texto">
                    Curtido por <strong>{props.curtidas}</strong> e <strong>outras {props.numero} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
};

export default function Posts(){
    return(
        <>
        <RenderPosts name="meowed" img="gato-telefone" curtidas ="respondeai" numero="101.523"/>
        <RenderPosts name="barked" img="dog" curtidas ="adorable_animals" numero="99.159"/>
        </>
    )
    
};