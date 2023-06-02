# Demo of Promise in React Native

Based on the React Native template.

Added this:

```
  useEffect(() => {
    console.log('useEffect starts');
    if (!done) {
      const f = async () => {
        setDone(true);
        new Promise((resolve, reject) => {
          if (1 == 1) {
            // Always throw an error.
            // This will cause "Possible Unhandled Promise Rejection"
            throw new Error('Something went wrong in the promise');
          }
          resolve('Promise resolved successfully!!');
        }).then(() => {
          console.log('Promise.then called!!');
        });
      }
      console.log('useEffect calling f()');
      f();
    }
    return () => {};
  }, [done]);
```

So this app always throws an unhandled promise rejecttion error.

The app doesn't crash, however.
