import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  XYPosition,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';

import { NodeData } from './MindMapNode';

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  updateNodeLabel: (nodeId: string, label: string) => void;
  addChildNode: (parentNode: Node, position: XYPosition) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: '1',
      type: 'mindmap',
      data: { label: 'Root' },
      position: { x: 0, y: 0 },
      style: { backgroundColor: '#6ede87', color: 'white' },
    },
    
    {
      id: '2',
      type: 'mindmap',
      data: { label: 'Right 2' },
      position: { x: 100, y: 100 },
      style: { backgroundColor: '#6865A5', color: 'white' },
    },
    {
      id: '3',
      type: 'mindmap',
      data: { label: 'Left 1' },
      position: { x: -100, y: -100 },
      style: { backgroundColor: '#6ede87', color: 'white' },
    },
    {
      id: '4',
      type: 'mindmap',
      data: { label: 'Left 2' },
      position: { x: -100, y: 100 },
      style: { backgroundColor: '#6865A5', color: 'white' },
    },
    {
      id: '5',
      type:"mindmap",
      // you can also pass a React component as a label
      data: { label: 'Root' },
      position: { x: 100, y: -100 },
      style: { backgroundColor: '#ff0072', color: 'white' },
    },

  
    
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '1', target: '3'},
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e2-5', source: '1', target: '5'},

  ],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, label };
        }        return node;
      }),
    });
  },
  addChildNode: (parentNode: Node, position: XYPosition) => {

    const direction = parentNode.position.x > 0 ? 1 : -1;

    const position_x = parentNode.position.x +  direction* 10;
    const position_y = parentNode.position.y + direction* 10;

    console.log(direction)

    const newNode = {
      id: nanoid(),
      type: 'mindmap',
      data: { label: 'New Topic' },
      position: {x : position_x, y:position_y},
      dragHandle: '.dragHandle',
      parentNode: parentNode.id,
    };

   

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    };

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    });

    console.log('new node added')
  },
}));

export default useStore;
