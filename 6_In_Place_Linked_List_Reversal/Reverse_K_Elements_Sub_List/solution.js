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



const reverse_every_k_elements = function(head, k) {

    // set current to head, previous to null
    // while loop
        // set last_node_of_previous_part to previous
        // set last_node_of_sublist to current
        // set next to null, i = 0

        // the k loop
        // while current isn't null and i < k
            // next = current.next
            // current.next = previous
            // previous = current
            // current = next
            // increment i

        // the first pointer will start null, so, the following will occur after 1 k cycle
        // if the last node of the previous part isn't null
            // last node of previous part = previous
        // else
            // move head to previous

        // if current is null
            // break

        // otherwise, we can keep going, so
        // set previous to last node of sublist

    if (k <= 1 || head === null) return head
    let current = head,
        previous = null

    while (true) {
        let last_node_of_previous_part = previous,
            last_node_of_sublist = current,
            next = null,
            i = 0
        while(current !== null && i < k) {
            next = current.next
            current.next = previous
            previous = current
            current = next
            i += 1
        }

        // connect with the previous part
        if (last_node_of_previous_part !== null) {
            last_node_of_previous_part.next = previous
        } else {
            head = previous
        }

        // connect with the next part
        last_node_of_sublist.next = current

        if (current === null) break

        previous = last_node_of_sublist
    }

    return head;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)
