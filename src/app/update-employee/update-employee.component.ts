import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();
  id: number;

  constructor(private employeeService: EmployeeService, private router:ActivatedRoute,
    private route:Router) {}

  ngOnInit(): void{

    this.id = this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee=data;
    }, error => console.log(error));


  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee= new Employee();
      this.goToList();
    }, error => console.log(error));

   
    
  }
  goToList(){

    this.route.navigate(['/employees']);
  }

  onSubmit(){
    this.updateEmployee();
  }



  




}
