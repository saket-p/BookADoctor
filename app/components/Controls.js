import Component from './Component.js';

export default class Controls extends Component {
    constructor(params) {
        super(params);
        
        this.subscribeTo('cities');
        this.subscribeTo('selectedCity');
        this.subscribeTo('localities');
        this.subscribeTo('selectedLocality');
        this.subscribeTo('timeSlots');
        this.subscribeTo('selectedTime');

        this.addEventListener('change', 'selectCity', this.handleCityChange.bind(this));
        this.addEventListener('change', 'selectLocality', this.handleLocalityChange.bind(this));
        this.addEventListener('change', 'selectTime', this.handleTimeChange.bind(this));
    }

    handleCityChange(e) {

    }

    handleLocalityChange(e) {

    }

    handleTimeChange(e) {

    }

    render() {
        this.element.innerHTML = Controls.markup(this.state);
    }

    static markup(m) {
        return `
        <section class="city">
        <h1>Book My Doctor</h1>
        <select name="selectCity" class="selectCity">
            ${m.cities.value && m.cities.value.reduce((htmlArr, city) => {
                htmlArr.push(`<option value="${city.id}" ${m.selectedCity.value && city.id === m.selectedCity.value.id ? "selected" : ""}>${city.name}</option>`);
                return htmlArr;
            }, []).join('')}
        </select>
        </section>
        <section class="filters">
            <h2>Medical appointments made easy</h2>
            <div class="filterContainers">
                <select name="selectLocality" class="selectLocality">
                    <option value="">Locality</option>
                    ${m.localities.value && m.localities.value.reduce((htmlArr, locality) => {
                        htmlArr.push(`<option value="${locality.id}" ${m.selectedLocality.value && locality.id === m.selectedLocality.value.id ? "selected" : ""}>${locality.name}</option>`);
                        return htmlArr;
                    }, []).join('')}
                </select>
                <select name="selectTime" class="selectTime">
                    <option value="">Time</option>
                    ${m.timeSlots.value && m.timeSlots.value.reduce((htmlArr, time) => {
                        htmlArr.push(`<option value="${time}" ${m.selectedTime.value && time === m.selectedTime.value ? "selected" : ""}>${time}</option>`);
                        return htmlArr;
                    }, []).join('')}
                </select>
            </div>
        </section>
        `;
    }
}