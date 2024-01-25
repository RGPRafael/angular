import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { Hunter } from 'src/app/models/hunter.model';
import { Router } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-editarhunter',
  templateUrl: './ListarTodosHunters.component.html',
  styleUrls: ['./ListarTodosHunters.component.css']
})
export class EditarhunterComponent implements OnInit {


  selectedHunterIds: number[] = [];

  escolha! : boolean ;

  hunters: Hunter[] = []; 

  hunter: Hunter | undefined; // Assuming Hunter is the type of the object

  constructor(private  service : ServiceService, private router: Router) {
    
    
    //this.buscarTodos() 
  
  }

  ngOnInit(): void {
  
   
  }

  seletormudou() {
    if (this.escolha !== null) {
      this.buscarTodos(this.escolha);
    } else {
      // Handle the case where escolha is null or not set
    }
  }


  private buscarTodos(escolha: boolean) {
    this.service.buscarTodos(escolha).subscribe(data => {
      this.hunters = data; // Populate 'hunters' with the fetched data
      console.log("console log " + this.hunters.length)
      
    }, 
    (error) => {
      console.error('Error fetching hunters:', error);
      // Handle error or display a message to the user
    }
    
    );
  }


  atualizar(id: number) {
    //this.router.navigate(['atualizar-hunter', id]);
  }

  AtivarHunter(id: number){
    this.service.ativarHunter(id).subscribe()
  }

  excluir(id: number) {
    console.log(id)
    this.service.excluir(id).subscribe(data => {
      console.log( "excluir ")
      console.log(data);
      //this.buscarTodos();
    });
  }


  deleteSelectedHunters(): void {
    if (this.selectedHunterIds.length > 0) {
      this.service.deleteRecords(this.selectedHunterIds).subscribe(
        () => {
          console.log('Records deleted successfully');
          this.selectedHunterIds.splice;
          // Optionally, update your UI or perform other actions after deletion
        },
        (error) => {
          this.selectedHunterIds.splice;
          console.error('Error deleting records:', error);
        }
      );
    } else {
      this.selectedHunterIds.splice;
      console.warn('No users selected for deletion');
    }
  }

  updateSelectedHunters(hunterId: number, isChecked: boolean): void {
    if (isChecked) {
      this.selectedHunterIds.push(hunterId);
    } else {
      this.selectedHunterIds = this.selectedHunterIds.filter((id) => id !== hunterId);
    }
  }

}



