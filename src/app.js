import './styles.css'

import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ShowTime } from './modules/time.module'
import { RandomFigure } from './modules/random.figure.module'
import { RandomAudio } from './modules/random.audio.module'
import { GuessNumberModule } from './modules/guessNumber.module'
import { ClicksModule } from './modules/clicks.module'
import { CustomMessageModule } from './modules/custom.message.module'
import { TimerModule } from './modules/timer.module'
import {CustomMouseModule} from './modules/custom.mouse.module'
import {BestTeam} from './modules/best.team.module'

const menu = new ContextMenu('.menu')

const modules = {
    randomAudio: new RandomAudio('randomAudio', 'Рандомный звук'),
    randomFigure: new RandomFigure('randomFigure', 'Случайная фигура'),
    showTime: new ShowTime('showTime', 'Показать время'),
    backgroundModule: new BackgroundModule('backgroundModule', 'Изменить фон'),
    guessNumber: new GuessNumberModule(),
    clicksModule: new ClicksModule(),
    customMessageModule: new CustomMessageModule('customMessageModule', 'Вывести сообщение'),
    timerModule: new TimerModule('timerModule', "Таймер"),
    customMouseModule: new CustomMouseModule('customMouseModule', "Сменить курсор"),
    bestTeam: new BestTeam('bestTeam', 'Узнать лучшую команду')
}

function removeModuleResult() {
    const module = document.querySelector('.module')
    if (module) {
        module.remove()
    }
}

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    removeModuleResult()
    const items = document.querySelectorAll('.menu-item')

    if (items.length !== 0) {
        items.forEach((el) => {
            el.remove()
        })
    } 

    Object.assign(menu.el.style, {
        top: `${event.clientY}px`,
        left: `${event.clientX}px`
    })

    const objKeys = Object.keys(modules)
    if (objKeys.length !== 0) {
        menu.open()
        objKeys.forEach((el) => {
            menu.add(modules[el])
        })
    }
})

menu.el.addEventListener('click', (event) => {
    removeModuleResult()
    const {type} = event.target.dataset
    modules[type].trigger()
    menu.close()
})

