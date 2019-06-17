import { RouterType } from "../enums";

export const routerMapping = (routerType: RouterType) => {
  const mappingList = {
    [RouterType.Music]: '/pages/music/index',
    [RouterType.Me]: '/pages/me/index'
  }

  return mappingList[routerType];
}