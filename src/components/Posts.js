function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`../assets/img/${props.user.image}`} />
          {props.user.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={`../assets/img/${props.content}`} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`../assets/img/${props.likes.whoLikedImage}`} />
          <div class="texto">
            Curtido por <strong>{props.likes.whoLiked}</strong> e <strong>outras {props.likes.likesCounter} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      user: {
        username: "meowed",
        image: "meowed.svg",
      },
      content: "gato-telefone.svg",
      likes: {
        whoLiked: "respondeai",
        whoLikedImage: "respondeai.svg",
        likesCounter: "101.523"
      },

      user: {
        username: "barked",
        image: "barked.svg",
      },
      content: "dog.svg",
      likes: {
        whoLiked: "adorable_animals",
        whoLikedImage: "adorable_animals.svg",
        likesCounter: "99.159"
      }
    },
  ];

  return (
    <div class="posts">
      {posts.map((post) => (<Post user={post.user} content={post.content} likes={post.likes} />
      ))}
    </div>
  );
}
