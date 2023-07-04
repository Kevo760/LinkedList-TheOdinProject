import { Nodes } from "./Nodes";

const randomNode = Nodes()
const testNode = Nodes('test')
const node2 = Nodes(2)

describe('Test node values', () => {
    test('Check randomNodes value to be empty', () => {
        expect(randomNode.value).toBe(null)
    })

    test('Checks testNode value to be test', () => {
        expect(testNode.value).toBe('test')
    })

    test('testNode nextNode value should be 2, by setting testNodes nextNode to be node2', () => {
        testNode.nextNode = node2
        expect(testNode.nextNode).toBe(node2)
    })
})