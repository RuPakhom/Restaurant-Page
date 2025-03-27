const container = document.querySelector("#content")
const WEEK_DAYS = [
    {
        day: "Понедельник",
        time: "9:00-22:00"
    },
    {
        day: "Вторник",
        time: "8:00-22:00"
    },
    {
        day: "Среда",
        time: "8:00-22:00"
    },
    {
        day: "Четверг",
        time: "9:00-22:00"
    },
    {
        day: "Пятница",
        time: "8:00-24:00"
    },
    {
        day: "Суббота",
        time: "9:00-24:00"
    },
    {
        day: "Воскресенье",
        time: "8:00-23:00"
    },
]

export function createElement(el, classArr, text){
    const element = document.createElement(el)
    classArr.forEach(item => {
        element.classList.add(item)
    })
    if(text){
        element.textContent = text
    }
    return element
}

export function load(){

    container.textContent = ""
    const h1 = createElement("h1", ["content-item", "sign"], "Ruslan's Tamle Food")

    const description = createElement("div", ["content-item", "description"])

    const quote = createElement("p",["quote"], `У нас самый лучший очпочмак! 
                         Атмосфера и обслуживание наших гостей создают ощущение, что вы посреди леса и едите как медведь. 
                        Вы захотите возвращаться сюда снова и снова.`)
    
    const author = createElement("p", ["author"], "Ruslan")

    description.appendChild(quote)
    description.appendChild(author)

    const workingHours = createElement("div", ["content-item", "hours"])
    const h2WorkingHours = createElement("h2", [], "Часы работы")
    workingHours.appendChild(h2WorkingHours)

    WEEK_DAYS.forEach((item) => {

        const weekdayContainer = createElement("div", ["weekday-container"])
        const weekday = createElement("p",["weekday"],item.day)
        const weekdayHours = createElement("p",["weekday-hours"],item.time)
        weekdayContainer.appendChild(weekday)
        weekdayContainer.appendChild(weekdayHours)
        workingHours.appendChild(weekdayContainer)
    })

    const location = createElement("div", ["content-item", "location"])
    const h2Location = createElement("h2", [], "Адрес")
    const address = createElement("address", [], "г. Казань, ул. Медевежья, 22, опушка леса")
    location.appendChild(h2Location)
    location.appendChild(address)

    container.appendChild(h1)
    container.appendChild(description)
    container.appendChild(workingHours)
    container.appendChild(location)



        



}