class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    get_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
};

const reverse_sub_list = function(head, p, q) {

    let current = head,
        previous = null

    let i = 0
    while (i < p - 1) {
        previous = head
        current = head.next
        i += 1
    }

    const last_node_of_first_part = previous
    const last_node_of_sub_list = current
    let next = null

    i = 0
    while (current !== null && i < q - p + 1) {
        next = current.next
        current.next = previous
        previous = current
        current = next
        i += 1
    }

    if (last_node_of_first_part !== null) {
        last_node_of_first_part.next = previous
    } else {
        head = first
    }

    last_node_of_sub_list.next = current

    return head;
};

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
