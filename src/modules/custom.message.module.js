import {Module} from '../core/module'

export class CustomMessageModule extends Module {
    trigger() {
        const contextMenu = document.querySelector('.menu');
        contextMenu.classList.remove('open');

        const text = prompt('Введите текст сообщения: ');
        const messageContent = document.createElement('p');
        messageContent.textContent = text;

        const messageBlock = document.createElement('div');
        messageBlock.className = "messageBlock";
        messageBlock.append(messageContent);

        const blockID = Date.now();
        messageBlock.dataset.id = blockID
        document.body.append(messageBlock);
        setTimeout(() => {
            document.querySelector(`[data-id="${blockID}"]`).remove()
        }, 5000)
    }
}