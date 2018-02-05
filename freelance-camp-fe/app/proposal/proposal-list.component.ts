import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'spaul1522@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'spaul1522@gmail.com')
  proposalThree: Proposal = new Proposal(100, 'Something Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'spaul1522@gmail.com')

  proposals: Proposal[] = [
  this.proposalOne, 
  this.proposalTwo, 
  this.proposalThree
  ]
}