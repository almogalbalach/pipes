import {Component} from '@angular/core'
import {PipeTransform} from '@angular/core'
import {Pipe} from '@angular/core'

@Pipe({
    name: 'daysInterval'
})

export class DaysIntervalPipe implements PipeTransform{

    transform(firstDate : Date, secondDate: Date) : Number {
        let valueOfOneDay = 1000 * 60 * 60 * 24;
        let firstDateTimeInMs = firstDate.getTime();
        let secondDateTimeInMs = secondDate.getTime();
        let datesDiffrenceInMs = Math.abs(secondDateTimeInMs - firstDateTimeInMs);
    
        return Math.round(datesDiffrenceInMs / valueOfOneDay);
    }
}