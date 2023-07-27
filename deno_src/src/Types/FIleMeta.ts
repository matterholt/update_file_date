export interface MetaData {
  isFile: boolean;
  isDirectory: boolean;
  isSymlink: boolean;
  size: number;
  mtime: string;
  atime: string;
  birthtime: string;
  dev: number;
  ino: number;
  mode: number;
  nlink: number;
  uid: number;
  gid: number;
  rdev: number;
  blksize: number;
  blocks: number;
  isBlockDevice: boolean;
  isCharDevice: boolean;
  isFifo: boolean;
  isSocket: boolean;
}
