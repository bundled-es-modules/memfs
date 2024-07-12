import memfsDefault, {
  memfs as _memfs,
  fs as _fs,
  createFsFromVolume as _createFsFromVolume,
  vol as _vol,
  Volume as _Volume,
} from "memfs";
export default memfsDefault;
export const memfs = _memfs;
export const fs = _fs;
export const createFsFromVolume = _createFsFromVolume;
export const vol = _vol;
export const Volume = _Volume;
