export type ExampleProps = {
    title: string;
    description?: string;
  };
  
  export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
  }
  
  export type User = {
    id: number;
    name: string;
    email: string;
  };
  
  export type Post = {
    id: number;
    title: string;
    content: string;
    authorId: number;
  };