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
  public operator: string = '';

  constructor(
  ) { }

  ngOnInit() {
  }

  calculate(): any {
    if(!Number.isFinite(this.no1)){
      this.value = "Enter no1";
      return this.value;
    }
    if(!Number.isFinite(this.no2)){
      this.value = "Enter no2";
      return this.value;
    }
    else{
      switch(this.operator){
        case '+' : this.value = "Summation : " + this.sum(this.no1 , this.no2);
                    break;
        case '-' : this.value = "Substraction : " + this.sub(this.no1 , this.no2);
                    break;
        case '/' : this.value = "Division : " + this.div(this.no1 , this.no2);
                    break;
        case '*' : this.value = "Multiplication : " + this.mul(this.no1 , this.no2);
                    break;
        case '^' : this.value = "Square : " + this.sqr(this.no1 , this.no2);
                    break;
        case '%' : this.value = "Square Root of " + this.no1 + " : " + this.sqrt(this.no1) 
                                + " and " + this.no2 + " : " + this.sqrt(this.no2);
                    break;
        case ''  : this.value = "Please enter operator";
                    break;
        default  : this.value = "Invalid operator";
      }
      return this.value;
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
  sqrt(no:Number): any{
    return Math.sqrt(Number(no));
  }
  sqr(no1:Number , no2:Number): any{
    return Math.pow(Number(no1) , Number(no2));
  }

}
