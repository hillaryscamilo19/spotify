import { ArtisModel } from './artist.model';

export interface TracksModules{
  name: String,
  album: String,
  cover: String,
  url: String,
  _id: String |  number,
  artist?: ArtisModel
}
