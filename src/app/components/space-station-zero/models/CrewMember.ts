import { Ability } from './Ability';
import { Equipment } from './Equipment';

export interface CrewMember {
  id: number;
  name: string;
  type: string;
  Lf: number;
  Mv: number;
  Co: number;
  Re: number;
  In: number;
  Dmg: number;
  XP: number;
  SpecialAbilities: [Ability]; // Object? Array of objects?
  Equipment: [Equipment]; // Object? Array of...objects?
}
