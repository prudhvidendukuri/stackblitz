import {Component, OnInit} from '@angular/core'


@Component({
  selector:'one-app',
  templateUrl:'./one.component.html',
  styleUrls:['./one.component.css']
})

export class OneComponent implements OnInit {
   smallLetters:string[] = ["a","b",'c','d']
   CapitalLetters:string[]= ['A','B','C','D']
   numbers:string[]= ['0','1','2','3']
   characters:string[]=['!','@','#','$','%','&','_']
   randomNumber:any;
   passwords:any = [];
   
   
    ngOnInit(){
      
    }


    password:string = "";

    data(event){
      const lengthOfPassword = event;
      for(let i=1;i <= lengthOfPassword;i++){
       this.randomNumber = Math.floor(Math.random()*4);
       
       this.passwords.push(this.smallLetters[this.randomNumber])
       console.log(this.passwords.join(''))

      }




    }

}