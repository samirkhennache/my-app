import React from "react";

const quotes =[
    {
        quote:"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
        character: "Homer Simpson",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
    },
    {
        quote: "Nothing you say can upset us. We're the MTV generation.",
        character: "Bart Simpson",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
    },
    {   
        quote: "That's where I saw the leprechaun...He told me to burn things.",
        character: "Ralph Wiggum",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
    },
    {
        quote:"Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
        character: "Principal Skinner",
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
    }
]



const Quote =({quote,character,image})=>(//déstructure de l'objet
    <figure>
        <img src={image} alt={character}/>
        <figcaption>
            <blockquote>
            {quote}
            </blockquote>
            <cite>{character}</cite>
        </figcaption>
       
    </figure>
);

        const Quotes = () => (
            <div>
              {quotes.map((element,index) =>
                // <Quote key = {index} quote={element.quote} image={element.image} character={element.character} />
             
                <Quote key ={index} {...element} />
                
              )}
            </div>
          );
export default Quotes;