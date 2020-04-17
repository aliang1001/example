import * as React from "react";
import { useEffect } from "react";
import { MapWorkerType } from "./HelloConcurrency.worker.type";
import { proxy, wrap } from "comlink";

type PropsType = {};

const HelloConcurrencyWorker: React.FC<PropsType> = props => {
  useEffect(() => {
    (async () => {
      const map = wrap<MapWorkerType>(
        new Worker("./callback.worker.ts", {
          type: "module"
        })
      );
      const list = await map(
        [1, 2, 3],
        proxy(i => i * 2)
      );
      console.log("list: ", list);
    })();
  }, []);

  return <div>HelloConcurrencyWorker</div>;
};

export default HelloConcurrencyWorker;
