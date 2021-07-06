class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

const is_palindromic_linked_list= function(head) {
    if (head === null || head.next === null) return true

    // let's find the middle
    let slow = head, fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse the second half
    let headSecondHalf = reverse(slow)
    // store the head of reversed part, so we can revert back later
    let copyHeadSecondHalf = headSecondHalf

    // compare the first and second half, node by node
    while (head !== null && headSecondHalf !== null) {
        if (head.value !== headSecondHalf.value) {
            break // not a palindrome
        }
        head = head.next
        headSecondHalf = headSecondHalf.next
    }

    // revert the reverse of the second half
    reverse(copyHeadSecondHalf)

    // if both halves match
    if (head === null || headSecondHalf === null) return true

    return false;
};

function reverse(head) {
    let prev = null
    while (head !== null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

head = new Node(1)
head.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
