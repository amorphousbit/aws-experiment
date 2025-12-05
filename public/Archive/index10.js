
class BinaryTreeNode {
    value = null;
    left = null;
    right = null;

    constructor(newvalue) {
        if (!newvalue) {
            throw new Error("Non-existence value")
        }
        this.value = newvalue;
    }

    get leftDepth() {
        return this.left ? this.left.maxDepth + 1 : 0;
    }

    get rightDepth() {
        return this.right ? this.right.maxDepth  + 1 : 0;        
    }

    get maxDepth() {
        return this.leftDepth > this.rightDepth ? this.leftDepth : this.rightDepth;
    }

    serialize() {
        return {
            // maxDepth: this.maxDepth,
            // leftDepth: this.leftDepth,
            // rightDepth: this.rightDepth,
            value: this.value,
            _left: this.left?.serialize(),
            _right: this.right?.serialize(),
        };
    }

    addNode(node) {
        if (!node instanceof BinaryTreeNode) {
            throw new Error("Invalid addNode input");
        }

        if (node.value < this.value && this.left) {
            this.left.addNode(node);
            return;
        } 
        if (node.value < this.value && !this.left) {
            this.left = node;
            return;
        } 
        if (node.value >= this.value && this.right) {
            this.right.addNode(node);
            return;
        } 
        if (node.value >= this.value && !this.right) {
            this.right = node;
            return;
        } 
        
        throw new Error("Unaccounted for edge case");
    }

    balance() {
        let newLocalRoot = this;

        if (this.leftDepth > (this.rightDepth + 1)) {
            console.log("Balancing Left: " + this.value, this.serialize());

            newLocalRoot = this.left; // A

            const rightOfReplacement = this.left.right;
            newLocalRoot.right = this;
            this.left = rightOfReplacement;
        }

        if (this.rightDepth > (this.leftDepth + 1)) {            
            console.log("Balancing Right: " + this.value, this.serialize());

            newLocalRoot = this.right;
            const leftOfReplacement = this.right.left;

            newLocalRoot.left = this;
            this.right = leftOfReplacement;
        }

        if (newLocalRoot.left) {
            newLocalRoot.left = newLocalRoot.left.balance();
        }

        if (newLocalRoot.right) {
            newLocalRoot.right = newLocalRoot.right.balance();
        }

        return newLocalRoot;
    }
}

class BinaryTree {
    root = null;

    addNode(node) {
        if (!node instanceof BinaryTreeNode) {
            throw new Error("node object of wrong type: " + typeof node)
        }

        if (this.root) {
            this.root.addNode(node);
        } else {
            this.root = node;
        }

        this.root = this.root.balance();
    }

    serialize() {
        return this.root.serialize();
    }
}

const tree = new BinaryTree();
tree.addNode(new BinaryTreeNode(10));
tree.addNode(new BinaryTreeNode(9));
tree.addNode(new BinaryTreeNode(8));
tree.addNode(new BinaryTreeNode(7));
tree.addNode(new BinaryTreeNode(6));
tree.addNode(new BinaryTreeNode(5));
tree.addNode(new BinaryTreeNode(4));
tree.addNode(new BinaryTreeNode(3));
tree.addNode(new BinaryTreeNode(2));
tree.addNode(new BinaryTreeNode(1));
console.log(tree.serialize());



