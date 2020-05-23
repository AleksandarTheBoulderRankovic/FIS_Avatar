import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  public reload_on_entry : boolean = true;

  constructor() { }

  reloadPage() {
    setTimeout(function(){ alert("Hello"); window.location.reload(); }, 15000);
    
  }
}
