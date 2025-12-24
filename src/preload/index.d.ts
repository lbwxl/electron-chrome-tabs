import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    tabs: ITabsAPI
  }
}

export interface ITabsAPI {
  new: (url?: string) => Promise<number>
  close: (id: number) => Promise<void>
  select: (id: number) => Promise<void>
  reorder: (tabIds: number[]) => Promise<void>
  getAllTabIds: () => Promise<string[]>
  getSelectedTabId: () => Promise<number>
  getSelectedTabTitle: () => Promise<string>
}

