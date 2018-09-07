import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title' //ถ้าเรียกใช้ pipe ใช้ตรงนี้
})
export class TitlePipe implements PipeTransform {

  transform(value: any, titleText: string): string { //เรียกฟังก์ชันนี้ทุกครั้งที่ค่าเปลี่ยน

    return titleText +" : "+ value;
  }

}
