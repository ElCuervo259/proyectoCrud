import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from './../../../app/services/users/users.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  // new table
  dataSource = new MatTableDataSource();

  // Columns
  displayedColumns: string[] = ['nombre', 'nombreUsuario', "email", "ciudad", "calle", "zipcode", "compania", "opciones"];

  // method filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {

    this.getUsers();
  }

  // Metodo para obtener usuarios de la Api
  getUsers() {
    this.userService.getUsers().subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
    });
  }

  // eliminado desde un button
  deleteUser(id: any, name:string) {
    this.userService.deleteUser(id).subscribe((resp) => {
      Swal.fire({
        title: '¿Eliminar el/la usuario?',
        html: "Se eliminará el/la usuario: <strong>" + id  + " " +name + "</strong>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
      }).then((result) => {

        if(result.value){
          Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado',
            html: 'El/la Usuario' + id +" " +name +'</b> ha sido eliminada correctamente',
            allowOutsideClick: false,
          });
        }else{
          Swal.fire({
            icon: 'warning',
            title: 'Usuari@ no eliminad@',
            html: 'El/la Usuari@' + id +" " +name +'</b> no ha sido eliminado',
            allowOutsideClick: false,
          });
        }
        
      })
      
    });


  }

}//End class





