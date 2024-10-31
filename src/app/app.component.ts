import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule,MessagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managementsystem';
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
        {
            label: 'Teachers',
            icon: 'pi pi-home',
            routerLink:['/teacher']
        },
        {
            label: 'Students',
            icon: 'pi pi-star',
            routerLink:['/student']
        },
        {
            label: 'Courses',
            icon: 'pi pi-search',
            routerLink:['/courses']
           
        },
        {
            label: 'TeacherDetail',
            icon: 'pi pi-envelope',
            routerLink:['/teacherstudentcourse']
        }
    ]
}
}
