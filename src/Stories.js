import RenderImg from "./RenderImg";
import RenderIcons from "./RenderIcons";

function RenderStories(props){
    return(
            <div class="story">
              <div class="imagem">
                {RenderImg(props.name + ".svg")}
              </div>
              <div class="usuario">
                {props.name}
              </div>
            </div>
    );

};

export default function Stories(){
  return(
      <div class ="stories">
      <RenderStories name = "9gag" />
      <RenderStories name = "meowed" />
      <RenderStories name = "barked" />
      <RenderStories name = "nathanwpylestrangeplanet" />
      <RenderStories name = "wawawicomics" />
      <RenderStories name = "respondeai" />
      <RenderStories name = "filomoderna" />
      <RenderStories name = "memeriagourmet" />
      <div class="setinha">
      {RenderIcons("chevron-forward-circle")}
      </div>
      </div>
  )
};