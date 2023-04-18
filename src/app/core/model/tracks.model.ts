import { ArtisModel } from './artist.model';

export interface TrackModel{
  name: String,
  album: String,
  cover: String,
  url: String,
  _id: String |  number,
  artist?: ArtisModel
}
