import { Nodes } from "./Nodes"


export const LinkedList = () => {
    let headNode = null
    let length = 0

    // Adds the node to the tail and add length value
    const append = (value) => {
        const newNode = Nodes(value)
        // If head is null set newNode as headNode
        if(headNode === null) {
            headNode = newNode
            length++
            // Go through nodes and once finding a node with nextNode value being null add the newNode to its nextNode
        } else {
            let pointer = headNode
            for(let i = 1; i < length; i++) {
                pointer = pointer.nextNode
               }
            pointer.setNextNode(newNode)
            length++
        }
    }
    // Adds the node to the head and puts its nextNode value to the old headNode and adds length
    const prepend = (value) => {
        const newNode = Nodes(value)
        // If head is null set newNode to the head
        if(headNode === null) {
            headNode = newNode
            length++
        } else {
            // Sets the current head to the pointer variable then the newNode will have the old head as the nextNode
            let pointer = headNode
            newNode.setNextNode(pointer)
            headNode = newNode
            length++
        }
    }

    // Gets the amount of nodes by getting length
    const size = () => {
        if(!headNode) return 'No node on the list, Please add a node'
        return length
    }

    // Gets the headNode value
    const head = () => {
        if(!headNode) return 'No node on the list, Please add a node'
        return headNode.value
    }
    // Gets the tail node value
    const tail = () => {
        if(!headNode) return 'No node on the list, Please add a node'
        // Sets pointer as current head and go through the nodes until finding the node with nextNode value of null
        let pointer = headNode
        if(length === 1) {
            return null
        } else {
            for(let i = 1; i < length - 1; i++) {
                pointer = pointer.nextNode
            }
            return pointer.nextNode.value
        }
    }
    
    const at = (index) => {
        if(headNode === null) {
            return 'No node on the list, Please add a node'
        } else if(typeof index !== 'number'){
            return 'Please enter a number'
            //If index is more than length or is negative or is zero, enter not a valid index
        } else if(index > length || index <= 0 || index == 0) {
            return 'Not a valid index'
        } else {
            let pointer = headNode
            for(let i = 1; i < index; i++) {
                pointer = pointer.nextNode
               }
            return pointer.value
        }
    }
    // removes the last node
    const pop = () => {
        let pointer = headNode
        if(headNode === null) {
            return 'No node on the list, Please add a node'
        // If length is equal to one set headNode to null since it is the only node
        } else if(length === 1) {
            headNode = null
            length--
        // sets the nextNode on the node before tail node to null to delete the current tail node and remove 1 length
        } else {
            for(let i = 1; i < length - 1; i++) {
                pointer = pointer.nextNode
            }
            pointer.setNextNode(null)
            length--
        }   
    }
    // Goes through the nodes to find the value
    const contains = (value) => {
        if(headNode === null) return 'No node on the list, Please add a node'
        let pointer = headNode
            for(let i = 0; i < length; i++) {
                if(pointer.value === value) return true
                pointer = pointer.nextNode
               }
        return false
    }
    // Finds the index of the value entered, goes through the for loop until it finds the value
    const find = (value) => {
        if(headNode === null) return 'No node on the list, Please add a node'
        let pointer = headNode
            for(let i = 0; i < length; i++) {
                if(pointer.value === value) return `Value entered: ${value}, Index: ${i + 1}`
                pointer = pointer.nextNode
               }
        return 'Value not found'
    }
    // Adds convertToString variable and goes through the nodes to get the data and at the end add null string
    const toString = () => {
        if(headNode === null) return 'No node on the list, Please add a node'
        let pointer = headNode
        let convertToString = ''
        for(let i = 0; i < length; i++) {
            convertToString = convertToString.concat(`(${pointer.value}) -> `)
            pointer = pointer.nextNode
        }
        convertToString = convertToString.concat('null')
        return convertToString
    }
    
    /// EXTRA CREDIT
    
    // insert the value on the given index
    const insertAt = (value, index) => {
        const newNode = Nodes(value)
          if(headNode === null) {
            return 'No node on the list, Please add a node'
        } else if(typeof index !== 'number'){
            return 'Please enter a number'
            //If index is more than length or is negative or is zero, enter not a valid index
        } else if(index > length || index <= 0 || index == 0) {
            return 'Not a valid index'
            //If index is 1 set headNode to newNode
        } else if(index === 1) {
          headNode = newNode
          length = index
        } else {
            let pointer = headNode
            // Set the newNode as nextNode to the node before the selected index
            for(let i = 1; i < index - 1; i++) {
                pointer = pointer.nextNode
              }
            pointer = pointer.setNextNode(newNode)
            length = index
        }
    }
    // Pass a number value and removes the node from that index
    const removeAt = (index) => {
        if(headNode === null) {
            return 'No node on the list, Please add a node'
        } else if(typeof index !== 'number'){
            return 'Please enter a number'
            //If index is more than length or is negative or is zero, enter not a valid index
        } else if(index > length || index <= 0 || index == 0) {
            return 'Not a valid index'
            //If index is 1 set headNode to null and set length to 0
        } else if(index === 1) {
          headNode = null
          length = 0
        } else {
            let pointer = headNode
            // On the node before the selected index nextNode value to null so the index selected becomes null
            for(let i = 1; i < index - 1; i++) {
                pointer = pointer.nextNode
              }
            pointer.setNextNode(null)
            length = index - 1
        }
        
    }
    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}
