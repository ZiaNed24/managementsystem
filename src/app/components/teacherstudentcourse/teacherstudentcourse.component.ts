import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule,MessagesModule],
  templateUrl: './teacherstudentcourse.component.html',
  styleUrls: ['./teacherstudentcourse.component.css']
})
export class TeacherstudentcourseComponent {
  cols: Column[];
  exportColumns: ExportColumn[];
  selectedProducts: any[] = [];
  visible: boolean = false; // Ensure 'visible' is initialized

  showDialog() {
    this.visible = true; // This should trigger dialog visibility
  }

  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    // Add more products if necessary
  ];

  constructor() {
    this.cols = [
      { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
}
