import { Route } from "@angular/router";

export const route : Route[] =[
    {
        path: '',
        loadChildren: './registration/registration.module#RegistrationModule'
    },

    {
        path : 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path : 'interviewer',
        loadChildren: './interviewer/interviewer.module#InterviewerModule'
    }

]
    
