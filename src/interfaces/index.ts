interface ABIInput {
    internalType: string;
    name: string;
    type: string;
  }
  
  interface ABIEventInput {
    indexed: boolean;
    internalType: string;
    name: string;
    type: string;
  }
  
  interface ABIEvent {
    anonymous: boolean;
    inputs: ABIEventInput[];
    name: string;
    type: string;
  }
  
  interface ABIFunction {
    inputs: ABIInput[];
    name: string;
    outputs?: ABIInput[];
    stateMutability: string;
    type: string;
  }
  
  interface CONTRACTABI {
    abi: (ABIEvent | ABIFunction)[];
  }

  export type {CONTRACTABI};