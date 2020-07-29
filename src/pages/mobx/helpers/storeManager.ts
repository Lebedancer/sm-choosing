let list: any = {}; // need true types

export const addStore = (key: string, value: object) => {
    list[key] = value;
}

export default list;