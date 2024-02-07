import { Component } from '@angular/core';
import { ContributorService } from 'src/app/services/contributor.service';

@Component({
  selector: 'app-contributor-dashboard',
  templateUrl: './contributor-dashboard.component.html',
  styleUrls: ['./contributor-dashboard.component.css']
})
export class ContributorDashboardComponent {

  constructor (private contributorService: ContributorService) {}

  task1 = this.contributorService.getAssignments().subscribe(
    (result) => {
      console.log(result);
      
    }
  );
  
  
   // Sample task data
   task = {
    title: 'Sample Task',
    description: 'Task details go here.',
    dueDate: '2024-02-28',
    status: 'In Progress'
  };


  // Variable to store new status
  newStatus: string = '';

  // Variable to control the visibility of the popup
  updateStatusPopup: boolean = false;

  // Function to open the update status popup
  openUpdateStatusPopup(): void {
    this.updateStatusPopup = true;
  }

  // Function to close the update status popup
  closeUpdateStatusPopup(): void {
    this.updateStatusPopup = false;
  }

  // Function to update task status
  updateStatus(): void {
    // Add logic to update task status here
    alert('Task status updated: ' + this.newStatus);
    this.closeUpdateStatusPopup();
  }

  // Function to open chat with manager (replace with your logic)
  openChatWithManager(): void {
    alert('Opening chat with manager...');
    console.log(this.task1);
  }

}
