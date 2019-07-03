import Component from './Component.js';

export default class Results extends Component {
    constructor(params) {
        super(params);
        
        this.subscribeTo('sortOrder');
        this.subscribeTo('results');
        this.subscribeTo('bookedResult');


        this.addEventListener('click', 'btnSort', this.handleSortClick.bind(this));
        this.addEventListener('click', 'btnBook', this.handleBookClick.bind(this));
        this.addEventListener('click', 'btnTimeSlot', this.handleTimeSlotClick.bind(this));
    }

    handleSortClick(e) {

    }

    handleBookClick(e) {

    }

    handleTimeSlotClick(e) {

    }

    render() {
        this.element.innerHTML = this.state.results.value && this.state.results.value.reduce((htmlArr, result) => {
            htmlArr.push(Results.markup(result));
            return htmlArr;
        }, []).join('');
    }

    static markup(m) {
        return `
            <section class="result">
            <figure class="result__img">
                <img src="${m.image}" alt="">
            </figure>
            <div class="result__details">
                <p class="name">${m.name}</p>
                <p class="address">${m.address}</p>
                <p class="type">${m.type}</p>
            </div>
            <div class="result__price">
                <p>Rs ${m.price}</p>
                <button class="btnBook">Book</button>
            </div>
            <div class="result__slots">
                ${m.slots.reduce((html, slot) => {
                    html.push(`<button class="btnTimeSlot">${slot}</button>`)
                    return html;
                }, []).join('')}
            </div>
            </section>
        `;
    }
}