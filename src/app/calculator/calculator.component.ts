import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value = '';

  public no1: number;
  public no2: number;
  public operator: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  calculate(): void {
    this.value = 'Result is : ';
    switch(this.operator){
      case '+' : this.value += this.sum(this.no1 , this.no2);
                  break;
      case '-' : this.value += this.sub(this.no1 , this.no2);
                  break;
      case '/' : this.value += this.div(this.no1 , this.no2);
                  break;
      case '*' : this.value += this.mul(this.no1 , this.no2);
                  break;
      default  : this.value = "Invalid operator";
    }
  }

  sum(no1:Number , no2:Number): any{
    return Number(no1) + Number(no2);
  }

  sub(no1:Number , no2:Number): any{
    return Number(no1) - Number(no2);
  }

  div(no1:Number , no2:Number): any{
    return Number(no1) / Number(no2);
  }

  mul(no1:Number , no2:Number): any{
    return Number(no1) * Number(no2);
  }

}
