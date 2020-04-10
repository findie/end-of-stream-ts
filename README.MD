# end-of-stream-ts
Await the completion or error of a stream with typescript definitions

```
npm i -s end-of-stream-ts
# or
yarn add end-of-stream-ts
```

```typescript
import endOfStream from 'end-of-stream';
import {createReadStream} from 'fs';

;(async () => {

    const stream = createReadStream(__filename);
    stream.on('data', d => console.log(d.toString()));

    try {
      await endOfStream(stream);
      console.log('done');
    } catch(e) {
      console.error(e);
    }

})();

```

Package based on [end-of-stream](https://github.com/mafintosh/end-of-stream).