import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
@Output() selectorEvent = new EventEmitter<string>();

    onSelect(itemType){        
        this.selectorEvent.emit(itemType);                
    }
}