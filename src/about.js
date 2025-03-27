import { createElement  } from "./mainpage";

import bearImg from './assets/bear.svg';
import bearMomImg from './assets/bear_mom.svg';
import pandaImg from './assets/panda.svg';

const container = document.querySelector("#content")

const ABOUT = [
    {
        name: "Руслан - шеф-повар",
        description: `Главный повар — настоящий Аю! Добрый, пушистый мастер татарской кухни. 
        Он виртуозно печёт эчпочмаки, варит аш и всегда добавляет тэмнушкэ в каждое блюдо. 
        Готовит по старинным рецептам — лапами, но с душой!`,
        image: bearImg
    },
    {
        name: "Айгуль - менеджер",
        description: `Наша бигрәк матур менеджер. Встречает с елмаю, помогает выбрать иң тәмле эчпочмак.
                    С ней һәркем чувствует себя как у әби — җылы и тәмле!`,
        image: bearMomImg
    },
    {
        name: "Панди - официант",
        description: `Безнең шат күңелле официант. 
        Быстрый, уңган, маладис малай одним словом.
         Принесёт шурпа, пәрәмәч, и чай чәк-чәк белән, даже если этого нет в меню — всё күңелле, по кайфу.`,
        image: pandaImg
    }
]

function createCards(arr){
 
    arr.forEach(item => {
        const mainDiv = createElement("div", ["content-item", "menu-element"])
        const image = createElement("img",[])
        image.src = item.image
        const div = createElement("div", ["info"])
        const h3 = createElement("h3", [], item.name)
        const description = createElement("p", [], item.description)
        div.appendChild(h3)
        div.appendChild(description)

        mainDiv.appendChild(image)
        mainDiv.appendChild(div)
        container.appendChild(mainDiv)
    })
}

export function load(){
    container.textContent = ""
    const h1 = createElement("h1", ["content-item", "sign"], "О нас")
    container.appendChild(h1)
    createCards(ABOUT)
}
