/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/ 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === undefined || head === null) {
        return null;
    }
    let orginHead = head;
    let reverseHead = null;
    
    let reverse = function(head){
        if(head.next === null){
            reverseHead = head;
            return head
        }else{
            let node = reverse(head.next);
            node.next = head
            if (orginHead === head) {
                head.next = null
                return reverseHead
            } else {
                return head
            }
        }
    }
    return reverse(head)
};