import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1 class="text-center">{{title}}</h1><button class="btn btn-default" type="submit">Button</button>'
})
export class AppComponent {
    public title = 'Time Keeping App';
}
