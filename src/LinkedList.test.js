const { LinkedList } = require("./LinkedList");

const testNode1 = 'testNode1'
const testNode2 = 'testNode2'
const testNode3 = 'testNode3'
const testNode4 = 'testNode4'

describe('Test to insure linked list functions work', () => {
    // Head function - Shows the headNode
    test(`Head function should return 'No node on the list, Please add a node' due not having a head node`, () => {
        const list = LinkedList()
        expect(list.head()).toBe('No node on the list, Please add a node')
    })

    test('Head function should return testNode1 due to appeding two nodes, testNode2 being the past to append', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        expect(list.head()).toBe(testNode1)
    })

    // Tail function - Shows the tail node value
    test(`Tail function should return 'No node on the list, Please add a node' due to not having a node`, () => {
        const list = LinkedList()
        expect(list.tail()).toBe('No node on the list, Please add a node')
    })

    test('Tail function should return testNode2 due to it being the last node to be appended', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        expect(list.tail()).toBe(testNode2)
    })

    test('Tail function should return null when just having a head value', () => {
        const list = LinkedList()
        list.append(testNode1)
        expect(list.tail()).toBe(null)
    })

    // Size function - shows the amount of nodes inside the list
    test(`Size function shows 'No node on the list, Please add a node' if there is no headNode`, () => {
        const list = LinkedList()
        expect(list.size()).toBe('No node on the list, Please add a node')
    })

    test('Size shows 1 since there are only 1 node', () => {
        const list = LinkedList()
        list.append(testNode1)
        expect(list.size()).toBe(1)
    })

    test('Size shows 4 since there are 4 nodes', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)
        list.prepend(testNode4)

        expect(list.size()).toBe(4)
    })

    // Append function - Adds the node to the tail
    test('Appends testNode3 first then testNode4. testNode4 should be in tail since it was lat appended', () => {
        const list = LinkedList()
        list.append(testNode3)
        list.append(testNode4)
        expect(list.tail()).toBe(testNode4)
    })

    test('Appends testNode1 first then testNode3. testNode3 should be in tail since it was last appended', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode3)
        expect(list.tail()).toBe(testNode3)
    })

    // Prepend function - Adds the node to the head and puts its nextNode value to the old headNode

    test('If there is not headNode, prepends adds node as the head', () => {
        const list = LinkedList()
        list.append(testNode1)
        expect(list.head()).toBe(testNode1)
    })

    test('Prepend testNode4, which should be in the head of the 4 nodes', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)

        list.prepend(testNode4)
        expect(list.head()).toBe(testNode4)
    })

    test('Prepends testNode4 then testNode3, testNode3 should be in the head since it was prepend last', () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        list.prepend(testNode4)
        list.prepend(testNode3)
        expect(list.head()).toBe(testNode3)
    })

    // At function allows users to put index and finds the node value
    test(`When users enter an index and there is no head, it should give user the message 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()
        expect(list.at(1)).toBe('No node on the list, Please add a node')
    })

    test(`when user puts a string as an index value, user should see a message of 'Please enter a number'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.at('test')).toBe('Please enter a number')
    })

    test(`when user puts a value over the amount of nodes, user should get the message of 'Not a valid index'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.at(3)).toBe('Not a valid index')
    })

    test(`when user puts a value zero or less, user should get the message of 'Not a valid index'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.at(0)).toBe('Not a valid index')
    })

    test(`When user puts the index 2, it should show testNode3 since is the last node appended`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.at(2)).toBe(testNode2)
    })

    // Pop function - removes the last node
    test(`When user pops a node where there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.pop()).toBe('No node on the list, Please add a node')
    })

    test(`When user pops when there is only 1 node, headNode should be null`, () => {
        const list = LinkedList()
        list.append(testNode1)

        list.pop()
        expect(list.head()).toBe('No node on the list, Please add a node')
    })

    test(`When user pops when there is two nodes, head should return testNode1`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        list.pop()
        expect(list.head()).toBe(testNode1)
    })

    // Contain function - Goes through the nodes to find the value
    test(`When user uses contain and there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.contains(testNode1)).toBe('No node on the list, Please add a node')
    })

    test(`Passing testNode1 on contain should return true, since it is appended to the list`, () => {
        const list = LinkedList()
        list.append(testNode1)

        expect(list.contains(testNode1)).toBeTruthy()
    })

    test(`Passing testNode2 on contain should return false, since there is no testNode2`, () => {
        const list = LinkedList()
        list.append(testNode1)

        expect(list.contains(testNode2)).toBeFalsy()
    })

    // Find function - Finds the index of the value entered, goes through the for loop until it finds the value
    test(`When user uses find and there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.find(testNode1)).toBe('No node on the list, Please add a node')
    })

    test(`When user uses find on testNode4 and value does not exist. User should get message 'Value not found'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.find(testNode4)).toBe('Value not found')
    })

    test(`When user uses find on testNode3 and value does exist. User should get message 'Value not found Value entered: testNode4, Index: 3'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)

        expect(list.find(testNode3)).toBe('Value entered: testNode3, Index: 3')
    })

    // ToString function - convers the nodes to a string value
    test(`When user uses toString and there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.toString()).toBe('No node on the list, Please add a node')
    })

    test(`When user uses toString and two nodes it should print testNode values with null at the end`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.toString()).toBe('(testNode1) -> (testNode2) -> null')
    })

    // InsertAt function - insert the value on the given index
    test(`When user uses toString and there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.insertAt(2)).toBe('No node on the list, Please add a node')
    })

    test(`When passing testNode4 on a string index using insertAt, users should get a messaging saying, 'Please enter a number'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.insertAt(testNode4, 'test')).toBe('Please enter a number')
    })

    test(`When passing testNode4 value and index of 0 or less, user should see a message saying, 'Not a valid index'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.insertAt(testNode4, 0)).toBe('Not a valid index')
    })

    test(`User passes testNode4 where testUser3 is. testNode4 should be the new tail`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)
        list.insertAt(testNode4, 3)

        expect(list.tail()).toBe(testNode4)
    })

    test(`User passes testNode4 and insert it on index 1, testNode4 should be the new head`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)
        list.insertAt(testNode4, 1)

        expect(list.head()).toBe(testNode4)
    })

    // RemoveAt function - Pass a number value and removes the node from that index
    test(`When user uses removeAt and there is no headNode, user should get a message saying, 'No node on the list, Please add a node'`, () => {
        const list = LinkedList()

        expect(list.removeAt(1)).toBe('No node on the list, Please add a node')
    })

    test(`When passing a string on index using removeAt, users should get a messaging saying, 'Please enter a number'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.removeAt('test')).toBe('Please enter a number')
    })

    test(`When passing index of 0 or less, user should see a message saying, 'Not a valid index'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)

        expect(list.removeAt(0)).toBe('Not a valid index')
    })

    test(`When passing 3 on removeAt, it should remove testNode3 and have testNode2 as the tail`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)
        list.removeAt(3)

        expect(list.tail()).toBe(testNode2)
    })

    test(`When passing 1 on removeAt, it should remove the head. User will get a messaing saying, 'Not a valid index'`, () => {
        const list = LinkedList()
        list.append(testNode1)
        list.append(testNode2)
        list.append(testNode3)
        list.removeAt(1)

        expect(list.head()).toBe('No node on the list, Please add a node')
    })
})