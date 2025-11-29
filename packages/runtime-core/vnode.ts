export interface VNodeProps {
  [key: string]: unknown;
}

export interface VNode {
  type: string;
  props: VNodeProps;
  children: (VNode | string)[];
}
