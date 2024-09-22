import {Module} from '../core/module';
import {timer} from '../utils'

export class TimerModule extends Module {
    trigger() {
        console.log("timerTrigerred")

        const startingTime = new Date();

        const timerContent = document.createElement('span');
        setInterval(() => {
            timerContent.textContent = timer(startingTime);
        })

        const timerBlock = document.createElement('div');
        timerBlock.className = "timerBlock";
        timerBlock.append(timerContent);

        const closeTimerButton = document.createElement('button');
        closeTimerButton.className = "closeTimerButton";
        closeTimerButton.textContent = "Закрыть";
        closeTimerButton.addEventListener('click', event => {
            if(event.target) {
                document.querySelector('.timerBlock').remove();
            }
        })
        timerBlock.append(closeTimerButton);

        document.body.append(timerBlock);
    }
}