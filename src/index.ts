/// <reference types="node"/>

import eos = require("end-of-stream");

function endOfStream(s: NodeJS.ReadableStream | NodeJS.WritableStream): Promise<void> {

  return new Promise<void>((res, rej) =>
    eos(s, (error => {
      if (error) {
        return rej(error)
      }

      return res()
    }))
  )
}

export default endOfStream;