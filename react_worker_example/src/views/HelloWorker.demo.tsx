import * as React from "react";
import { useEffect } from "react";
import { wrap } from "comlink";
import { HelloWorker } from "./hello.worker.type";

type PropsType = {};

const HelloWorkerDemo: React.FC<PropsType> = () => {
  useEffect(() => {
    (async () => {
      const obj = wrap<HelloWorker>(
        new Worker("./hello.worker.ts", { type: "module" })
      );
      console.log(`Counter: ${await obj.counter}`);
      await obj.inc();
      console.log(`Counter: ${await obj.counter}`);
    })();
  }, []);
  return <div>HelloWorkerDemo</div>;
};

export default HelloWorkerDemo;
