export const helper = {
    groupBy(list: Array<any>, keyGetter: any) {
        const map: any = {};
        list.forEach((item) => {
            const key: any = keyGetter(item);
            const collection: any = map[key];
            if (!collection) {
                map[key] = [item];
            } else {
                collection.push(item);
            }
        });
        return map;
    },
    objectToArray(obj: any, operator: any) {
        return Object.keys(obj).map(operator);
    },
    sortAB(a: any, b: any) {
        return b.value - a.value;
    }
};
