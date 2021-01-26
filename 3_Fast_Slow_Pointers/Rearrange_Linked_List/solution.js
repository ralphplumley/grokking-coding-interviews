class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    print_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        console.log(result);
    }
}


const reorder = function(head) {
    if (head === null || head.next === null) {
        return;
    }

    // find the middle
    let slow = head, fast = head
    while (fast !== null) {
        if (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        } else {
            fast = null;
        }
    }

    // slow is now pointing to middle
    let headSecondHalf = reverse(slow)
    let headFirstHalf = head

    // weave together
    while(headFirstHalf !== null && headSecondHalf !== null) {
        let tmp = headFirstHalf.next
        headFirstHalf.next = headSecondHalf
        headFirstHalf = tmp

        tmp = headSecondHalf.next
        headSecondHalf.next = headFirstHalf
        headSecondHalf = tmp
    }

    // set the next of the last node to null
    if(headFirstHalf !== null) {
        headFirstHalf.next = null
    }

    return
}

function reverse(head) {
    let prev = null
    while(head !== null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()
