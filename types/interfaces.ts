
// Exported Interface example (you need to import it in the file you want to use it)
export interface Customer {
    id: string;
    name: string;
    email: string;
}

// Global interface example
declare global {
    
    interface Post {
      id: string;
      title: string;
      body: string;
    }

}
  