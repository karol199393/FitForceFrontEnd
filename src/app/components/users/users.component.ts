import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Wywołujemy metodę wczytującą użytkowników podczas inicjalizacji komponentu
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data; // Przypisujemy pobranych użytkowników do tablicy users
      },
      (error) => {
        console.error('Błąd podczas pobierania użytkowników:', error);
      }
    );
  }
}



