import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "asdf asdf asdf",
      file_url: "http://google.com",
      udpated_at: "11/11/16",
      image_url: "http://google.com",
    },
    { 
      title: "My second Doc",
      description: "asdf asdf asdf",
      file_url: "http://google.com",
      udpated_at: "11/11/16",
      image_url: "http://google.com",
    },
    { 
      title: "My third Doc",
      description: "asdf asdf asdf",
      file_url: "http://google.com",
      udpated_at: "11/11/16",
      image_url: "http://google.com",
    },
  ]
}