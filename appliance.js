function Appliance(opts) {
    this.name = opts.name
    this.actions = {
        foo: {
            do: console.log(this.name)
        }
    }
}

Appliance.prototype.getActions = () => {
    return Object.keys(this.actions)
}

Appliance.prototype.doAction = (action) => {
    return this.actions[action].do()
}



