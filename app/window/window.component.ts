// All of the Node.js APIs are available in this process.

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'window',
    templateUrl: 'window.component.html',
    styleUrls: ['window.component.css'],
})
export class WindowComponent {
    private get electronVersion() : string {
        return process.versions.electron;
    }

    private get chromiumVersion() : string {
        return process.versions.chrome;
    }

    private get nodeVersion() : string {
        return process.versions.electron;
    }
}