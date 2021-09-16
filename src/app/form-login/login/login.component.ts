import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {SignInForm} from "../../model/SignInForm";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    status = 'Please fill in the form to LOGIN -->';
    status1 = ''
    form: any = {};
    hide = true;
    isLogin = false;
    check = false;
    signInForm: SignInForm;

    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
        // this.authService.getOption();
    }

    ngOnInit(): void {
        if (this.authService.getData()) {
            this.check = true;
        }
    }

    ngSubmit() {
        this.signInForm = new SignInForm(
            this.form.username,
            this.form.password
        )
        this.authService.signIn(this.signInForm).subscribe(data => {
            if (data.token != undefined) {
                this.tokenService.setToken(data.token);
                this.tokenService.setName(data.name);
                this.tokenService.setRoles(data.roles);
                this.tokenService.setAvatar(data.avatar);
                this.router.navigate(['user-account']).then(() => {
                    window.location.reload();
                });
            } else {
                this.isLogin = true;
                this.status = 'Login Failed! Please try again!'
            }
        })
    }
}
