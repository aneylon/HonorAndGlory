import { CrewMember } from './CrewMember';
import { Edge } from './Edge';

export interface Crew {
  id: number;
  ShipType: string;
  SecondaryAgenda: string;
  Edge: Edge;
  Commander: CrewMember;
  CrewMembers: [CrewMember];
}
