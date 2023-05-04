import { TrackModel } from './../../../app/core/model/tracks.model';
import { Pipe, PipeTransform } from '@angular/core';
// import { v4 as uuidv4} from 'uuid';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null) {
    console.log(value);
    const result = [];
     for(const post of value){
       if(post.name.indexOf(args) > -1){
         result.push(post)
       };
     };
     return result
  }
}
