import { Pipe } from '@angular/core';
import { TrackModel } from './../../core/model/tracks.model';
import { OrderListPipe } from './order-list.pipe';
import * as mocksRaw from '../../data/tracks.json';



describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', () => {
    //TODO:Arranque

    const pipe = new OrderListPipe();
    const { data } : any = (mocksRaw as any).default
  })
});
