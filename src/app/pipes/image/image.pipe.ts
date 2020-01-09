import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value)
    return value ? `${URL_SERVICES}/image/user/${value}` : `${URL_SERVICES}/image/user/no-img.jpg`;
  }

}
