import type { Letters, UnionToArray } from "./types.js";

declare function wait<T extends PropertyKey>(): Promise<UnionToArray<T>>;

export function hasFloatingPromise() {
    /* ... */    
    wait< Letters |  1 > () ;
        /* ... */        
        wait<
                Letters | 2
        > () 
        /* ... */
        /* ... */wait<Letters | 3> () ; 
        wait<Letters | 4> () ;
        /* ... */
        wait<Letters | 5> () ;
}
