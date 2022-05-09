function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`../assets/img/${props.user.image}`} />
                <div class="texto">
                    <div class="nome">{props.user.username}</div>
                    <div class="razao">{props.user.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );

}

export default function Suggestions() {

    const suggestion = [
        {
        user: {
            username: "bad.vibes.memes",
            image: "bad.vibes.memes.svg",
            reason: "Segue você",
        }
        },
        {
        user: {
            username: "chibirdart",
            image: "chibirdart.svg",
            reason: "Segue você",
        }
        },
        {
        user: {
            username: "razoesparaacreditar",
            image: "razoesparaacreditar.svg",
            reason: "Novo no Instagram",
        }
        },
        {
        user: {
            username: "adorable_animals",
            image: "adorable_animals.svg",
            reason: "Segue você",
        }
        },
        {
        user: {
            username: "smallcutecats",
            image: "smallcutecats.svg",
            reason: "Segue você",
        },
    }
];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestion.map((suggestion)=> <Suggestion user={suggestion.user} />)}
        </div>
    );
}

