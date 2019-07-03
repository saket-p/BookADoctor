import {
    Subscriber
} from '../utils/pubsub/index.js'
import {
    bindEventListenerToClass
} from '../utils/index.js';

export default class Component extends Subscriber {
    constructor(params) {
        super(params.store);
        this.state = params.store.state;
        this.element = document.querySelector(params.elClass);
    }

    getNotifiedWith(...stateChanges) {
        console.log(`Rendering: ${this.constructor.name}`);
        this.render(stateChanges);
    }

    addEventListener(eventType, targetClassName, eventHandler) {
        this.element.addEventListener(eventType, bindEventListenerToClass(eventHandler, targetClassName));
    }
}