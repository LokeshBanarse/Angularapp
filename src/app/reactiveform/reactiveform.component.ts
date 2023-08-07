import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
isFormSubmitted: boolean = false;
  myForm: FormGroup;
  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]

  notAllowedNames = ['Codemind', 'Technology'];
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {
console.log('ngOnInit called')
//Set Value
  //   setTimeout(() => {
  //     this.myForm.setValue({
  //       'userDetails' : {
  //         'username': 'Codemind1122',
  //         'email': 'codemind@outlook.com'
  //       },
  //       'course' : 'JavaScript',
  //       'gender': 'Female',
  //       'skills': ['Azure']
  //     })
  // }, 5000)
  setTimeout(() => {
    this.myForm.patchValue({
      'userDetails' : {
        'email': 'jack@gmail.com'
      }
    })
    }, 5000)

  }


  createForm() {

    // this.myForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NameNotAllowed.bind(this)]),
    //     //'email': new FormControl(null,[Validators.required, Validators.email] )
    //    'email': new FormControl(null,[Validators.required, Validators.email], this.EmailNotAllowed )
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray([ new FormControl('Angular8', Validators.required)])
    // })

    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
        email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
  
    })
  }

  resetForm() {
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course': 'Angular',
      'gender': 'Male',
      'skills': ['']
    });

  }
  OnSubmit() {
    if(this.myForm.valid){
      this.isFormSubmitted = true;
      console.log('Submit method called', this.myForm);
      console.log('Forms Value', this.myForm);
    }
    console.log('Submit ,Method Called',this.myForm);
    
    }
    OnAddSkills() {
     var skillArr = this.myForm.get('skills') as FormArray;
     skillArr.push(new FormControl('', Validators.required))
    }

    onRemove(index:number){
      var skillArr = this.myForm.get('skills') as FormArray;
      skillArr.removeAt(index);
    }

    NameNotAllowed(control: FormControl) {
      if (this.notAllowedNames.indexOf(control.value) !== -1) {
      // custom validation error code
          return { 'namesIsNotAllowed': true}
      }
      return null;
    }

    EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
      const myPromise = new Promise<any>((resolve, reject) => {
        setTimeout( () => {
  
          if (control.value === 'd.suryawanshi123@gmail.com') {
            resolve({'emailNotAllowed': true})
          } else {
            resolve(null)
          }
        }, 3000)
      })
      return myPromise;
  
    }
 }