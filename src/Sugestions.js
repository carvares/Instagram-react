import RenderImg from "./RenderImg";


export default function Sugestions(props){
    return(

        <div class="sugestao">
              <div class="usuario">
                {RenderImg(props.name + ".svg")}
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.segue}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    )
};