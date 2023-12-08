import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Hunter } from 'src/app/models/hunter.model';

@Component({
  selector: 'app-atualizar-hunter',
  templateUrl: './atualizar-hunter.component.html',
  styleUrls: ['./atualizar-hunter.component.css']
})
export class AtualizarHunterComponent implements OnInit {
  id!: number;
  hunter: Hunter = new Hunter();

  constructor(private  service : ServiceService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {
    this.getUserById();
  }

  private getUserById() {
    this.id = this.route.snapshot.params['id'];
    this.service.getHunterById(this.id).subscribe({
      next: (data) => {
        this.hunter = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


  updateUser() {
    this.service.atualizar(this.id, this.hunter).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToUserList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToUserList() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log(this.hunter);
    this.updateUser();
  }

}
