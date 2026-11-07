class BinaryTree {  // 이진트리

    constructor(data, leftTree=null, rightTree=null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
    } // 생성자

getData() { // 해당 트리(노드)의 데이터 리턴
    return this.data;
}

setData(data)  { // 해당 트리(노드)의 데이터 설정
    this.data = data;
}

getLeftSubTree() { // 해당 트리(노드)의 왼쪽 서브 트리 리턴
    return this.leftSubTree;
}


 getRightSubTree() { // 해당 트리(노드)의 오른쪽 서브 트리 리턴
    return this.rightSubTree;
 }
 
 setLeftSubTree(tree) { // 해당 트리의 왼쪽 서브 트리를 tree로 설정
    this.leftSubTree = tree;
 }
    
 setRightSubTree(tree) {  //해당 트리의 오른쪽 서브 트리를 tree로 설정
    this.rightSubTree = tree;
 }

preOrderTraversal(tree)  { // 전위 순회 : 루트 -> 왼쪽 -> 오른쪽

    if(tree===null) return;     // 기저 조건
    console.log(tree.data);
    this.preOrderTraversal(tree.getLeftSubTree());
    this.preOrderTraversal(tree.getRightSubTree());

}

inOrderTraversal(tree) // 중위 순회 
{
    if(tree===null) return;     // 기저 조건
    this.inOrderTraversal(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraversal(tree.getRightSubTree());
}

postOrderTraversal(tree) // 후위 순회
{
    if(tree===null) return;     // 기저 조건
    this.postOrderTraversal(tree.getLeftSubTree());
    this.postOrderTraversal(tree.getRightSubTree());
    console.log(tree.data);
}

removeLeftSubTree() // 왼쪽 자식 노드를 삭제
{
    let deletingNode = this.getLeftSubTree();
    this.setLeftSubTree(null);
    return deletingNode;
}


removeRightSubTree() // 오른쪽 자식 노드를 삭제
{
    let deletingNode = this.getLeftSubTree();
    this.setRightSubTree(null);
    return deletingNode;
}





} // class

export {BinaryTree};