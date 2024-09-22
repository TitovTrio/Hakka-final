import {Module} from '../core/module'
import { random } from '../utils'

export class CustomMouseModule extends Module {
    trigger() {
        const cursors = ["url('./src/imgs/Undead.png'), auto", "url('./src/imgs/Human.png'), auto", "url('./src/imgs/Orc.png'), auto", "url('./src/imgs/NightElf.png'), auto", "auto"]
        document.body.style.cursor = cursors[random(0,4)];
    }
}