import { Record } from "../core";
import { Binding } from "./Binding";
import { Ref } from "./Ref";

declare type Path = string | Binding;

export interface ViewConfig {
   store?: View;
   sealed?: boolean;
}

export interface ViewMethods<D = Record> {
   getData(): D;

   init(path: Path, value: any): boolean;

   set(path: Path, value: any): boolean;
   set(path: Record, value: Record): boolean;

   get(path: Path): any;
   get(paths: Path[]): any[];
   get(...paths: Path[]): any[];

   /**
    * Removes data from the Store.
    * @param paths - One or more paths to be deleted.
    * @return {boolean}
    */
   delete(path: Path): boolean;
   delete(paths: Path[]): boolean;
   delete(...paths: Path[]): boolean;

   toggle(path: Path): boolean;

   update(path: Path, updateFn: (currentValue: any, ...args) => any, ...args): boolean;

   ref<T = any>(path: string, defaultValue?: T): Ref<T>;
}

export class View<D = any> implements ViewMethods<D> {
   constructor(config?: ViewConfig);

   getData(): D;

   init(path: Path, value: any): boolean;

   set(path: Path, value: any): boolean;
   set(path: Record, value: Record): boolean;

   /**
    * Copies the value stored under the `from` path and saves it under the `to` path.
    * @param from - Origin path.
    * @param to - Destination path.
    */
   copy(from: Path, to: Path): boolean;

   move(from: Path, to: Path): boolean;

   /**
    * Removes data from the Store.
    * @param paths - Any number or an array of paths to be deleted.
    * @return {boolean}
    */
   delete(path: Path): boolean;
   delete(paths: Path[]): boolean;
   delete(...paths: Path[]): boolean;

   clear();

   get(path: Path);
   get(paths: Path[]);
   get(...paths: Path[]);

   toggle(path: Path): boolean;

   update(path: Path, updateFn: (currentValue: any, ...args) => any, ...args): boolean;

   /**
    * `batch` method can be used to perform multiple Store operations silently
    * and re-render the application only once afterwards. The Store instance
    * is passed to the `callback` function.
    * @param callback - Function that will perform multiple Store operations
    * @return {boolean}
    */
   batch(callback: (store: View) => void): boolean;

   silently(callback: () => void): boolean;

   notify(path?: string): void;

   subscribe(callback: (changes?) => void): () => void;

   load(data: Record): boolean;

   dispatch(action);

   getMethods(): ViewMethods;

   ref<T = any>(path: string, defaultValue?: T): Ref<T>;
}
