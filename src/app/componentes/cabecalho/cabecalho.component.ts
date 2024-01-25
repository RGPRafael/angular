import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  isLogado(): boolean {
    return this.service.isLogado();
  }

}
