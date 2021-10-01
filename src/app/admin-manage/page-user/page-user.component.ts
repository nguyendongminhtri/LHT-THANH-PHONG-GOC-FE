import {Component, OnInit} from '@angular/core';
import {UserAccount} from '../../model/UserAccount';
import {AdminService} from '../../service/admin.service';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {
  totalElements: number = 0;
  users: UserAccount[] = [];
  loading: boolean;
  deleteSuccess: any = {
    message: "yes"
  }
  checkDelete = false;
  status = '';
  constructor(private adminService: AdminService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getListRequest({page: 0, size: 3});
  }

  private getListRequest(request) {
    this.loading = true;
    this.adminService.pageUser(request).subscribe(data => {
      console.log('data --> ', data);
      this.users = data['content'];
      console.log('data[content] ---->', data['content']);
      this.totalElements = data['totalElements'];
      console.log('data[totalElements] == ', data['totalElements']);
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]', request['size']);
    this.getListRequest(request);
  }

  deleteUser(id: number) {
    this.adminService.deleteUserById(id).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.deleteSuccess)){
        this.checkDelete = true;
        this.status = 'Delete success!';
        // window.location.reload(); //Cach 1 : Dung Reload trang
        const request =  {page: 0, size: 90} //Cach 2: Cap nhat lai list sau khi xoa khong reload.
        this.getListRequest(request);
      }
    })
  }
  openDialog(id){
    console.log('goi openDialog');
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    console.log('dialogRef === ', dialogRef);
    dialogRef.afterClosed().subscribe(result =>{
      console.log('result === ', result);
      if(result){
        console.log('id ==== ', id);
        this.deleteUser(id);
      }
      console.log(`Dialog result ==>: ${result}`);
    })
  }
}
