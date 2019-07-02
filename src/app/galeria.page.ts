import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
  ) { }



  opcion1 : any;
   opcion2 : any;
   opcion3 : any;

   opcion1check  = 0;
   opcion2check  = 0;
   opcion3check  = 0;
  

   cambiaopcion1(){ 
     if(this.opcion1check===0) {
           this.opcion1check=1}
     else{this.opcion1check=0};
     return;}
     cambiaopcion2(){ 
      if(this.opcion2check===0) {
            this.opcion2check=2}
      else{this.opcion2check=0};
      return;}
      cambiaopcion3(){ 
        if(this.opcion3check===0) {
              this.opcion3check=3}
        else{this.opcion3check=0};
        return;}

        radio1check  = 0;
        radio2check  = 0;
        radio3check  = 0;
        radio4check  = 0;
       
        cambiaopcion11(){ 
          if(this.radio1check===0) {
           this.radio1check=1;this.radio2check=0;this.radio3check=0;this.radio4check=0;}
          else{this.radio1check=0;};
          return;}
        cambiaopcion22(){ 
           if(this.radio2check===0) {
                 this.radio2check=2;this.radio1check=0;this.radio3check=0;this.radio4check=0;}
           else{this.radio2check=0};
           return;}
           cambiaopcion33(){ 
             if(this.radio3check===0) {
              this.radio3check=3;this.radio1check=0;this.radio2check=0;this.radio4check=0;}
             else{this.radio3check=0};
             return;}
           cambiaopcion44(){ 
              if(this.radio4check===0) {
                    this.radio4check=4;this.radio1check=0;this.radio2check=0;this.radio3check=0;}
              else{this.radio4check=0};
              return;}
           




  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.image = "./assets/imgs/default_image.jpg";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    let data = {
      title: value.title,
      description: value.description,
      image: this.image
    }
    this.firebaseService.createproducto(data)
    .then(
      res => {
        this.router.navigate(["/galeria"]);
      }
    )
  }

 

  async presentLoading(loading) {
    return await loading.present();
  }

}
