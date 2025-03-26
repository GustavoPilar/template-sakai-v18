import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        RadioButtonModule,
        RippleModule,
        TableModule,
        FileUploadModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextareaModule,
        InputIconModule,
        DialogModule,
        ReactiveFormsModule,
        IconFieldModule
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        RadioButtonModule,
        RippleModule,
        TableModule,
        FileUploadModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextareaModule,
        DialogModule,
        ReactiveFormsModule,
        InputIconModule,
        IconFieldModule,
    ]
})
export class SharedModule {}