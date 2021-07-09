import { Component, OnInit, Inject } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-foundation';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/models';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-current-project',
  templateUrl: './modal-current-project.component.html',
  styleUrls: ['./modal-current-project.component.scss']
})
export class ModalCurrentProjectComponent implements OnInit
{
  projCreateForm: FormGroup;
  activeProject: Project;

  constructor(public dialogRef: MatDialogRef<ModalCurrentProjectComponent>,
			  private dialog: MatDialog,
			  private projectsService: ProjectsService,
			  @Inject(MAT_DIALOG_DATA) public projData: any) { }

  ngOnInit() {

    
    this.projectsService.activeProject.subscribe( (next) => {
      this.activeProject = next;
    });

    this.projCreateForm = new FormGroup( {
      name: new FormControl(this.activeProject.name),
      description: new FormControl(this.activeProject.description)
    });

  }

  close() {
	this.dialogRef.close();
  }

  delete(){
    if(confirm("Are you sure you want to delete this project? This will also delete it from HazMapper, and anyone this project was shared with.")) {
      this.projectsService.delete(this.activeProject);
    }
    this.dialogRef.close();
  }
  
  update() {
    const p = new Project();
    p.description = this.projCreateForm.get('description').value;
    p.name = this.projCreateForm.get('name').value;
    p.id = this.activeProject.id;
    p.uuid = this.activeProject.uuid;
    this.projectsService.update(p);
    this.dialogRef.close();
  }

}
