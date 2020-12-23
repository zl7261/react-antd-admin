import { useEffect } from 'react';

type Callback = () => Promise<any>;

type Deps = readonly any[];

/**
 *
 * @param callback callback
 * @param deps dependencies
 */
export default function useAsyncEffect(callback: Callback, deps: Deps = []) {
  useEffect(() => {
    callback().catch(e => console.log('useAsyncEffect error:', e));
  }, deps);
}
