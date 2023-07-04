export const Nodes = (value) => {
    return {
        value: value || null,
        nextNode: null,
        setNextNode(value) {
            this.nextNode = value
        }
    }
}