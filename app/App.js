import Component from './components/Component.js';
import Controls from './components/Controls.js';
import Results from './components/Results.js';
import fetchData from './api/fetchData.js';
import {
    updateObjectProp,
    getLocalitiesInCity,
    getObjFromArrVal,
    getResults
} from './utils/index.js';

const DATA_API = 'https://api.myjson.com/bins/f7i7b';

export default class App extends Component {
    constructor(params) {
        super(params);

        this.spinner = this.element.querySelector('.spinner');
        this.initialLoadDone = false;
        this.childComponents = [];
        this.config = {
            store: params.store
        }

        this.init();
    }

    init() {
        const c1 = new Controls(this.getConfig({
            elClass: '.controls'
        }));
        const c2 = new Results(this.getConfig({
            elClass: '.resultContainer'
        }));
        this.childComponents.push(c1);
        this.childComponents.push(c2);

        this.subscribeTo('allResults');

        fetchData(DATA_API, this.handleData.bind(this));
    }

    handleData(data) {
        updateObjectProp(this.config.store.state, 'cities', data.cities);
        updateObjectProp(this.config.store.state, 'selectedCity', data.cities[0]);
        const localitiesInCity = getLocalitiesInCity(data.localities, data.cities[0].id);
        updateObjectProp(this.config.store.state, 'localities', localitiesInCity);
        updateObjectProp(this.config.store.state, 'sortOrder', 'asc');
        const res = getResults(data.medicalCenters, getObjFromArrVal(localitiesInCity, 'id'), 'asc');
        updateObjectProp(this.config.store.state, 'results', res);
        this.initialLoadDone = true;
        this.element.querySelector('.spinner').classList.toggle('noshow');
        this.element.querySelector('.bookAppointment').classList.toggle('noshow');
        this.render();
    }

    render() {
        this.initialLoadDone && 
        this.childComponents.forEach(cmp => {
            cmp.render()
        });
    }

    getConfig(addition) {
        addition = !addition ? {} : addition;
        return {
            ...this.config,
            ...addition
        };
    }
}