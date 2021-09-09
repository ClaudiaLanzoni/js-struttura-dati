let card = {

    name : 'Griselbrand', //rappresentato come stringa perchè è un solo valore (sequenza di caratteri)

    /** 
     * Costo di attivazione rappresentato come oggetto perchè è un aggregato di proprietà
     */
    launchCost : { 
        colorless : 4,
        w : 0,
        u : 0,
        b : 4,
        r : 0,
        g : 0
    },

    cardType : 'Legendary creature', //rappresentato come stringa perchè è un solo valore (sequenza di caratteri)

    subType : 'Demon', //rappresentato come stringa perchè è un solo valore (sequenza di caratteri)

    expansion : {
        expansionID : 'Avacyn Restored',
        rarity : 'Mythic rare',
        collectionCardOn : 350
    },

    collectionCardNumber : 106,

    flavorText : { //meglio array o oggetto?
        author: ['Thalia', 'Cavaliera', 'Catara'],                  /*author : {    
                                                                        name : 'Thalia',
                                                                        order : 'Cavaliera',
                                                                        cult : 'Catara'
                                                                    }*/
        quote : 'Avacyn emerse dalla Tomba Infernale infranta, ma la sua libertà aveva un prezzo... lui.'
    },

    abilities : [ 
        { 
            launchCost : { 
                colorless : 2,
                w : 0,
                u : 0,
                b : 5,
                r : 0,
                g : 0
            },
            description : 'Flying'
        },

        { 
            launchCost : { //ne valeva la pena di fare un oggetto per una sola coppia chiave valore?
                life : 7
            },

            description : 'Lifelink'
        }

    ],

    illustrator : {
        name : 'Igor',
        surname : 'Kieryluk',
        country : 'Poland'
    },

    constitution : {
        strenght : 7,
        offense : 7
    },

    cardImage : 'img/griselbrand.jpg',

    manaCostSum() {
        let sum = 0;
        for (let type in this.launchCost){
            sum += this.launchCost[type];
        }
        return sum;
    },


}; 

console.log(card);
console.log(card.manaCostSum());

let displayCardOnHTML = 
`<ul class="card-element">
    <li>Name: ${card.name}</li>
    <li>Launch cost: ${card.manaCostSum()}</li>
    <li>Card type: ${card.cardType}</li>
    <li>Subtype: ${card.subType}</li>
    <li>Expansion:
        <ul>
            <li>Expansion ID: ${card.expansion.expansionID}</li>
            <li>Rarity: ${card.expansion.rarity}</li>
        </ul>
    </li>
    <li>Card number: ${card.collectionCardNumber} / ${card.expansion.collectionCardOn}</li>
    <li>Flavor text: <em>${card.flavorText.quote}</em> by ${card.flavorText.author.join(' ')}</li>

</ul>`;

document.getElementById('card').innerHTML += displayCardOnHTML;

console.log(card.cardImage)