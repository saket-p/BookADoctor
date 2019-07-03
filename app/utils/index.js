/**
 * 
 * @param {function} fn | event handler to be called when target's class matches given className
 * @param {string} className 
 */
export const bindEventListenerToClass = (fn, className) => {
    return (e) => {
        if (e.target.classList.contains(className)) {
            fn(e);
        }
    }
}

export const updateObjectProp = (obj, prop, value) => {
    obj[prop] = {
        ...obj[prop],
        ...{
            value
        }
    };
}

export const getLocalitiesInCity = (localities, cityId) => localities.filter(l => l.cityId === cityId);

export const getObjFromArrVal = (arr, elemKey) => arr.reduce((acc, val) => {
    acc[val[elemKey] ? val[elemKey] : val] = null;
    return acc;
}, {});

export const getResults = (allResults, localitiesMap, sortOrder) => allResults
    .filter(result => localitiesMap.hasOwnProperty(result.localityId))
    .sort((r1, r2) => sortOrder === 'asc' ? r1.price - r2.price : r2.price - r1.price);