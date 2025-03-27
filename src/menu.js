import { createElement  } from "./mainpage";

import ochpochmakImg from './assets/ochpochmak.png';
import oleshImg from './assets/olesh.png';
import gubadiaImg from './assets/gubadia.png';
import mantyiImg from './assets/mantyi.png';
import ashImg from './assets/ash.png';
import teaImg from './assets/tea.png';

const container = document.querySelector("#content")

const DISHES = [
    {
        name: "Очпочмак с курицей",
        description: "Бик тәмле өчпочмак с курицей — йомшак тесто, эчендә тавык, бәрәңге. Сугансыз! Настоящий домашний вкус!",
        price: "89,00 руб",
        image: ochpochmakImg
    },
    {
        name: "Олеш с курицей",
        description: "Бик тәмле олеш с курицей — тышы йомшак, эче тулы тавык hәм бәрәңге. Покушаешь один да, “тагын берне бирегез!” дип кричать итәсен!",
        price: "129,00 руб",
        image: oleshImg
    },
    {
        name: "Губадия",
        description: "Губадия — не очпочмак, конечно, но тоже вкусно. Рис, изюм, корт, май да камыр. Аша да кычкырма",
        price: "109,00 руб",
        image: gubadiaImg
    }
    
]

const MAIN = [
    {
        name: "Мантый",
        description: "Бик тәмле манты — эчендә хуш исле ит, парда пешкән инде, авызда тает прям! Әбиеңнеке кебек, только ресторанда ашыйсын!",
        price: "229,00 руб",
        image: mantyiImg
    },
    {
        name: "Его величество аш",
        description: "Аш — таза иттән, әкрен генә кайнап чыккан. Ашказаны рәхмәт скажет — авырырга совсем кызык түгел!",
        price: "49,00 руб",
        image: ashImg
    },
]

const DRINKS = [
    {
        name: "Чай",
        description: "Салкын тугел мәтрүшкәле чәй — табигать исе, тынычлык көче. Эчеп җибәрсәң, стресс кача! Новопассит? Ерунда! Татар чәй гына спасет",
        price: "Бесплатно",
        image: teaImg
    },
]

function createCards(arr){
 
    arr.forEach(item => {
        const mainDiv = createElement("div", ["content-item", "menu-element"])
        const image = createElement("img",[])
        image.src = item.image
        const div = createElement("div", ["info"])
        const h3 = createElement("h3", [], item.name)
        const dish = createElement("p", ["dish"], item.description)
        const price = createElement("p", ["price"], item.price)
        div.appendChild(h3)
        div.appendChild(dish)
        div.appendChild(price)

        mainDiv.appendChild(image)
        mainDiv.appendChild(div)
        container.appendChild(mainDiv)
    })

    

}

export function load(){

    container.textContent = ""
    const h1 = createElement("h1", ["content-item", "sign"], "Вкусное меню")
    container.appendChild(h1)


    const menu1 = createElement("div", ["content-item", "menu-title"])
    const menu1H2 = createElement("h2", [], "Выпечка")
    menu1.appendChild(menu1H2)
    container.appendChild(menu1)
    createCards(DISHES)
    

    const menu2 = createElement("div", ["content-item", "menu-title"])
    const menu2H2 = createElement("h2", [], "Основные блюда")
    menu2.appendChild(menu2H2)
    container.appendChild(menu2)
    createCards(MAIN)

    const menu3 = createElement("div", ["content-item", "menu-title"])
    const menu3H2 = createElement("h2", [], "Напитки")
    menu3.appendChild(menu3H2)
    container.appendChild(menu3)
    createCards(DRINKS)



  
}