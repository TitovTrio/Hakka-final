import {Module} from '../core/module';
import "./clicks.css";
import BESTTEAM from '../imgs/bestteam.png'

export class BestTeam extends Module {
    trigger() {
        this.showOverlay();
    }
    createOverlay() {
        this.overlay = document.createElement("div");
        this.overlay.classList.add("clicks-overlay");

        this.finishButton = document.createElement("button");
        this.finishButton.textContent = "Закрыть";
        this.finishButton.classList.add("finish-button");
        this.finishButton.addEventListener("click", this.clear.bind(this));
        this.overlay.appendChild(this.finishButton);

        this.bestteam = document.createElement('img');
        this.bestteam.src = BESTTEAM;
        
        this.overlay.append(this.finishButton, this.bestteam);
    }

    showOverlay() {
        if (!this.overlay) {
            this.createOverlay();
            document.body.appendChild(this.overlay);
        }
    }

    clear() {
        if (this.overlay) {
            this.overlay.classList.add("fade-out");
            this.overlay.addEventListener("animationend", () => {
                this.overlay.remove();
                this.overlay = null;
            });
        } 
    }
}