import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filterNote:string) {
    if(value===''|| filterNote===''){
      return value
    }
    const noteList=[];
    for(const note of value){
      if(note.title.includes(filterNote)){
        noteList.push(note);
      }
    }
    console.log("filter applied")
    return noteList;
  }

}
