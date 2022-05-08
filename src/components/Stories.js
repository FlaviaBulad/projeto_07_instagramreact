function Story(props){ 
  return (
    <div class="story">
    <div class="imagem">
      <img src={`../assets/img/${props.image}`} />
    </div>
    <div class="usuario">
      {props.user}
    </div>
    </div>
  );
}

export default function Stories() {
const stories = [
  {image: "9gag.svg", user: "9gag"},
  {image: "meowed.svg", user: "meowed"},
  {image: "barked.svg", user: "barked"},
  {image: "nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
  {image: "wawawicomics.svg", user: "wawawicomics"},
  {image: "respondeai.svg", user: "respondeai"},
  {image: "filomoderna.svg", user: "filomoderna"},
  {image: "memeriagourmet.svg", user: "memeriagourmet"}
];

  return (
    <div class="stories">
    {stories.map((story)=> <Story image={story.image} user={story.user} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

