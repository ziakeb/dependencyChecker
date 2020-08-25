let id = 0;

export default class Dependency{
    constructor(pName, current, latest, outdated, vulnerable){
        this.id = id++
        this.packageName = pName;
        this.current = current;
        this.latest = latest;
        this.outdated = outdated || 'No';
        this.vulnerable = vulnerable || 'No';
    }
}