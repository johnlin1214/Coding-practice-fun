class Node
  attr_accessor :value, :right, :left

  def initialize(value, right = nil, left = nil)
    @value = value
    @right = right
    @left = left
  end
end

one = Node.new(1)
two = Node.new(2)
three = Node.new(3)
four = Node.new(4)
five = Node.new(5)
six = Node.new(6)
seven = Node.new(7)

two.right = three
two.left = one

six.right = seven
six.left = five

four.right = six
four.left = two

#       4
#     /   \
#    /     \
#   2       6
#  / \     / \
# 1   3   5   7

class Tree
  def initialize(root)
    @root = root
  end

  def insert(value, node=@root)
    currentNode = node
    if value < currentNode.value
      currentNode.left ? insert(value, currentNode.left) : currentNode.left = Node.new(value)
    else
     currentNode.right ? insert(value, currentNode.right) : currentNode.right = Node.new(value)
    end
  end

  def printLevels(rootNode)
    nodes = [rootNode]
    until nodes.empty?
      currentNode = nodes.shift
      puts currentNode.value
      if currentNode.left
        nodes.push(currentNode.left)
      end
      if currentNode.right
       nodes.push(currentNode.right)
     end
   end
 end

 def greatest_sum(node = @root)
   return 0 if node == nil
   node.value + max(greatest_sum(node.left), greatest_sum(node.right))
 end

 private

 def max(*values)
    values.max
 end
end

tree = Tree.new(four)
# bi.printBredth(four)
tree.insert(0)
tree.insert(10)
 #          4
 #        /   \
 #       /     \
 #      2       6
 #     / \     / \
 #    1   3   5   7
 #  /              \
 # 0                10

 p tree.greatest_sum
