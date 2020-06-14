import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Klient } from '../model/klient';
import { KlientService } from '../services/klient.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-klient-edit',
  templateUrl: './klient-edit.page.html',
  styleUrls: ['./klient-edit.page.scss'],
})
export class KlientEditPage implements OnInit {

  klient$: Observable<Klient>;
  vybranyKlientId: number;


  constructor(
    private service: KlientService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.klient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.vratKlienta(params.get('id'))
      )
    );
  }

  ukonciEditaciu(klient: Klient) {
    this.service.updateKlienta(klient).finally(() => {
      this.location.back();
    });
  }

}
