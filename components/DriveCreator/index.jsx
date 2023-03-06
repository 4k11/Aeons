import { useState } from "react";
import { useBundlrState } from '../../stores/BundlrStore'
import Button from "../Button";
import style from "./style.module.css";

export default function DriveCreator() {
  const [fileSystem, fetchBalance, refreshCurrentFileData] = useBundlrState(state => [state.fileSystem, state.fetchBalance, state.refreshCurrentFileData]);
  const [driveName, setDriveName] = useState();

  async function onCreate() {
    await fileSystem.createDrive(driveName);
    refreshCurrentFileData();
    await fetchBalance();
  }

  return (
    <div className={style.creator}>
      <label>Drive name: </label>

      <input
        onInput={(e) => {
          setDriveName(e.target.value);
        }}
      />

      <Button onClick={onCreate}>Create Drive</Button>
    </div>
  );
}
