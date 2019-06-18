import { RouterType } from "../enums";

export const routerMapping = (routerType: RouterType) => {
  const mappingList = {
    [RouterType.Music]: '/pages/music/index',
    [RouterType.Me]: '/pages/me/index',
    [RouterType.MusicDetai]: '/pages/musicDetail/index'
  }

  return mappingList[routerType];
}